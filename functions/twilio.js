const twilio = require('twilio');
const { accountSid, authToken } = require("./twilio_config");

module.exports = new twilio.Twilio(accountSid, authToken);