import React from 'react'

import Transition from 'react-transition-group/Transition'

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1, color: 'red'},
}

export default class App extends React.Component {

    state = {
        in: false
    }

    toggleEnterState = () => {
        this.setState({
            in: true
        })
    }

    render() {

        const item = (state) => {
            console.log(state)
            return (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    I'm A fade Transition!
                </div>
            )
        }

        return (
            <div>
                <Transition in={this.state.in} timeout={duration}>
                    {item}
                </Transition>
                <button onClick={this.toggleEnterState}>Click to enter</button>
            </div>
        )
    }
}