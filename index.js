// source code :
var sid = "ACf76bded57f46773c000ffad822e56c99";
var auth_token = "f822415e11ecb66755f130cf20d2c7b9";

var twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+12512701067",
    to: "+15197099549",
    body: "this is a testing message",
  })
  .then(function (res) {
    console.log("message has sent!");
  })
  .catch(function (err) {
    console.log(err);
  });
