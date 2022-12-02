import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import RowRadioGroupQuestion from "./RadioGroupQuestion";

function Questions() {
	let testQuestion = {
		"yes": "Yes",
		"no": "No"
	}
	return (
		<Grid sx={{flexGrow: 1}} container spacing={2}>
			<Grid item xs={6}>
				<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250}}>
					<RowRadioGroupQuestion title="Test question" formName="test" questions={testQuestion} />
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250}}>
					<RowRadioGroupQuestion title="Test question" formName="test" questions={testQuestion} />
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Paper sx={{backgroundColor: '#1A2027', color:'#61dafb'}}>
					<p>test</p>
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper sx={{backgroundColor: '#1A2027', color:'#61dafb'}}>
					<p>test</p>
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper sx={{backgroundColor: '#1A2027', color:'#61dafb'}}>
					<p>test</p>
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper sx={{backgroundColor: '#1A2027', color:'#61dafb'}}>
					<p>test</p>
				</Paper>
			</Grid>
		</Grid>
	);
}

export default Questions;