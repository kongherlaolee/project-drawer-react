import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../image/logo.webp')} style={styles.logo} />
      <Text style={styles.title}>ຂໍ້ມູນຕິດຕໍ່ຂອງເຮົາ</Text>
      <Text style={styles.description}>
        ສະຖາທີຕັ້ງຢູ່ບ້ານດົງໂດກ ເມືອງໄຊທານີ ນະຄວນຫຼວງວຽງຈັນ
      </Text>
      <Text style={styles.description}>
        ເບີໂທ: 020 55 986 727
        
      </Text>
      <Text style={styles.description}>
        ເຟສ facebook: Kongher HLL Odx
      </Text>
      
      <Text style={styles.contact}>ຕິດຕໍ່:</Text> 
      <Text style={styles.email}>ອີເມວ: kongherlaolee@gmail.com</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Phetsarath OT',
    marginBottom: 16,
    textAlign: '',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Phetsarath OT',
    marginBottom: 16,
    textAlign: '',
    paddingHorizontal: 16,
  },
  contact: {
    fontSize: 18,
    fontFamily: 'Phetsarath OT',
    marginTop: 20,
    textAlign: '',
  },
  email: {
    fontSize: 16,
    fontFamily: 'Phetsarath OT',
    textAlign: '',
  },
});

export default About;
