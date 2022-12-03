import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import RowRadioGroupQuestion from "./RadioGroupQuestion";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Questions() {
	let question1 = {
		"blackwhite": "Black and white",
		"greyscale": "Greyscale",
		"colour": "Colour"
	}
	let question2 = {
		"aesthetics": "Aesthetics",
		"datavis": "Data visualisation",
		"notsure": "Not sure"
	}
	let question3 = {
		"yes": "Yes",
		"no": "No",
		"notsure": "Not sure"
	}
	let question4 = {
		"continuous": "Continuous",
		"categorical": "Categorical",
		"notsure": "Not sure"
	}
	let question6 = {
		"1": "1",
		"2": "2",
		"3": "3",
		"4": "4",
		"5": "5"
	}


	return (
		<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
			<Grid sx={{flexGrow: 1}} container spacing={2}>
				<Grid item xs={6}>
					<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
						<CardContent>
							<RowRadioGroupQuestion title="Q1. What type of colour is used?" formName="question1" question={question1} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
						<CardContent>
							<RowRadioGroupQuestion title="Q2. Is colour used for aesthetics or data visualisation?" formName="question2" question={question2} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
						<CardContent>
							<RowRadioGroupQuestion title="Q3. Is a colour mapping legend shown?" formName="question3" question={question3} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
						<CardContent>
							<RowRadioGroupQuestion title="Q4. Is the colour mapping continuous or categorical?" formName="question4" question={question4} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
						<CardContent>
							<p className="questionLabel">Q5. How many colour values are used?</p>
							<TextField id="outlined-number" label="Enter a number" type="number" name="question5" InputLabelProps={{shrink: true,}} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
						<CardContent>
							<RowRadioGroupQuestion title="Q6. How difficult was this image to annotate? (1 being easy and 5 being hard)" formName="question6" question={question6} />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Button variant="contained">Submit</Button>
		</Stack>
	);
}

export default Questions;