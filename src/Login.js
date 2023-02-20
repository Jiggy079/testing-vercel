import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class Login extends React.Component {
	constructor({callback}) {
		super(callback);
		this.user = null;
		this.callback = callback;
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		// this.callback(this.state.user);
		console.log(this.user);
	}

	render() {
		return (
			<FormControl>
				<InputLabel>User</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					value={this.user}
					label="User"
					onChange={this.handleChange}
				>
					<MenuItem value={"JV"}>JV</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		);
	}
}

export default Login;