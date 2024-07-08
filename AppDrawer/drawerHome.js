import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Login Successful');
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../image/logo.webp')} style={styles.logo} />
      <Text style={styles.title}>ເຂົ້າສູລະບົບ</Text>
      <TextInput
        style={styles.input}
        placeholder="ກະລຸນາໃສອິເມວຂອງທ່ານ"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="ກະລຸນາໃສລະຫັດຜ່ານຂອງທ່ານ"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Login" onPress={()=>navigation.jumpTo("information")}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Phetsarath OT',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    fontFamily: 'Phetsarath OT',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '80%',
  },
});

export default Login;
