const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.post('/sendToAll', (req, res) => {

	var notification = {
		'title': 'Title of notification',
		'text': 'Subtitle'
	};

	var fcm_tokens = ['<fcm-token-from-phone>'];

	var notification_body = {
		'to': 'topics/topic', // to all in that subscription
		'notification': notification,
		'registration_ids': fcm_tokens // to specific people
	}

	fetch('https://fcm.googleapis.com/fcm/send', {
		'method': 'POST',
		'headers': {
			'Authorization': 'key='+'<google-firebase-server-token-key>',
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
