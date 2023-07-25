import React from 'react';

const Button = ({ text, onClick, disabled = false }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className='text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800'
		>
			{text}
		</button>
	);
};

export default Button;
