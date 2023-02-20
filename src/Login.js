import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Login({handleChange}) {
	let user = null;
	return (
		<FormControl fullWidth>
			<InputLabel>User</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				value={user}
				label="User"
				onChange={handleChange}
			>
				<MenuItem value={"JV"}>JV</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	);
}

export default Login;