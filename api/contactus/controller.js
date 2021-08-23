const sgMail = require("@sendgrid/mail")
const { create } = require("./services")
require("dotenv").config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.contactus = (req, res) => {

  const { name, email, phoneno, message } = req.body
  if (name && email && phoneno && message) {
    create(req.body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "internal server error"
        })
      }
      if (results) {
         res.status(200).json({
          success: 1,
          message: "Thanks for connecting with us."
        })
        let msg = {
          to: `${email}`, // Change to your recipient
          from: 'validate@managemyglobe.com', // Change to your verified sender
          subject: 'email for confirmation',
          text: 'your email has been confirmed.',
          html: '<strong>your email has been confirmed.</strong>',
        }
        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
          })


      }

    })
  } else {
    return res.status(400).json({

      success: 0,
      message: "provide deatils"


    })
  }





}