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
    TouchableOpacity,
    Image,
    ToastAndroid,
} from 'react-native';

var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')
var itemWidth = width / 2;

var imgs = [require('./img/img1.jpg'),
    require('./img/img2.jpg'),
    require('./img/img3.jpg'),
    require('./img/img4.jpg'),
    require('./img/img5.jpg'),
    require('./img/img6.jpg'), ]

export default class thememain extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(require('./themes.json'))
        };
    }

    _renderRow(rowData, sectionId, rowId, hItemId){
        return(
            <TouchableOpacity  style={styles.itemViewStyle} activeOpacity={0.5} onPress={() => {ToastAndroid.show('row:' + rowId, ToastAndroid.SHORT)}}>
                <View>
                    <Image source={imgs[rowId]} style={{width:30, height:30}}/>
                    <Text style={{backgroundColor:'red'}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={[styles.navigation, {backgroundColor:'red'}]}>
                        Wallpapers
                    </Text>
                    <Text style={[styles.navigation, {backgroundColor:'#ff00ff'}]}>
                        Themes
                    </Text>
                </View>

                <View style={{flexDirection:'row', backgroundColor:'#ffff00', marginTop:10, alignItems:'center'}}>
                    <Text style={{color:'red'}}>
                        Recommend
                    </Text>
                    <Text style={{ position:'absolute', right:0}}>
                        All Themes
                    </Text>
                </View>
                <Image source={{url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2574774309,856884605&fm=58&s=7A61F148D883984908165216030050DF'}}/>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    contentContainerStyle={{flexDirection:'row', flexWrap:'wrap', flex:1}}
                    />
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
        flexDirection:'row',
    },
    navigation: {
        flex:1,
        fontSize:20,
        alignItems:'center',
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10
    },
    itemViewStyle: {
        alignItems:'center',
        width:itemWidth,
        height:80,
        backgroundColor:'yellow'
    },
    instructions: {
        // textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = thememain