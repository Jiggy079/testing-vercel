import React from 'react';
import Paper from '@mui/material/Paper';
import RowRadioGroupQuestion from "./RadioGroupQuestion";

function Questions() {
	let testQuestion = {
		"yes": "Yes",
		"no": "No"
	}
	return (
		<div>
			<Paper>
			<RowRadioGroupQuestion title="Test question" formName="test" questions={testQuestion} />
			</Paper>
		</div>
	);
}

export default Questions;