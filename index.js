// source code :

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
