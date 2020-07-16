import React, { Component , useCallback} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity , Image, Text, FlatList, Dimensions, View, Linking} from 'react-native'
import { watermelon100, blueberry100 } from './colors'
import {formatDateInMMM, formatTime} from './utils/CommonUtils'
import PhotoGrid  from './PhotoGrid'
import  Button from './components/Button'


const getSlotDate = (data) => {
    const date = formatDateInMMM(Number(data.startTime))
    if (date) {
        return date 
    }
    return ''
}

const getSlotTime = (data) => {
    const time = formatTime(Number(data.startTime), Number(data.endTime))
    if (time) {
        return  time    
    }
    return ''
}

const OpenURLButton = ({ url }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return ( 
    <TouchableOpacity style= {styles.button} onPress={handlePress}>
    <Text style={{textAlign: "center", color: watermelon100}}>Join Demo</Text>
    </TouchableOpacity>
    )
  };

const styles = StyleSheet.create({
   
    container:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16
    },

   button: {
    margin: 16,
    },

    containerImage:{
        flex: 1
    },

    innerText: {
        textAlign: 'center',
        textAlignVertical: "center",
        fontSize: 12,
        color: blueberry100,
        fontWeight: 'bold',
        marginVertical: 8,
        paddingRight: 8
    }
  })


class VideoDemoItem extends Component {

    constructor(props) {
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(){
        
    }

    render() {
        return(
            <View style= {styles.container}>
            <PhotoGrid images = { this.props.data.item.productList} />
            <View style= {{marginRight: 16}}>
                <Text style= {styles.innerText}> { getSlotDate(this.props.data.item) }</Text>
                <Text style= {styles.innerText}> { getSlotTime(this.props.data.item) }</Text>
               <OpenURLButton url={this.props.data.item.demoLink}/>
                </View>
            </View>
        )
       
    }
}

VideoDemoItem.propTypes = {
    data : PropTypes.object.isRequired
}

export default VideoDemoItem