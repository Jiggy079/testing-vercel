import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function getQuestionsContent(questions) {
    let questionsList = [];
    for (let key in questions) {
        questionsList.push(<FormControlLabel value={key.value} control={<Radio />} label={key.label} />);
    }
    return questionsList;
}

function RowRadioGroupQuestion([title, formName, questions]) {
    
    return (
        <FormControl>
          <FormLabel>{title}</FormLabel>
          <RadioGroup row name={formName}>
            {getQuestionsContent(questions)}
          </RadioGroup>
        </FormControl>
      );
}

export default RowRadioGroupQuestion;