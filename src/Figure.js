import React from 'react';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';

class Figure extends React.Component{
	constructor({imgUrl, currentFigureIndex}) {
		super(imgUrl, currentFigureIndex);
		 this.state = {
			 open: false,
			 imgUrl: imgUrl,
			 currentFigureIndex: currentFigureIndex
		 };
		 this.handleToggle = this.handleToggle.bind(this);
		 this.handleClose = this.handleClose.bind(this);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.setState({imgUrl: this.props.imgUrl,
							currentFigureIndex: this.props.currentFigureIndex})
	}

	handleClose() {
		this.setState(({open: false}));
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	render() {
		return (
			<div className="Figure">
				<Button onClick={this.handleToggle}>
				<img src={this.state.imgUrl} alt={"Figure"}/>
				</Button>
				<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={this.state.open} onClick={this.handleClose}>
					<h1>hello</h1>
				</Backdrop>
				<p id={"figure-label"}>Figure {this.state.currentFigureIndex + 1}</p>
			</div>
		);
	}
}

export default Figure;