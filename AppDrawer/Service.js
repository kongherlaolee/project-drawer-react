import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Service = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../image/logo.webp')} style={styles.logo} />
      <Text style={styles.title}>ບໍລິການຂອງພວກເຮົາ</Text>
      <Text style={styles.description}>
      ພວກເຮົາສະຫນອງການບໍລິການທີ່ຫລາກຫລາຍເພື່ອຕອບສະຫນອງຄວາມຕ້ອງການຂອງທ່ານ. ທີມງານຂອງພວກເຮົາແມ່ນອຸທິດຕົນເພື່ອສະຫນອງການບໍລິການຄຸນນະພາບສູງສຸດເພື່ອຮັບປະກັນຄວາມພໍໃຈຂອງທ່ານ.
      </Text>
      <View style={styles.serviceItem}>
        <Text style={styles.serviceTitle}>ບໍລິການ 1</Text>
        <Text style={styles.serviceDescription}>
        ລາຍລະອຽດຂອງການບໍລິການ 1. ບໍລິການນີ້ປະກອບມີຄຸນສົມບັດເຊັ່ນ:...
        </Text>
      </View>
      <View style={styles.serviceItem}>
        <Text style={styles.serviceTitle}>ບໍລິການ 1</Text>
        <Text style={styles.serviceDescription}>
        ລາຍລະອຽດຂອງການບໍລິການ 1. ບໍລິການນີ້ປະກອບມີຄຸນສົມບັດເຊັ່ນ:...
        </Text>
      </View>
      <View style={styles.serviceItem}>
        <Text style={styles.serviceTitle}>ບໍລິການ 1</Text>
        <Text style={styles.serviceDescription}>
        ລາຍລະອຽດຂອງການບໍລິການ 1. ບໍລິການນີ້ປະກອບມີຄຸນສົມບັດເຊັ່ນ:...
        </Text>
      </View>
      
    </ScrollView>
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
  description: {
    fontSize: 16,
    fontFamily: 'Phetsarath OT',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  serviceItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
  },
  serviceTitle: {
    fontSize: 20,
    fontFamily: 'Phetsarath OT',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 16,
    fontFamily: 'Phetsarath OT',
  },
});

export default Service;
