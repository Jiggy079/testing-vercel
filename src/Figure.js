import React from 'react';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Tooltip from '@mui/material/Tooltip';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import IconButton from '@mui/material/IconButton';

class Figure extends React.Component{
	constructor({imgUrl, currentFigureIndex, currentFigureMetadata}) {
		super(imgUrl, currentFigureIndex);
		 this.state = {
			 open: false,
			 imgUrl: imgUrl,
			 currentFigureIndex: currentFigureIndex,
			 currentFigureMetadata: currentFigureMetadata
		 };
		 this.handleToggle = this.handleToggle.bind(this);
		 this.handleClose = this.handleClose.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			this.setState({imgUrl: this.props.imgUrl,
				currentFigureIndex: this.props.currentFigureIndex,
				currentFigureMetadata: this.props.currentFigureMetadata})
		}
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
					<img src={this.state.imgUrl} alt={"Enlarged figure"} className="enlargedFigure" />
				</Backdrop>
				<p id={"figure-label"}>Figure {this.state.currentFigureIndex + 1}</p>
				<Tooltip title={this.state.currentFigureMetadata.name} placement="top" arrow>
					<IconButton>
						<QuestionMarkIcon />
					</IconButton>
				</Tooltip>
			</div>
		);
	}
}

export default Figure;