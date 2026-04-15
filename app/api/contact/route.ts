import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const port = Number(process.env.SMTP_PORT) || 587;
    const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Increase timeout for slow servers
      connectionTimeout: 10000,
      greetingTimeout: 5000,
    });

    const mailOptions = {
      from: `CN IT Solutions <${process.env.SMTP_USER}>`,
      to: 'partner@cnitsolutions.com',
      replyTo: email,
      subject: `[Website Lead] ${subject || 'Inquiry from ' + name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Website Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error: any) {
    console.error('Email send error full trace:', error);
    
    // Log more specific SMTP error details if available
    const errorMessage = error?.response || error?.message || 'Failed to send message.';
    const errorCode = error?.code || 'COMMUNICATION_ERROR';

    return NextResponse.json({ 
      error: 'Failed to send message.', 
      details: errorMessage,
      code: errorCode
    }, { status: 500 });
  }
}
