// source code :
var sid = "ACf76bded57f46773c000ffad822e56c99"; // invalid
var auth_token = "c085b88216415d0db75102b0051d2942"; // invalid
var twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+12512701067",
    to: "+15197099549",
    body: "twilio nodejs sms test ",
  })
  .then(function (res) {
    console.log("message sent!");
  })
  .catch(function (err) {
    console.log(err);
  });
