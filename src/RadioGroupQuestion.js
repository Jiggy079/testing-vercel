import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function getQuestionsContent(question) {
    let questionsList = [];
    for (let [value, label] of Object.entries(question)) {
        questionsList.push(<FormControlLabel value={value} control={<Radio />} label={label} />);
    }
    return questionsList;
}

function RowRadioGroupQuestion({title, formName, question, index, defaultValue}) {
    if (defaultValue == null) {
        return (
            <FormControl>
                <FormLabel><span className="questionLabel"> {title}</span></FormLabel>
                <RadioGroup row name={formName} id={"question"+index}>
                    {getQuestionsContent(question)}
                </RadioGroup>
            </FormControl>
        );
    } else {
        return (
            <FormControl>
                <FormLabel><span className="questionLabel"> {title}</span></FormLabel>
                <RadioGroup row name={formName} id={"question"+index} defaultValue={defaultValue}>
                    {getQuestionsContent(question)}
                </RadioGroup>
            </FormControl>
        );
    }
}

export default RowRadioGroupQuestion;