const nodemailer = require('nodemailer');

async function main() {
  // Create a test account
  let testAccount = await nodemailer.createTestAccount();

  // Create a transporter using Ethereal SMTP
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // Send email
  let info = await transporter.sendMail({
    from: '"Node Test" <test@example.com>',
    to: 'recipient@example.com',
    subject: 'Hello from Ethereal',
    text: 'This is a test email sent using Ethereal!',
  });

  console.log('Message sent: %s', info.messageId);

  // Preview URL where you can view the email
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
