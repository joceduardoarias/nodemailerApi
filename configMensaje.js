const nodemailer = require('nodemailer');

module.exports = (data) => {
	//para obtener OAuth2: https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: 'comandatpapi@gmail.com',
			clientId: "217821367514-q4oa0bp00k5snl62c1d4guofu2nr2uu8.apps.googleusercontent.com",
			clientSecret: "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",
			refreshToken: "1//04i9vBoiSzvTfCgYIARAAGAQSNwF-L9IrERQWob9pxnci8UHNatsj8gqNCz7uTd5CNK5GlW2AYqD-L7C7wkhGscDhpFMDungwTZI",
			accessToken: "ya29.a0ARrdaM84WmH9pV3u7dcJ-zJWRnVjXocU7F3uCy7Nh4T2YpgrDtYAr-pQVUspVoo3yQI77cN1TtgXYqPX-SY3V5UT2SbxchZogdu2cPf5y7NYSYpvYxA2o8i4w6TJyLi0j46LGVZLHy36T3CUvsMFapnXKOcL"
		}
	});
	const mailOptions = {
		from: 'comandatpapi@gmail.com',
		to: data.destinatario,
		subject: data.asunto,
		html: data.contenido
	};
	return transporter.sendMail(mailOptions).then(info =>{
		return info;
	}).catch(err =>{
		return err;
	});
}