require('dotenv').config();
const express = require("express"),
      bodyParser = require("body-parser"),
      nodemailer = require("nodemailer"),
      cors = require("cors");

const app = express();


// Body Parser Middleware: 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Static Folder
app.use(express.static(`${__dirname}/../build`));

app.post('/api/form', (req, res) => {
  const output = `
  <p> You have a new contact from your Portfolio</p>
  <h5> Contact Details </h5>
    <ul>
        <li>Full Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Business Name: ${req.body.business}</li>
    </ul>

  <h3> Message </h3>
  <p> ${req.body.message} </p>
  `;

   // NODEMAILER
   // create reusable transporter object using the default SMTP transport
   let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'scottyoung@scottyoung.tech', 
            pass: process.env.PASSWORD 
        },
        tls: {
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Scott Young\'s Portfolio" <scottyoung@scottyoung.tech>', // sender address
        to: 'scottyoung@scottyoung.tech, scott.t.young1@gmail.com', // list of receivers
        subject: 'New Portfolio Message', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
});


// Build
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

// PORT
const PORT = 3080;
app.listen(PORT, () => console.log(`listening on port:`, PORT));


