import React, { Component } from 'react'
import PhotoGrid from './PhotoGrid';
import { TouchableOpacity , Image, Text, FlatList} from 'react-native'
import { getVideoDemoData } from './utils/ApiRequests'
import VideoDemoItem from './VideoDemoItem'
import {blueberry10} from './colors'

class VideoDemo extends Component {
    
  constructor(props) {
    super(props)
    this.state = { viewData :[] }
    this.renderItem = this.renderItem.bind(this)
  }

  async componentDidMount(){
    const videoData = await getVideoDemoData()
    this.setState({viewData: videoData.demoList})
  }

  renderItem(item) {
    return(
      <VideoDemoItem
      data = {item}
      />
    )
  }

  render() {
    if(this.state.viewData && this.state.viewData.length > 0) {
      return(
        <FlatList
          style = {{flex: 1, paddingTop: 16, backgroundColor: blueberry10}}
          data={this.state.viewData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          />)
    }
    return null
  }


}

export default VideoDemo

