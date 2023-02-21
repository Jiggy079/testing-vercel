import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

class RowRadioGroupQuestion extends React.Component {
    title = null;
    formName = null;
    question = null;
    index = null;
    defaultValue = null;

    constructor({title, formName, question, index, defaultValue}) {
        super({title, formName, question, index, defaultValue});
        this.title = title;
        this.formName = formName;
        this.question = question;
        this.index = index;
        this.defaultValue = defaultValue;
        this.getQuestionsContent = this.getQuestionsContent.bind(this);
    }

    getQuestionsContent(question) {
        let questionsList = [];
        for (let [value, label] of Object.entries(question)) {
            questionsList.push(<FormControlLabel value={value} control={<Radio />} label={label} />);
        }
        return questionsList;
    }

    render () {
        if (this.defaultValue == null) {
            return (
                <FormControl>
                    <FormLabel><span className="questionLabel"> {this.title}</span></FormLabel>
                    <RadioGroup row name={this.formName} id={"question"+this.index}>
                        {this.getQuestionsContent(this.question)}
                    </RadioGroup>
                </FormControl>
            );
        } else {
            return (
                <FormControl>
                    <FormLabel><span className="questionLabel"> {this.title}</span></FormLabel>
                    <RadioGroup row name={this.formName} id={"question"+this.index} defaultValue={this.defaultValue.toString()}>
                        {this.getQuestionsContent(this.question)}
                    </RadioGroup>
                </FormControl>
            );
        }
    }
}

export default RowRadioGroupQuestion;