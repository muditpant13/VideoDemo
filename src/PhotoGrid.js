import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity , Image, Text, FlatList, Dimensions, View} from 'react-native'
import {blueberry10, blueberry20, blueberry100} from './colors'

const calculateImageWidth = () => {
    return Dimensions.get('window').width / 4
}

const styles = StyleSheet.create({
    baseText: {
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: 20,
    color: blueberry100,
    backgroundColor: blueberry10,
    borderBottomColor: blueberry20,
    borderRightColor: blueberry20,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,    
    fontWeight: 'bold'
    },
    innerText: {
      color: 'red'
    }
  })

class PhotoGrid extends Component {

    constructor(props){
        super(props)
        this.state = {
            images: this.constructImageData(props.images)
        }
        this.renderItem = this.renderItem.bind(this)
    }


    constructImageData = (images) => {    
        const imageGridData = []    
        if(images) {
            let count = 0
            images.map( (image, index) => {
                if(count < 3) {
                    const gridDataItem = {
                        id: image.productImage + index,
                        src: image.productImage,
                        type: 'image',
                        width: calculateImageWidth(),
                        height: calculateImageWidth() * (4 /3)
                    }
                    imageGridData.push(gridDataItem) 
                    count++
                }
            })  

            if(images.length > 3){
                const extraItemLeft =  images.length - 3
                const lastItem = {
                    id: 'lastItem',
                    lastItemText: '+' + extraItemLeft,
                    type: 'text',
                    width: calculateImageWidth(),
                    height: calculateImageWidth() * (4 /3)
                }
                imageGridData.push(lastItem) 
            }  
        }

        return imageGridData
        
    }

    renderItem(data) {
        const{item} = data
        switch (item.type ) {
            case 'image':
                return(
                <Image
                key = { item.id }
                source={ {uri: item.src}}
                style={{width: item.width, height: item.height }}
                />
            )
            case 'text':
                const textStyle = [ styles.baseText , { width: item.width, height: item.height }]
                return (
                   <Text style={textStyle}>{ item.lastItemText }</Text>
                   
                  );
        }
    }


    render(){
        if(this.state.images && this.state.images.length > 0) {
            return (
                <FlatList
                style = {{width: Dimensions.get('window').width / 2, margin: 8}}
                data={this.state.images}
                renderItem={this.renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
                />
            )
           
        }
       return null
            
    }

}

PhotoGrid.propTypes = {
    onPress: PropTypes.func,
    images : PropTypes.array.isRequired
}

export default PhotoGrid