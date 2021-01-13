# PushNotification-React-Native

## Lets Get Started

    git clone https://github.com/LuffyAnshul/PushNotification-React-Native.git
    cd PushNotification-React-Native

## What is NotificationServer ?

This is the server side / backend of your mobile application. This file starts a localhost server at PORT 5000 (localhost:5000) for the api POST request that is supposed to trigger get notification data, the fcm-token that the notification is supposed to be sent.
It posts request at `https://fcm.googleapis.com/fcm/send` with all the information to trigger the Notification.


## What is RNPushNotification ?

This is the actual application where the notification is going to be pushed.
Initially, the app sends request to your firebase cloud server and gets an unique fcm-token which is supposed to be copied into your server i.e., `NotificationServer/routes/api/notification.js` to send the notification to that device. 
#### Note: Check console.log for fcm-token.

## How to get Notification ?

Using [Postman](https://www.postman.com/) send a POST request at `http://localhost:5000/api/notification/sendToAll` we have already set a default notification info, can definitely modify code to accept from API parameter values. 
Finally, on sending the post request api, notification will be triggered on the mobile application.
