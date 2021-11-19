const nodemailer = require('nodemailer');

module.exports = (data) => {
	//para obtener OAuth2: https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: 'comandatpapi@gmail.com',
			clientId: "650156098194-j9ghh25aqd9kuoj7eognsa79meaept0q.apps.googleusercontent.com",
			clientSecret: "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",
			refreshToken: "1//04tqZlN82efm1CgYIARAAGAQSNwF-L9IrT69FPqbnAF_kaOBxjs5NxkRyM3ogb6i6qREY51A-qMhVyBOIe2kFo30DXzUbnpakHAs",
			accessToken: "ya29.a0ARrdaM-gJDCZE0AD1bz9t9fxr2AZC0gqFQvaBOVJQfKWaQbxQnQBB_Sk6-2HnH1d2cw7Fw5ALqPK80m2b37aHr7fodooYBQjML_74-e-j9wn7rfIPSH6Lqk2u6eh9z9h9zpP-VBlVhf2NbOc9zHqRrrnxbOv"
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