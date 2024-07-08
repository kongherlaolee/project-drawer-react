import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import DrawerMenu from './Drawer/DrawerMenu';
const initialLayout = { width: Dimensions.get('window').width };

const App = () => {

  return (
    <DrawerMenu/>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default App;
