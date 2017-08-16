import React from 'react'

import './App.css'

import CSSTransition from 'react-transition-group/CSSTransition'

const Fade = ({children, ...props}) => (
    <CSSTransition
        {...props}
        timeout={500}
        classNames="fade"
    >
        {children}
    </CSSTransition>
)

export default class App extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {show: false}

        setInterval(() => {
            this.setState({show: !this.state.show})
        }, 5000)
    }

    render() {
        return (
            <Fade in={this.state.show}>
                <div>Hello world</div>
            </Fade>
        )
    }
}