var request = require('request');

exports.send = function(datos,cb) {
  request({
    method: 'POST',
    uri: 'https://android.googleapis.com/gcm/send',
    headers: {
      'Content-Type':'application/json',
      'Authorization':'key=AIzaSyDqUc74xxuD3dqsO9eKDjAIvDyZLpB6JUQ'
    },
    body: JSON.stringify({
      "registration_ids" : 'hos',
      "data" : {
      "msg":msg,
      "fromu":fromu,
      "name":fromn
    },
    "time_to_live": 108
  })
  }, function (error, response, body) {
    cb({'response':"Success"});
  });
}