import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, project, message, token } = req.body;

  if (!name || !email || !message || !token) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // 🔒 Verify reCAPTCHA
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: "POST" }
  ).then(r => r.json());

  if (!recaptchaResponse.success) {
    return res.status(400).json({ message: "Failed CAPTCHA verification" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name} (${project || "General"})`,
      text: `
        Name: ${name}
        Email: ${email}
        Project: ${project}
        Message:
        ${message}
      `,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
}
