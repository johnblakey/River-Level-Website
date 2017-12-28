import React, { Component } from 'react';
import './App.css';
import RiverCard from './RiverCard';

class App extends Component {
    constructor() {
        super();
        // Initial json state is set to empty for interim rendering by react
        const empty = [{ empty: 'empty'}];
        this.state = { json: empty };
    }

    // fetch part
    componentDidMount() {
        const api = 'http://riverlevel.duckdns.org:2000/api/rivers';
        fetch(api)
            .then(response => response.json())
            .then(data => this.setState({ json: data }));
    }

    render() {
        // GetRivers is for debugging
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">River Levels</h1>
                </header>
                { // map is a javascrip function to iterate through an array
                    // this is rendered with the empty state and then the
                    // filled state by fetch
                    this.state.json.map((propJson)=> {
                    return <RiverCard prop={propJson}/>
                }) }
                <br/>
                <h5>Lose uncertainty. Not gear.</h5>
                <br/>
            </div>
        );
    }
}

export default App;
