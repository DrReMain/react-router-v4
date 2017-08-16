import React, {Component} from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Form</Link></li>
                        <li><Link to="/one">One</Link></li>
                        <li><Link to="/two">Two</Link></li>
                    </ul>

                    <Route path="/" exact component={Form}/>
                    <Route path="/one" render={() => <h3>One</h3>}/>
                    <Route path="/two" render={() => <h3>Two</h3>}/>
                </div>
            </Router>
        );
    }
}

class Form extends Component {
    state = {
        isBlocking: false
    }

    render() {
        const {isBlocking} = this.state
        return (
            <form
                onSubmit={e => {
                    e.preventDefault()
                    e.target.reset()
                    this.setState({
                        isBlocking: false
                    })
                }}>
                <Prompt
                    when={isBlocking}
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}/>

                <p>
                    Blocking ? {isBlocking ? 'yes, click a link or the back button' : 'Nope'}
                </p>

                <p>
                    <input
                        size='100'
                        placeholder="type something to block transitions"
                        onChange={e => {
                            this.setState({
                                isBlocking: e.target.value.length > 0
                            })
                        }}
                    />
                </p>

                <p>
                    <button>Submit to stop blocking</button>
                </p>

            </form>
        )
    }
}

export default App;
