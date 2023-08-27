import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const BASE_URL =
	process.env.NODE_ENV === 'production'
		? 'https://asbot-iota.vercel.app'
		: 'http://localhost:3000';

export default async function handler(req, res) {
	let content;
	let text;

	const {
		data: { question, answer, language },
	} = req.body;

	if (language !== 'en') {
		const translatedQuestion = await axios.post(`${BASE_URL}/api/translate`, {
			text: question,
			target: 'en',
		});

		const translatedAnswer = await axios.post(`${BASE_URL}/api/translate`, {
			text: answer,
			target: 'en',
		});

		content = `Question: ${translatedQuestion.data.translatedText} \n Answer: ${translatedAnswer.data.translatedText}`;
	} else {
		content = `Question: ${question} \n Answer: ${answer}`;
	}

	const completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'system',
				content:
					'Assume the role of a teaching assistant. When provided with a question and its corresponding answer, offer comprehensive feedback on the answer, focusing on its accuracy, completeness, and clarity. Grade the answer on a scale of 1 to 10, using the guidelines: award a score of 10 for entirely correct responses, give a score of 0 for completely incorrect answers, and for partially correct answers, allocate a score between 1 and 9 based on the accuracy level. Your response should be formal and structured as: "Feedback: [Detailed Feedback]. Score: [Assigned Score]."',
			},
			{ role: 'user', content },
		],
	});

	const feedback = completion.data.choices[0].message.content;

	if (language !== 'en') {
		const translation = await axios.post(`${BASE_URL}/api/translate`, {
			text: `${feedback}`,
			target: language,
		});

		text = translation.data.translatedText;
	} else {
		text = feedback;
	}

	res.status(200).json({ text });
}
