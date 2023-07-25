import axios from 'axios';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).end();
	}

	const { text, target } = req.body;

	const endpoint = 'https://translation.googleapis.com/language/translate/v2';
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;

	try {
		const response = await axios.post(endpoint, null, {
			params: {
				key: apiKey,
				q: text,
				target,
			},
		});

		const translatedText = response.data.data.translations[0].translatedText;
		res.status(200).json({ translatedText });
	} catch (error) {
		res.status(error.response?.status || 500).json(error.response?.data || {});
	}
}
