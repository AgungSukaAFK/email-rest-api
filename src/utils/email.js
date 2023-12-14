import nodemailer from "nodemailer";

async function sendEmail({ fromEmail, message, fromName }) {
  try {
    // Create a transporter object
    let transporter = nodemailer.createTransport({
      service: "gmail", // Email service
      auth: {
        user: "agungportfoliomail@gmail.com", // Your email address
        pass: "yfjp tvnh dtht tntx", // Your email password
      },
    });

    // Set the email options
    let mailOptions = {
      from: `${fromEmail}`, // Sender email address
      to: "wismaagung23@gmail.com", // Recipient email address
      subject: `Name: ${fromName}, from email: ${fromEmail}`, // Email subject
      text: `${message}`, // Email body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.messageId);
    return "Success";
  } catch (error) {
    console.log("Error sending email: " + error);
    return "Error";
  }
}

export default {
  sendEmail,
};
