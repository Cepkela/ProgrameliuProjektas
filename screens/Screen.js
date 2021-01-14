import { NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native'
import { SearchBar } from 'react-native-elements';
import {HomeScreen} from './HomeScreen'
import {NewScreen} from './NewScreen'
export default  class Screen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text:'',
            data:[]
        }
    }
    componentDidMount(){
        this.apiCall();
    }
    async apiCall(){
        let resp = await fetch('https://api.meteo.lt/v1/places')
        let respJson = await resp.json()
        console.warn(respJson)
        this.setState({data:respJson})
    }
    render(){
    return (   
    <View>
            <Text style={styles.text}>Pasirinkite miesta</Text>
            <FlatList
            data={this.state.data}
            renderItem={({item})=> <Button rounded style={styles.button} title={item.code} onPress={() => 
                this.props.navigation.navigate('NewScreen', {otherParam:item.code})}></Button>}
            />
            </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    text:{
        textAlign:'center',
        fontSize:20,
        alignItems:'center',
        paddingTop:60,
        justifyContent: 'center',
    },
    button:{
        marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
    }
  });