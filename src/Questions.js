import React from 'react';
import RowRadioGroupQuestion from "./RadioGroupQuestion";

function Questions() {
	let testQuestion = {
		"yes": "Yes",
		"no": "No"
	}
	return (
		<div>
			<RowRadioGroupQuestion title="Test question" formName="test" questions={testQuestion} />
		</div>
	);
}

export default Questions;