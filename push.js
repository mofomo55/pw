var push = require('web-push');

let vapidKey = {
  publicKey: 'BIHeRRehOFJrIOs6n-T-dyAHX4aZ2CjetOIXzUjFUBsKEjTuLc94GXkJpXjWMtSipSQUH-B-Qzv1MP-F-Wc8YcE',
  privateKey: '18kZ2GUHe84MKRKbtYIg3uiiFeUtbWFxW96cmHvh1L8'
}



push.setVapidDetails('wwrf3f3r333@gmail.com', vapidKey.publicKey, vapidKey.privateKey)


let sub={};

push.sendNotification(sub, 'test message')