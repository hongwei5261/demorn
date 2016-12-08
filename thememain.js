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
var uri = 'http://api.ziwatek.com/v1/themes?l=zh&dip=xxhdpi&ch=2b-2b-VSUN-VSUNILLUSION&v=2b8db7d0&u=&e=1&g=0&p=1&n=6&s=title&o=ASC'

export default class thememain extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(require('./themes.json'))
        };
    }

    componentDidMount() {
        this._loadThemesData();
    }

    _loadThemesData() {
        fetch(uri)
            .then((response)=>response.json())
            .then((responseData)=>{
                var responseJson = responseData['result'];
                // alert(responseJson);
                this._dealWithData(responseJson);
            })
            .catch((error)=>{
                if (error) {
                    alert(error)
                }
            })
    }

    _dealWithData(responseJson) {
        var dataArrs = [];

        for(var i = 0; i < responseJson.length; i++) {
            dataArrs.push(responseJson[i]);
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dataArrs)
        })
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
                <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                       style={{width: 30, height: 30}}/>
                <Image source={imgs[1]}/>
                <Image source={imgs[1]}/>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    contentContainerStyle={{flexDirection:'row', flexWrap:'wrap', flex:1}}
                    />
            </View>
        );
    }


    _renderRow(rowData, sectionId, rowId, hItemId){
        return(
            <TouchableOpacity  style={styles.itemViewStyle} activeOpacity={0.5} onPress={() => {ToastAndroid.show('row:' + rowId, ToastAndroid.SHORT)}}>
                <View>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width:60, height:60}}/>
                    <Text style={{backgroundColor:'red'}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
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