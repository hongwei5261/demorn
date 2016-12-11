/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';


export default class wallpapers extends Component {
    render() {
        return (
            <Navigator style={{flex: 1}}
                initialRoute={{id: 'test'}}
                renderScene={this._renderNav}/>
        );
    }

    _renderNav(route, nav) {
        switch (route.id) {
            case 'test':
                return <Test navigator={nav} title="Test"/>;
            case 'testdetail':
                return <TestDetail navigator={nav} title="testdetail"/>
        }
    }
}

var TestDetail = React.createClass({
    toMain(){
        this.props.navigator.pop();
    },

    render() {
        return (
            <View style={styles.detailContainView}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.toMain}
                    underlayColor="green">
                    <Text style={styles.blackText}>{'主页<='}</Text>
                </TouchableHighlight>
            </View>
        )
    }
})

var Test = React.createClass({
    toDetail(){
        this.props.navigator.push({id:"testdetail"});
    },

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.toDetail}
                    underlayColor="#B5B5B5">
                    <Text style={styles.blackText}>=>详情页</Text>
                </TouchableHighlight>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    navigation: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        padding: 15,
    },
    containView:{
        flex: 1,
        justifyContent: 'center',
    },
    detailContainView:{
        flex:1,
        justifyContent: 'center',
        backgroundColor:'green',
    },
    blackText:{
        fontSize:20,
        textAlign:'center',
    },
});

module.exports = wallpapers
