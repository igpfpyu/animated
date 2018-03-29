import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
//import ItemAnimated from './app/components/animated/';
import {  createStore} from 'redux';

export default class App extends Component<{}> {
      constructor(props){
        super(props);
      }
    componentWillMount(){

    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View><Text>1</Text></View>
                <View><Text>1</Text></View>
                <View><Text>1</Text></View>
            </View>
        );
    }

}
