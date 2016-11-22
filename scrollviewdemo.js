/**
 * Created by hongwei on 2016/11/21.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')

 var imgpath = require('./img/img1.jpg')

// export default class scrollviewdemo extends Component {
var scrollviewdemo = React.createClass({

    getInitialState(){
        return {
            currentPage: 0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScrollAnimationEnd={(e) => this.onPageAnimationEnd(e)}>
                    {this.renderAllImgs()}
                </ScrollView>

                <View style={{backgroundColor:'red', flexDirection:'row', position:'absolute',
                    bottom: 0, flex: 1, alignItems:'center'}}>
                    {this.renderAllIndicator()}
                </View>
            </View>
        );
    },

    renderAllImgs() {
        var allImgs = [];
        for(var i = 0; i < 6; i++) {
            // var j = i + 1
            // var imgpath = require('./img/img1.jpg')
            allImgs.push(
                <Image key={i} source={imgpath}/>
            )
        }
        return allImgs;
    },

    renderAllIndicator() {
        var allIndicator = [];
        var style;
        for (var i = 0; i < 6; i++) {
            //style = (i == this.state.currentPage) ? (color:'#ffffff') : (color: 'red');
            if (i == this.state.currentPage) {
                allIndicator.push(
                    <Text key={i} style={{fontSize:32, backgroundColor:'#ffff00', color: '#ffffff'}} >&bull;</Text>
                );
            } else {
                allIndicator.push(
                    <Text key={i} style={{fontSize:32, backgroundColor:'#ffff00', color: '#ff00ff'}} >&bull;</Text>
                );
            }
        }
        return allIndicator
    },

    onPageAnimationEnd(e) {
        var offsetX = e.nativeEvent.contentOffset.x
        var current = Math.floor(offsetX / width)

        this.setState({
            currentPage:current
        })
    }
});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imgStyle: {
        width:width,
        width:100,
    },
    indicatorStyle: {
        fontSize:32,
        backgroundColor:'#ffff00'
    }
});

module.exports = scrollviewdemo