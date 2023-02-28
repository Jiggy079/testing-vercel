import React from 'react';
import Button from '@mui/material/Button';
import "./Header.css";

function Header ({callbackFunc}) {
	return (
		<div className="header-div">
			<Button variant="contained" onClick={callbackFunc}>Log out</Button>
		</div>
	);
}

export default Header;