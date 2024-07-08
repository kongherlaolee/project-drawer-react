import React from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';

const Information = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>ຂໍ້ມູນຜະລິດຕະພັນ</Text>
      <Text style={styles.description}>
      ລາຍລະອຽດສີນຄ້າ: ກາເຟດຳຄັ້ງກວງຈາດ ເປັນກາເຟຊັ້ນເອກທີ່ຜະລິດຈາກເມັດກາເຟຄັດສັນທີ່ມີຄຸນນະພາບ ແລະ ເຄື່ອງຄົມກັນເຊີຍໃຫ້ມີລົດຊາດທີ່ເຂົ້າເຂັ້ມ. ກາເຟຂອງພວກເຮົາຖືກບັນຈຸໃນຖ້ວງກິດພາຍດ້ານໂດຍການໃຊ້ບັນຈຸບໍຣາວະສາລະສີມື້ຕໍ່ເຂົ້າ.
      </Text>
      <Text style={styles.description}>
      ຄຸນນະສົມບັດ:

      ທຳມາດາ: 100% ກາເຟດຳທີ່ຜ່ານການຄົມກັນໃຫ້ສຸກໄວ້ປະສົບການກາເຟສຸກປິ້ງພິເສດ.
      ເປັນມິດຕໍ່ສິ່ງແວດລ້ອມ: ຖ້ວງບັນຈຸຂອງພວກເຮົາຖືກຜະລິດດ້ວຍວັດຖຸທີ່ຍ້ອນກັບໄດ້ເພື່ອລົດຜົນກະທົບຕໍ່ສິ່ງແວດລ້ອມ.
      ຄວາມເຂົ້າເຂັ້ມ: ກາເຟຂອງພວກເຮົາມີຄວາມເຂົ້າເຂັ້ມແລະມີລົດຊາດທີ່ອົບອຸ່ນໃນທຸກຄຳທີ່ດື່ມ.
      ວິທີການໃຊ້ງານ:

      ຕັກ 1-2 ຊ້ອນກາເຟດຳຄັ້ງກວງຈາດລົງໃສ່ຖ້ວງ.
      ເອົານໍ້າຮ້ອນໃສ່ລົງໃນຖ້ວງແລະຄົນໃຫ້ກາເຟລະລາຍໄປໃນນ້ຳ.
      ດື່ມທັນທີພໍກາເຟປະສົບຄວາມຮ້ອນທີ່ຕ້ອງການ.
      </Text>
      
      <Button title="More Details" onPress={()=>navigation.jumpTo("setting")}  />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
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
    marginBottom: 12,
    textAlign: 'justify',
  },
});

export default Information;
