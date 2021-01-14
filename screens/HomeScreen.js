import React, { Fragment } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        text:'',
        data1:[],
        data2:[]
    }
}
componentDidMount(){
  this.apiCall();
}
async apiCall(){
  let resp = await fetch('https://api.meteo.lt/v1/places/vilnius/forecasts/long-term')
  let respJson = await resp.json()
  console.warn(respJson)
  this.setState({data1:respJson})
  this.setState({data2:respJson.place})
}
render(){
    return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.text}>{this.state.data2.name}</Text>
            <Text></Text>
            <Text></Text>
            <FlatList style={styles.item}
            data={this.state.data1.forecastTimestamps}
            renderItem={({item})=> (
              <Fragment>
            <Text style={{flex:1,fontSize:12, margin:15}}>Laikas: {item.forecastTimeUtc}</Text>
            <Text style={{flex:1,fontSize:12, margin:15}}>Oro temperatura: {item.airTemperature}</Text>
            <Text style={{flex:1,fontSize:10, margin:15}}>Vejo greitis {item.windSpeed}</Text>
            </Fragment>
            )}
            />
    </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      textAlign:'center',
      fontSize:20,
      alignItems:'center',
      paddingTop:60,
      justifyContent: 'center',
  },
    item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
  }, 
  });
