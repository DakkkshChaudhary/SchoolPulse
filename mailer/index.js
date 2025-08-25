const nodemailer = require("nodemailer")

const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        // user: process.env.MAIL_SENDER,
        // pass: process.env.MAIL_PASSWORD
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
})
module.exports = mailer