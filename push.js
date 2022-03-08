var push = require('web-push');

let vapidKey = {
  publicKey: 'BIHeRRehOFJrIOs6n-T-dyAHX4aZ2CjetOIXzUjFUBsKEjTuLc94GXkJpXjWMtSipSQUH-B-Qzv1MP-F-Wc8YcE',
  privateKey: '18kZ2GUHe84MKRKbtYIg3uiiFeUtbWFxW96cmHvh1L8'
}



push.setVapidDetails('wwrf3f3r33', vapidKey.publicKey, vapidKey.privateKey)


let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/cd2ZlCTOSH8:APA91bGV6IRK20pUWF6BtXleVPV6xFJa--sbq6Ab44ZiL419qhXZ-3pAdqz1XtuYvdUNPxNI0S3bwPDrn8Mq_QSPjhUsFPwKmiZGyp_V5KdEMi5hd0ra8PiYGyFnO00cLkKpzkm51cdE","expirationTime":null,"keys":{"p256dh":"BNdBvASEbmbQzU8Yda8ahn894FUjJPG1GAg-JoTwa4GyLNUqtCZoFUyT-dq81tgYcDG7YTra1vGG4oT7kzVyMfg","auth":"XsAueXDbDKBMEb8Ka9r8Wg"}};

push.sendNotification(sub, 'test message')