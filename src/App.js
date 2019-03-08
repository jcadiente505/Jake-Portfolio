import React, { Component } from 'react';
import Navbar from './components/navbar';
import Landing from './sections/Landing';

class App extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <Landing />
        </div>
        )
    }
}

export default App;