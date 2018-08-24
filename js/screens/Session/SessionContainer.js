import React, { Component } from 'react';
import { Text } from 'react-native'
import Session from './Session'

class SessionContainer extends Component {
    render() {
        console.log(this.props.navigation.getParam('id'))
        return (
            <Session />
        );
    }
}

export default SessionContainer;