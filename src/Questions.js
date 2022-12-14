import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RowRadioGroupQuestion from "./RadioGroupQuestion";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class Questions extends React.Component {
	constructor({figureID}) {
		super(figureID);
		this.state = {
			figureID: figureID
		};
		this.getQuestions = this.getQuestions.bind(this);
		this.postAnswers = this.postAnswers.bind(this);
		this.doSubmit = this.doSubmit.bind(this);
	}

	getQuestions() {
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
		return [question1, question2, question3, question4, question6];
	}

	postAnswers(answers) {
		let request = {
			"type": answers[0],
			"usage": answers[1],
			"legend": answers[2],
			"mappingtype": answers[3],
			"amount": answers[4],
			"difficulty": answers[5]
		}
		let xhr = new XMLHttpRequest();
		let url = "https://vercel-backend-rho.vercel.app/api/annotations/" + this.state.figureID;
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.responseText.includes("success")) {
				console.log("success");
			}
		};
		xhr.send(JSON.stringify(request));
	}

	doSubmit() {
		let answers = [];
		for (let i=0; i < 7; i++) {
			if (i === 5) {
				let q = document.getElementById("question5").value;
				answers.push(q);
			} else {
				let selector = `input[name="question${i}"]:checked`;
				let q = document.querySelector(selector);
				if (q) {
					answers.push(q.value);
				}
			}
		}
		this.postAnswers(answers);
	}

	render() {
		let questions = this.getQuestions();
		return (
			<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
				<Grid sx={{flexGrow: 1}} container spacing={2}>
					<Grid item xs={6}>
						<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
							<CardContent>
								<RowRadioGroupQuestion
									title="Q1. What type of colour is used?"
									formName="question1" question={questions[0]} index={1} />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
							<CardContent>
								<RowRadioGroupQuestion
									title="Q2. Is colour used for aesthetics or data visualisation?"
									formName="question2" question={questions[1]} index={2} />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
							<CardContent>
								<RowRadioGroupQuestion
									title="Q3. Is a colour mapping legend shown?"
									formName="question3" question={questions[2]} index={3} />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
							<CardContent>
								<RowRadioGroupQuestion
									title="Q4. Is the colour mapping continuous or categorical?"
									formName="question4" question={questions[3]} index={4} />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
							<CardContent>
								<p className="questionLabel">Q5. How many colour values are used?</p>
								<TextField id="question5" label="Enter a number" type="number" name="question5" InputLabelProps={{shrink: true,}} />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card sx={{backgroundColor: '#1A2027', color:'#61dafb', minWidth: 250, minHeight: 175}}>
							<CardContent>
								<RowRadioGroupQuestion
									title="Q6. How difficult was this image to annotate? (1 being easy and 5 being hard)"
									formName="question6" question={questions[4]} index={6} />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Button variant="contained" onClick={this.doSubmit}>Submit</Button>
			</Stack>
		);
	}
}

export default Questions;