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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFigure : null,
            currentFigureIndex: 1,
            figuresLoaded: false,
            user: null
        };
        this.changeFigure = this.changeFigure.bind(this);
        this.updateFigure = this.updateFigure.bind(this);
        this.login = this.login.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    async updateFigure(newIndex) {
        fetch("https://vercel-backend-rho.vercel.app/api/figures/" + newIndex)
            .then(res => res.json())
            .then(res => this.setState({
                currentFigure: res,
                currentFigureIndex: newIndex
            }));
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
        if (!this.state.figuresLoaded) {
            return "https://i.imgur.com/llF5iyg.gif";
        } else {
            return this.state.currentFigure[0]["url"];
        }
    }

    login(user) {
        this.setState({user: user});
    }

    handleUserChange(event) {
        this.setState({user: event.target.value});
    }

    render() {
        document.title = "Figure Viewer";
        let figureInfo = this.getFigureInfo();
        let imgUrl = this.getImgURL();

        if (this.state.user == null) {
            return (
                <div className="App">
                    <FormControl sx={{m:1, minWidth: 100}}>
                        <InputLabel>User</InputLabel>
                        <Select
                            labelStyle = {{color: "#61dafb"}}
                            value={this.state.user}
                            label="User"
                            onChange={this.handleUserChange}
                        >
                            <MenuItem value={"HL"}>HL</MenuItem>
                            <MenuItem value={"JV"}>JV</MenuItem>
                            <MenuItem value={"LW"}>LW</MenuItem>
                            <MenuItem value={"NK"}>NK</MenuItem>
                            <MenuItem value={"RL"}>RL</MenuItem>
                            <MenuItem value={"WQ"}>WQ</MenuItem>
                            <MenuItem value={"YH"}>YH</MenuItem>
                            <MenuItem value={"ZZ"}>ZZ</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                        <Button variant="contained"
                                onClick={() => this.changeFigure(false)}>
                                {<NavigateBeforeIcon />}
                        </Button>
                        <Figure imgUrl={imgUrl}
                                currentFigureIndex={this.state.currentFigureIndex}
                                currentFigureMetadata={figureInfo}/>
                        <Button variant="contained"
                                onClick={() => this.changeFigure(true)}>
                                {<NavigateNextIcon />}
                        </Button>
                        <Divider orientation="vertical" flexItem />
                        <Questions figureID={this.state.currentFigureIndex} />
                    </Stack>
                </div>
            );
        }
    }
}

export default App;