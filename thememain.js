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
    ListView,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')

export default class thememain extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(['1111111111', '1111111111', '1111111111', '1111111111', '1111111111', '1111111111'])
        };
    }

    renderRow(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle}
            >
                <View style={styles.itemViewStyle}>
                    <Text style={{backgroundColor:'red'}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.navigation}>
                        Wallpapers
                    </Text>
                    <Text style={styles.navigation}>
                        Themes
                    </Text>
                </View>

                <View style={{flexDirection:'row', backgroundColor:'#ffff00'}}>
                    <Text style={{color:'red'}}>
                        Recommend
                    </Text>
                    <Text style={{color:'greed'}}>
                        All Themes
                    </Text>
                </View>

                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}>
                </ListView>
            </View>
        );
    }

    renderRow2(rowData) {
        <Text>{rowData}</Text>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row',
    },
    navigation: {
        fontSize: 20,
        // textAlign: 'center',
        margin: 10,
        flex:1,
    },
    itemViewStyle: {
        alignItems:'center',
        width:width / 3,
        height:100,
    },
    instructions: {
        // textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = thememain