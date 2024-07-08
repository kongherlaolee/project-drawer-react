import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

const Setting = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');
  const [username, setUsername] = useState('');

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  const handleSave = () => {
    Alert.alert('Settings Saved', `Username: ${username}\nLanguage: ${language}\nDark Mode: ${isDarkMode ? 'Enabled' : 'Disabled'}`);
  };

  const handleLogout = () => {
    navigation.jumpTo("Logout");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ການຕັ້ງຄ່າ</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>ຊື່ຜູ້ໃຊ້</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>ພາສາ</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your language"
          value={language}
          onChangeText={setLanguage}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>ໂໝດມືດ</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      {/* <Button title="Save Settings" onPress={handleSave} /> */}
      <Button title="save setting" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Phetsarath OT',
    marginBottom: 16,
    textAlign: 'center',
  },
  settingItem: {
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 18,
    fontFamily: 'Phetsarath OT',
    marginBottom: 8,
  },
  input: {
    height: 40,
    fontFamily: 'Phetsarath OT',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default Setting;
