import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

const Logout = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been successfully logged out.');
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Image source={require('../image/logo.webp')} style={styles.logo} />
      <Text style={styles.title}>ອອກຈາກລະບົບ</Text>
      <Text style={styles.message}>ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການອອກຈາກລະບົບ?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Phetsarath OT',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    fontFamily: 'Phetsarath OT',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default Logout;
