"use strict";

var config = {
    "templateBucket" : "bucket",
    "templateKey" : "Templates/Template.html",
    "targetAddress" : "email@me.com",
    "fromAddress": "From <from@example.com>",
    "defaultSubject" : "Email From {{name}}",
    "PRIVATE_KEY": "catpcha private key",
    "PUBLIC_KEY": "captcha public key"
}

module.exports = config
