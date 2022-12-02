import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RowRadioGroupQuestion from "./RadioGroupQuestion";

function Questions() {
	let testQuestion = {
		"yes": "Yes",
		"no": "No"
	}
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Paper>
					<RowRadioGroupQuestion title="Test question" formName="test" questions={testQuestion} />
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper>
					<p>test</p>
				</Paper>
			</Grid>
		</Grid>
	);
}

export default Questions;