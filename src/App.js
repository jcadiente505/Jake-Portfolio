import React, { Component } from 'react';
import Navbar from './components/navbar';
import Landing from './sections/Landing';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
        <div>
            <Navbar/>
            <Landing />
            <About />
            <Portfolio/>
            <Footer/>
        </div>
        )
    }
}

export default App;