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
            currentFigureIndex: 1,
            figuresLoaded: false
        };
        this.changeFigure = this.changeFigure.bind(this);
        this.updateFigure = this.updateFigure.bind(this);
    }

    async updateFigure(newIndex) {
        console.log("called updateFigure")
        console.log("previous index:" + this.state.currentFigureIndex);
        const res = await fetch("https://vercel-backend-rho.vercel.app/api/figures/" + this.state.currentFigureIndex);
        const data = await res.json();
        await this.setState({currentFigure: data, currentFigureIndex: newIndex});
        console.log("new index:" + this.state.currentFigureIndex);
    }

    componentDidMount() {
        fetch("https://vercel-backend-rho.vercel.app/api/figures/" + this.state.currentFigureIndex)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    currentFigure: res,
                    figuresLoaded: true
                });
            });
    }

    changeFigure(increment) {
        console.log("called changeFigure")
        if (increment === true) {
            if (this.state.currentFigureIndex === 29688) {
                this.updateFigure(1)
            } else {
                this.updateFigure(this.state.currentFigureIndex + 1);
            }
        } else {
            if (this.state.currentFigureIndex === 1) {
                this.updateFigure(29688);
            } else {
                this.updateFigure(this.state.currentFigureIndex - 1);
            }
        }
    }

    getFigureInfo() {
        if (!this.state.figuresLoaded) {
            return {name: "",
                doi: "",
                year: ""};
        } else {
            return {name: this.state.currentFigure[0]["name"],
                doi: this.state.currentFigure[0]["doi"],
                year: this.state.currentFigure[0]["year"]};
        }
    }

    getImgURL() {
        console.log("called getImgUrl")
        if (!this.state.figuresLoaded) {
            return "https://i.imgur.com/llF5iyg.gif";
        } else {
            console.log(this.state.currentFigure[0]["url"]);
            return this.state.currentFigure[0]["url"];
        }
    }

    render() {
        document.title = "Figure Viewer";
        let figureInfo = this.getFigureInfo();

        return (
            <div className="App">
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                    <Button variant="contained" onClick={() => this.changeFigure(false)}>{<NavigateBeforeIcon />}</Button>
                    <Figure imgUrl={this.state.figuresLoaded ? this.state.currentFigure[0]["url"] : "https://i.imgur.com/llF5iyg.gif"}
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