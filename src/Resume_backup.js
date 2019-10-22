import React, { Component } from 'react';

// import './css/Resume.scss';

// User.js (( functional company
// import User from './components/User';
// const User = (props) => (

//     <span className="user">
//         {props.name}
//     </span>

// );

class Resume extends Component {

    constructor (props) {

        super(props);

        this.state = {
            name: ''
        };

        this.showAlert = this.showAlert.bind(this);

    }

    showAlert () {

        this.setState({
            name: 'betty'
        });

    }

    render () {

        return (

            <h1>
                Name:
                <User
                    name={this.state.name}
                    age={this.state.age}
                />
                <button onClick={this.showAlert}>click</button>
            </h1>

        );

    }

}

export default Resume;
