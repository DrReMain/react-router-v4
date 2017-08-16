import React, {Component} from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
                    <OldSchoolMenuLink to="/about" label="About"/>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/" component={Test}/>
                    <Route exact path="/about" component={About}/>

                </div>
            </Router>
        );
    }
}

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={(par) => {
        console.log(par)
        return (
            <div className={par.match ? 'active' : ''}>
                {par.match ? '>' : ''}<Link to={to}>{label}</Link>
            </div>
        )
    }}/>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const Test = () => (
    <div>
        <h2>Test</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

export default App;
