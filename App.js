/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullname: '',
      username: '',
      password: '',
    };
    this.saveCustomer = this.saveCustomer.bind(this);
  }
  saveCustomer() {
    firestore()
      .collection('customers')
      .add({
        email: this.state.email,
        fullname: this.state.fullname,
        username: this.state.username,
        password: this.state.password,
      })
      .then(() => {
        this.setState({
          email: '',
          fullname: '',
          username: '',
          password: '',
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="cover"
          source={require('./assets/img/Instagramlogo.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 10,
            paddingHorizontal: 30,
            color: '#1115',
          }}>
          Sing up to see photos and videos from your friends.
        </Text>
        <Button
          style={{marginTop: 15}}
          contentStyle={{width: 300, height: 40, backgroundColor: '#0078FF'}}
          labelStyle={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}
          mode="outlined"
          uppercase={false}
          icon={({}) => (
            <Image
              source={require('./assets/facebook.png')}
              style={{width: 25, height: 25, tintColor: '#FFF'}}
            />
          )}>
          Log in with Facebook
        </Button>
        <Button
          style={{marginTop: 15}}
          contentStyle={{width: 300, height: 40}}
          labelStyle={{fontWeight: 'bold', fontSize: 15, color: '#111'}}
          mode="outlined"
          uppercase={false}
          icon={({}) => (
            <Image
              source={require('./assets/google-black.png')}
              style={{width: 20, height: 20, tintColor: '#111'}}
            />
          )}>
          Log in with Google
        </Button>
        <View
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold'}}>
              OR
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <TextInput
          label="Mobile Number or Email"
          style={styles.emailTextInput}
          value={this.state.email}
          onChangeText={value => {
            this.setState({
              email: value,
            });
          }}
        />
        <TextInput
          label="Full Name"
          style={styles.passwordTextInput}
          value={this.state.fullname}
          onChangeText={value => {
            this.setState({
              fullname: value,
            });
          }}
        />
        <TextInput
          label="Username"
          style={styles.passwordTextInput}
          value={this.state.username}
          onChangeText={value => {
            this.setState({
              username: value,
            });
          }}
        />
        <TextInput
          label="Password"
          style={styles.passwordTextInput}
          value={this.state.password}
          onChangeText={value => {
            this.setState({
              password: value,
            });
          }}
        />
        <Button
          style={styles.loginBtn}
          contentStyle={{height: 40, backgroundColor: '#025ced'}}
          labelStyle={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}
          onPress={this.saveCustomer}
          mode="outlined"
          uppercase={false}>
          Sign up
        </Button>
        <Text style={{marginTop: 25}}>
          Already have an account?
          <Text
            style={{fontWeight: 'bold'}}
            onPress={() => this.props.navigation.navigate('Login')}>
            {' '}
            login here.
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emailTextInput: {
    marginTop: 20,
    width: 300,
    height: 45,
  },
  nameTextInput: {
    marginTop: 20,
    width: 300,
    height: 45,
  },
  passwordTextInput: {
    marginTop: 20,
    width: 300,
    height: 45,
  },
  logo: {
    marginTop: 10,
    width: 220,
    height: 70,
  },
  loginBtn: {
    marginTop: 20,
    width: 300,
  },
});
