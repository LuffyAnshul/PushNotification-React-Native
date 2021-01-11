const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.post('/sendToAll', (req, res) => {

	var notification = {
		'title': 'Title of notification',
		'text': 'Subtitle'
	};

	var fcm_tokens = [
		'dULWldYZRZKuyIMwY-bH1U:APA91bF750gXNjAidouRZDbtBAXCsdB-FwTC4zrZOCImaZ-qxxyFjrnxkvbxzuI4XKlAYZgvSyEPa57TGYuTQPB6XPXeVF119HhsFsBeCbTJWg97sn-26FF95BqSs4PZdlTE2Tr0gsJV'
	];

	var notification_body = {
		'to': 'topics/topic', // to all in that subscription
		'notification': notification,
		'registration_ids': fcm_tokens // to specific people
	}

	fetch('https://fcm.googleapis.com/fcm/send', {
		'method': 'POST',
		'headers': {
			'Authorization': 'key='+'AAAAITlrZ78:APA91bGskvDczAXAj0Sad1flxwTIOC8Ht-z_LaMPp2ZsJ-y23Tty-JeMR_3_jebWVkEeZK0Z4we0_8dWS6fa8CKJlzXfFZS1L5a8g39-mDwyqz90OM1PvmkrRWiBTfZLposPU6ZktsbI',
			'Content-Type': 'application/json'
		},
		'body': JSON.stringify(notification_body)
	}).then(() => {
		res.status(200).send('Notification Send Successfully');
	})
	.catch((err) => {
		res.status(404).send('Something Went Wrong');
		console.log(err);
	});
})

module.exports = router;