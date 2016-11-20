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
    Image,
    TextInput,
} from 'react-native';
var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')

export default class loginview extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.iconStyle} source={require('./img/icon.jpg')}/>
                <TextInput style={styles.inputStyle} placeholder={'please input username'}/>
                <TextInput style={styles.inputStyle} placeholder={'please input password'} password={true} />
                <View style={styles.settingsStyle}>
                    <Text>无法登陆</Text>
                    <Text>新用户</Text>
                </View>
                <View style={styles.otherStyle}>
                    <Text >其它方式登陆：</Text>
                    <Image style={styles.otherImageStyle} source={require('./img/icon2.jpg')}/>
                    <Image style={styles.otherImageStyle} source={require('./img/icon2.jpg')}/>
                    <Image style={styles.otherImageStyle} source={require('./img/icon2.jpg')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        alignItems:'center'
    },
    iconStyle: {
        width:100,
        height:100,
        borderRadius:50,
        marginTop:50,
        marginBottom:30,
    },
    inputStyle: {
        width:width * 0.9,
        height:38,
        backgroundColor:'white',
        marginBottom:1,
        borderWidth:1,
        borderRadius:2,
        marginTop:5,
        // 内容居中
        //textAlign:'center'
    },
    settingsStyle: {
        width:width * 0.9,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    otherStyle: {
        position:'absolute',
        flexDirection:'row',
        bottom:10,
        left:20,
    },
    otherImageStyle: {
        width:30,
        height:30,
        marginLeft:10,
    },
});

module.exports = loginview
