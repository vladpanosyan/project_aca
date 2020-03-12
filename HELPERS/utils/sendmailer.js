const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    tls:{
        rejectUnauthorized: false
    },
    auth: {
        user: process.env.SENDER_MAIL_ADRESS,
        pass: process.env.SENDER_MAIL_PASSWORD
    }
});

module.exports = (email, url, opts) => {
    const options = opts || {
        subject: 'Verify portal account',
        text: 'To user your account you need to go from the link',
        html: `<a style="color:red" href='${url}/'>Go to link for verify- ${url}</a>` 
    }
    const mailOptions = {
        from: process.env.SENDER_MAIL_ADRESS,
        to: [...email],
        ...options
    };

    return transporter.sendMail(mailOptions)
}