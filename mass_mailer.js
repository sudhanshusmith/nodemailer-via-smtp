var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


function sendMail(reciver_name, reciver_email_list) {
    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: '', // process.env.REACT_APP_EMAIL
            pass: '', // process.env.REACT_APP_EMAIL_PASS // use the app_password here
        }
    }));
    let main_mail = reciver_email_list[0]
    reciver_email_list.shift();

    let mailOptions = {
        from: ' "Sudhanshu | IIT Delhi" sudhanshu.iitdelhi@gmail.com',
        to: main_mail,
        cc: reciver_email_list,
        subject: 'Test Mail', // add subject
        // text: ``,
        // html: { path: 'index.html' },
        html: `Hello ${reciver_name},
        <br> <br>
        I am <b>Sudhanshu Kumar</b>, a sophomore pursuing a Bachelor's Degree in Civil Engineering at the <b>Indian Institute of Technology (IIT), Delhi</b> <br> <br>
        Thanking You <br>
        Sudhanshu Kumar <br>
        Undergraduate at IIT Delhi <br>
        +91-7870565464`, 
        attachments: [{
            filename: "SudhanshuCV.pdf", path: "F:/Research Intern/automailer-and-massmailer/SudhanshuResume.pdf"
        }]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

sending_list = [
    {
     "Name": "Sudha",
     "Email": "sudhanshujee2020@gmail.com"
    },
   ]

var counter = 0;
var i = setInterval(function () {

    // Your code
    let email_list = sending_list[counter]["Email"].split(" ");
    //console.log(email_list)
    sendMail(sending_list[counter]["Name"], email_list)

    if (counter === sending_list.length - 1) {
        clearInterval(i);
    }
    counter++;

}, Math.random()*60000 );
