import nodemailer from "nodemailer";

export default async function testEmail(data:  any) {
    try {
        const testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });

        const info = await transporter.sendMail(data);

        console.log("Message sent: %s", info.messageId);

        // Get the Ethereal URL to preview this email
        const previewUrl = nodemailer.getTestMessageUrl(info);
        console.log("Preview URL: %s", previewUrl);
        // Output: https://ethereal.email/message/...
    } catch  (message) { 
        console.log(message)
    }
}