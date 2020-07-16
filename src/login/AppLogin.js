import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity , Image, Text, FlatList, Dimensions, View} from 'react-native'
import  Button from '../components/Button'
import AppTextInput from '../components/AppTextInput'


class AppLogin extends Component {

    constructor(props) {
        super(props)
        this.state= {
            email: "",
            password: ""
        }
    }

    handleEmailChange = (email) => {
        this.setState({ email: email });
    };
    
    handlePasswordChange = (password) => {
        this.setState({ password: password });
    };

    handleLoginPress = () => {
      //alert(this.props.navigation)
      this.props.navigation.navigate('Video Demo')
    }

    render() {
        return (
          <View style={styles.container}>
          <View style={styles.form}>
          <AppTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={'email'}
          />
          <AppTextInput
            value={this.state.password}
            secureTextEntry={true}
            password={true}
            onChangeText={this.handlePasswordChange}
            placeholder={'password'}
          />
          <Button label={'LOGIN'} onPress={this.handleLoginPress} />
        </View>
      </View>
      );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    }
  });
  
export default AppLogin;

AppLogin.propTypes = {
  navigation: PropTypes.object,
}