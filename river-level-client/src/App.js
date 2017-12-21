import React, { Component } from 'react';
import './App.css';
import GetRivers from './GetRivers';
import RiverCard from './RiverCard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">River Levels</h1>
                </header>
                <p className="App-intro">
                    <GetRivers />
                </p>
                <RiverCard />
                <br/>
                <br/>
                <h5>Lose uncertainty. Not gear.</h5>
            </div>
        );
    }
}

export default App;



