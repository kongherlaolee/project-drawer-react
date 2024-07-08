import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../image/logo.webp')} style={styles.logo} />
      <Text style={styles.title}>ກ່ຽວ​ກັບ​ພວກ​ເຮົາ</Text>
      <Text style={styles.description}>
      ຍິນດີຕ້ອນຮັບກັບຄໍາຮ້ອງສະຫມັກຂອງພວກເຮົາ. ພວກເຮົາມຸ່ງຫມັ້ນທີ່ຈະສະຫນອງການບໍລິການທີ່ດີທີ່ສຸດສໍາລັບຜູ້ໃຊ້ຂອງພວກເຮົາ. ແອັບຂອງພວກເຮົາຊ່ວຍໃຫ້ທ່ານຈັດການວຽກງານຂອງທ່ານໄດ້ຢ່າງມີປະສິດທິພາບ ແລະ ປະສິດທິຜົນ.
      </Text>
      <Text style={styles.description}>
      ທີມງານຂອງພວກເຮົາປະກອບດ້ວຍຜູ້ຊ່ຽວຊານທີ່ມີປະສົບການທີ່ອຸທິດຕົນເພື່ອຮັບປະກັນປະສົບການທີ່ບໍ່ມີຮອຍຕໍ່. ຂໍ​ຂອບ​ໃຈ​ທ່ານ​ສໍາ​ລັບ​ການ​ເລືອກ app ຂອງ​ພວກ​ເຮົາ​!
      </Text>
      <Text style={styles.contact}>Contact Us:</Text>
      <Text style={styles.email}>Email: kongherlaolee@gmail.com</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: '',
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
