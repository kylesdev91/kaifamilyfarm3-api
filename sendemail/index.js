const nodemailer = require("nodemailer");

module.exports = async function (context, req) {
    let transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "kffsande12345@outlook.com",
            pass: "Pwd4Kff5and3"
        },
        });

        const mailOptions = {
            from: 'kffsande12345@outlook.com',
            to: 'kffsande12345@outlook.com',
            subject:
              'Order From ' + req.body.emailAddress + ' - ' + req.body.emailSubject,
            text: req.body.emailBody,
            html:
              '<div><table><th><tr><th>Name</th><th>Quantity</th></tr></thead><tbody>' +
              req.body.emailBody +
              '<tr><td></td><td style="text-align:right; font-weight: bold;"><p></p>' +
              req.body.orderTotal +
              '</td></tr></tbody></table></div>',
          };

        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Sent: " + info.response); 
            }
        }) 
};