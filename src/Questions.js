import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RowRadioGroupQuestion from "./RadioGroupQuestion";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

class Questions extends React.Component {
	constructor({figureID}) {
		super(figureID);
		this.state = {
			figureID: figureID,
			hasSubmitted: false,
			submitSuccess: false,
			annotations: null,
			annotationsLoaded: false,
		};
		this.getQuestions = this.getQuestions.bind(this);
		this.postAnswers = this.postAnswers.bind(this);
		this.doSubmit = this.doSubmit.bind(this);
		this.fetchAnnotations = this.fetchAnnotations.bind(this);
		this.firstAnnotationsLoaded = false;
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			this.setState({figureID: this.props.figureID, annotationsLoaded: false}, () => this.fetchAnnotations());
		}
	}

	fetchAnnotations() {
		let url = "https://vercel-backend-rho.vercel.app/api/annotations/" + this.state.figureID;
		fetch(url)
			.then(res => res.json())
			.then((res) => {
				this.setState({
					annotations: res,
					annotationsLoaded: true
				})
			});
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
				this.setState({
					hasSubmitted: true,
					submitSuccess: true
				});
			} else if (xhr.responseText.includes("message")) {
				this.setState({
					hasSubmitted: true,
					submitSuccess: false
				});
			}
		}.bind(this);
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
		if (answers.includes("")) {
			this.setState({hasSubmitted: true,
								submitSuccess: false})
		} else {
			this.postAnswers(answers);
		}
	}

	render() {
		if (this.state.figureID === 1) {
			if (this.firstAnnotationsLoaded === false) {
				this.firstAnnotationsLoaded = true;
				this.fetchAnnotations();
			}
		}

		if (this.state.annotationsLoaded === false) {
			return (
				<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
					<Grid sx={{flexGrow: 1}} container spacing={2}>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}} />
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}} />
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}} />
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}} />
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}} />
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}} />
						</Grid>
					</Grid>
					<Button variant="contained"
							color={this.state.hasSubmitted ? this.state.submitSuccess ? "success" : "error" : "primary"}>
						<CircularProgress />
					</Button>
				</Stack>
			);
		} else {
			let questions = this.getQuestions();
			return (
				<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
					<Grid sx={{flexGrow: 1}} container spacing={2}>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}}>
								<CardContent>
									<RowRadioGroupQuestion
										title="Q1. What type of colour is used?"
										formName="question1" question={questions[0]} index={1}
										defaultValue={this.state.annotations == null ? null : this.state.annotations[0]["type"]} />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}}>
								<CardContent>
									<RowRadioGroupQuestion
										title="Q2. Is colour used for aesthetics or data visualisation?"
										formName="question2" question={questions[1]} index={2}
										defaultValue={this.state.annotations == null ? null : this.state.annotations[0]["usage"]} />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}}>
								<CardContent>
									<RowRadioGroupQuestion
										title="Q3. Is a colour mapping legend shown?"
										formName="question3" question={questions[2]} index={3}
										defaultValue={this.state.annotations == null ? null : this.state.annotations[0]["legend"]} />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}}>
								<CardContent>
									<RowRadioGroupQuestion
										title="Q4. Is the colour mapping continuous or categorical?"
										formName="question4" question={questions[3]} index={4}
										defaultValue={this.state.annotations == null ? null : this.state.annotations[0]["mappingtype"]} />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}}>
								<CardContent>
									<p className="questionLabel">Q5. How many colour values are used?</p>
									<TextField id="question5" label="Enter a number" type="number" name="question5"
											   defaultValue={this.state.annotations == null ? null : this.state.annotations[0]["amount"]}
											   InputLabelProps={{shrink: true,}} />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card sx={{backgroundColor: '#454b50', color:'#61dafb', minWidth: 250, minHeight: 175}}>
								<CardContent>
									<RowRadioGroupQuestion
										title="Q6. How difficult was this image to annotate? (1 being easy and 5 being hard)"
										formName="question6" question={questions[4]} index={6}
										defaultValue={this.state.annotations == null ? null : this.state.annotations[0]["difficulty"]} />
								</CardContent>
							</Card>
						</Grid>
					</Grid>
					<Button variant="contained"
							color={this.state.hasSubmitted ? this.state.submitSuccess ? "success" : "error" : "primary"}
							onClick={this.doSubmit}>
						{this.state.hasSubmitted ? this.state.submitSuccess ? "Success" : "Error" : "Submit"}
					</Button>
				</Stack>
			);
		}
	}
}

export default Questions;