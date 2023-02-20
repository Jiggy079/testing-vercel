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
        console.log("rendered radio with defaultValue=null");
        return (
            <FormControl>
                <FormLabel><span className="questionLabel"> {title}</span></FormLabel>
                <RadioGroup row name={formName} id={"question"+index}>
                    {getQuestionsContent(question)}
                </RadioGroup>
            </FormControl>
        );
    } else {
        console.log("rendered radio with defaultValue="+defaultValue);
        return (
            <FormControl>
                <FormLabel><span className="questionLabel"> {title}</span></FormLabel>
                <RadioGroup row name={formName} id={"question"+index} value={defaultValue}>
                    {/*{getQuestionsContent(question)}*/}
                    {<FormControlLabel value={"greyscale"} control={<Radio />} label={"Greyscale"} />}
                </RadioGroup>
            </FormControl>
        );
    }
}

export default RowRadioGroupQuestion;