import React from 'react';

const Select = ({ selected, options, onChange }) => {
	return (
		<select
			value={selected}
			onChange={onChange}
			className='bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
		>
			{options.map(({ name, value }) => (
				<option className='p-2' key={value} value={value}>
					{name}
				</option>
			))}
		</select>
	);
};

export default Select;
