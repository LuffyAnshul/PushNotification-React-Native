const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/notification', require('./routes/api/notification'));

app.listen(PORT, () => {
	console.log(`Server Running on Port ${PORT}`)
});