import React from 'react';

const TextArea = ({
	label,
	placeholder,
	value,
	onChange,
	required = false,
}) => {
	return (
		<>
			<label
				htmlFor='answer'
				className='block mb-2 text-sm font-medium text-white'
			>
				{label}
			</label>
			<textarea
				name='answer'
				placeholder={placeholder}
				className='text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-500 border-gray-600 placeholder-gray-200 text-white focus:ring-blue-500 focus:border-blue-500'
				value={value}
				onChange={onChange}
				rows={3}
				required={required}
			/>
		</>
	);
};

export default TextArea;
