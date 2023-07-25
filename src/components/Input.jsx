import React from 'react';

const Input = ({
	label,
	placeholder,
	value,
	onChange,
	required = false,
	error = false,
}) => {
	return (
		<>
			<label
				htmlFor='question'
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
			>
				{label}
			</label>
			<input
				name='question'
				placeholder={placeholder}
				className={`text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-500 border-gray-600 placeholder-gray-200 text-white focus:ring-blue-500 focus:border-blue-500 ${
					error ? 'bordered border-2 border-red-500' : ''
				}`}
				value={value}
				onChange={onChange}
				required={required}
			/>
		</>
	);
};

export default Input;
