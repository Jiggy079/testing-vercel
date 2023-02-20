import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

class Login extends React.Component {
	constructor({callback}) {
		super(callback);
		this.state = {
			user: null
		}
		this.callback = callback;
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({user: event.target.value});
		this.callback(this.state.user);
	}

	render() {
		return (
			<FormControl>
				<InputLabel>User</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					value={this.state.user}
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