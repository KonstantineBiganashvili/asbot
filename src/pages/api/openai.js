import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
	let content;
	let text;

	const {
		data: { question, answer, language },
	} = req.body;

	if (language === 'ka') {
		const translation = await axios.post(
			'http://localhost:3000/api/translate',
			{
				text: `${question} \n ${answer}`,
				target: 'en',
			},
		);

		content = translation.data.translatedText;
	} else {
		content = `${question} \n ${answer}`;
	}

	const completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'system',
				content:
					'you are a teacher assistant, you will receive question and answer, give detailed feedback on the answer and grade the answer on a scale of 1-10. If the answer is factually correct give 10 score, if it is not factually correct and not near the correct answer give 0 score, if it is partially correct give score from 1 to 10 depending on how close it is to the real answer. Write text in a formal way and return answer with this format: Feedback, Grade',
			},
			{ role: 'user', content },
		],
	});

	const feedback = completion.data.choices[0].message.content;

	if (language === 'ka') {
		const translation = await axios.post(
			'http://localhost:3000/api/translate',
			{
				text: `${feedback}`,
				target: 'ka',
			},
		);

		text = translation.data.translatedText;
	} else {
		text = feedback;
		// .replace(/([.!?;])/g, '<br />')
	}

	res.status(200).json({ text });
}
