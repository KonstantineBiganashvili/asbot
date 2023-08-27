import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import Select from './Select';
import languages from '@/constants/languages';
import subjects from '@/constants/subjects';

const HomePage = () => {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [questionError, setQuestionError] = useState(false);
	const [answerError, setAnswerError] = useState(false);
	// const [subject, setSubject] = useState(subjects[0].value);
	const [language, setLanguage] = useState(languages[26].code);
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState([]);

	const askGPT = async () => {
		if (!question.length) {
			setQuestionError(true);
		}

		if (!answer.length) {
			setAnswerError(true);
		}

		if (!question.length || !answer.length) return;

		try {
			setLoading(true);

			const result = await axios.post('/api/openai', {
				data: {
					question,
					answer,
					// subject,
					language,
				},
			});
			setResponse(result.data.text.split('\n'));
		} catch (error) {
			console.error('Error asking GPT:', error);
			setResponse('Error retrieving response.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='w-full h-full flex-1 flex flex-col items-center justify-between gap-12'>
			<div className='w-full bg-gray-500 border-border-gray-300 text-white rounded-lg p-10'>
				{response.length
					? !loading
						? response.map((text, index) => <p key={index}>{text}</p>)
						: null
					: !loading
					? 'Feedback will appear here!'
					: null}
				{loading ? 'Please wait...' : null}
			</div>
			<div className='w-full flex flex-col gap-4'>
				<div className='w-full flex flex-col items-start justify-between gap-2'>
					<Input
						label='Question:'
						placeholder='Enter your question here'
						value={question}
						onChange={({ target }) => {
							setQuestionError(false);
							setQuestion(target.value);
						}}
						required={true}
						error={questionError}
					/>
				</div>
				<div className='flex flex-col items-start justify-between gap-2'>
					<TextArea
						label='Answer:'
						placeholder='Enter your answer here'
						value={answer}
						onChange={({ target }) => {
							setAnswerError(false);
							setAnswer(target.value);
						}}
						required={true}
						error={answerError}
					/>
				</div>
				<div className='flex items-center justify-end gap-4'>
					<Select
						options={languages}
						selected={language}
						onChange={({ target }) => setLanguage(target.value)}
					/>
					{/* <Select
						options={subjects}
						selected={subject}
						onChange={({ target }) => setSubject(target.value)}
					/> */}
					<Button text='Submit' onClick={askGPT} disabled={loading} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
