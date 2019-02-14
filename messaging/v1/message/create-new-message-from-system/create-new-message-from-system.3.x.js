// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.sessions('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                .messages
                .create({
                   body: 'Be aware, this conversation is being monitored.'
                 })
                .then(message => console.log(message.sid));
