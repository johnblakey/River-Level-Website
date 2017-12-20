/**
 * Created by jb on 12/19/17.
 */
import React, { Component } from 'react';
import "./GetRivers.css";

class GetRivers extends Component {
    constructor() {
        super();
        this.state = { json: '' };
    }
    componentDidMount() {
        fetch('http://riverlevel.duckdns.org:2000/api/rivers')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ json: data });
            })
    }
    render() {
        return (
            <div className="GetRivers">
                {JSON.stringify(this.state.json)}
            </div>
        );
    }
}

export default GetRivers;
