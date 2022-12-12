import React from 'react';
import './App.css';
import Figure from "./Figure";
import Questions from "./Questions";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '@mui/material/Divider';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFigure : null,
            currentFigureIndex: 0,
            figuresLoaded: false
        };
        this.changeFigure = this.changeFigure.bind(this);
        this.getCurrentFigure = this.getCurrentFigure.bind(this);
    }

    getCurrentFigure() {
        fetch("https://vercel-backend-rho.vercel.app/api/figures/" + (this.state.currentFigureIndex + 1))
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    currentFigure: res,
                });
            });
        console.log(this.state.currentFigure);
    }

    componentDidMount() {
        fetch("https://vercel-backend-rho.vercel.app/api/figures/" + (this.state.currentFigureIndex + 1))
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    currentFigure: res,
                    figuresLoaded: true
                });
            });
        console.log(this.state.currentFigure);
    }

    changeFigure(increment) {
        if (increment === true) {
            if (this.state.currentFigureIndex === 29688) {
                this.setState({currentFigureIndex: 0});
            } else {
                this.setState({currentFigureIndex: this.state.currentFigureIndex + 1});
            }
        } else {
            if (this.state.currentFigureIndex === 0) {
                this.setState({currentFigureIndex: 29688});
            } else {
                this.setState({currentFigureIndex: this.state.currentFigureIndex - 1});
            }
        }
        this.getCurrentFigure();
    }

    getFigureInfo() {
        if (!this.state.figuresLoaded) {
            return {name: "",
                doi: "",
                year: ""};
        } else {
            return {name: this.state.currentFigure["name"],
                doi: this.state.currentFigure["doi"],
                year: this.state.currentFigure["year"]};
        }
    }

    getImgURL() {
        if (!this.state.figuresLoaded) {
            return "https://i.imgur.com/llF5iyg.gif";
        } else {
            return this.state.currentFigure["url"];
        }
    }

    render() {
        document.title = "Figure Viewer";
        let figureInfo = this.getFigureInfo();

        return (
            <div className="App">
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                    <Button variant="contained" onClick={() => this.changeFigure(false)}>{<NavigateBeforeIcon />}</Button>
                    <Figure imgUrl={this.getImgURL()}
                            currentFigureIndex={this.state.currentFigureIndex}
                            currentFigureMetadata={figureInfo}/>
                    <Button variant="contained" onClick={() => this.changeFigure(true)}>{<NavigateNextIcon />}</Button>
                    <Divider orientation="vertical" flexItem />
                    <Questions />
                </Stack>
            </div>
        );
    }
}

export default App;