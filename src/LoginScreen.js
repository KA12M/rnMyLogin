//import liraries
import React, {Component, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicatorIOS,
  Alert,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    setOptionNavigation();
  }, []);

  const setOptionNavigation = () => {
    props.navigation.setOptions({
      title: 'Login Form',
    });
  };

  const onLogin = async () => { 
    let regUsername = await AsyncStorage.getItem('username')
    let regPassword = await AsyncStorage.getItem('password') 
    if(regUsername==null || regPassword==null);
    else if(regUsername==username&&regPassword==password){
        alert('Login successful..');
        props.navigation.navigate('HomeScreen');
    }else Alert.alert('Invalid username or password..')
  };
  const onRegister = () => {
    props.navigation.navigate('RegisterScreen');
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          style={styles.banner}
          resizeMode="center"
          source={require('./imgs/codemobiles_logo.png')}
        />

        <TextInput
          onChangeText={text =>setUsername(text)}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.input}
          placeholder="username"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
        />

        <TouchableOpacity
          onPress={() => onLogin()}
          activeOpacity={0.5}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableHighlight
          underlayColor="yellow"
          onPress={() => onRegister()}
          style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Don't have an account..</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
    paddingTop: 80,
  },
  banner: {
    height: 90,
    width: '100%',
  },
  input: {
    height: 50,
    width: '100%',
    marginTop: 10,
    padding: 4,
    borderRadius: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec33',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  registerButton: {
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
  },
  registerButtonText: {
    fontSize: 18,
    color: '#0007',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 40,
  },
  error: {
    color: 'red',
    paddingTop: 10,
  },
  success: {
    color: 'green',
    paddingTop: 10,
  },
  loader: {
    marginTop: 20,
  },
});

//make this component available to the app
export default LoginScreen;
