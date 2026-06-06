import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Get SMTP credentials from environment variables
    const smtpUser = "harsh.suryan10@gmail.com"
    const smtpPass = "pthz fkdc zkfi vucn"
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '587')

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials not configured')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Email to owner
    const ownerMailOptions = {
      from: smtpUser,
      to: 'harsh.suryan10@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #e2e8f0;">
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr style="border: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px;">
            This message was sent from your portfolio website.
          </p>
        </div>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: smtpUser,
      to: email,
      subject: 'Thank you for contacting me - Message Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I have received your submission and will get back to you as soon as possible.</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message Details:</strong></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Best regards,<br>Harsh Suryan</p>
          <hr style="border: 1px solid #e2e8f0; margin-top: 30px;">
          <p style="color: #64748b; font-size: 12px;">
            This is an automated response from my portfolio website.
          </p>
        </div>
      `,
    }

    // Send emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
