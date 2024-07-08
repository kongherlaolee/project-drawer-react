import { StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import drawerSetting from '../AppDrawer/drawerSetting'
import drawerHome from '../AppDrawer/drawerHome'
import Service from '../AppDrawer/Service'
import About from '../AppDrawer/About'
import Contact from '../AppDrawer/Contact'
import { Ionicons } from '@expo/vector-icons'
import Logout from '../AppDrawer/Logout'
import information from '../AppDrawer/information'

const draw =createDrawerNavigator();

const DrawerMenu = ({navigetion}) => {
  return (
    <NavigationContainer>
        <draw.Navigator styles={styles.drawerLabel}>
        <draw.Screen 
            name='Home' size={20}
            component={drawerHome}
            options={{
                drawerLabel:'ຫນ້າຫຼັກ', 
                drawerIcon:((focused)=>
                <Ionicons name='home' size={20} ></Ionicons>)
                
            }}
            
            />
            <draw.Screen 
            name='information'
            component={information}
            options={{
              drawerLabel:'ຂໍ້ມູນ',
              drawerIcon:((focused)=>
                <AntDesign name="folderopen" size={24} color="black" />)
          }}
            />
            <draw.Screen 
            name='about'
            component={About}
            options={{
              drawerLabel:'ກ່ຽວກັບ',
              drawerIcon:((focused)=>
                <Ionicons name='person' size={20} ></Ionicons>)
          }}
            />
            <draw.Screen 
            name='contact'
            component={Contact}
            options={{
              drawerLabel:'ຕິດຕໍ່',
              drawerIcon:((focused)=>
                <Ionicons name='call' size={20} ></Ionicons>)
          }}
          />
          <draw.Screen 
            name='service'
            component={Service}
            options={{
              drawerLabel:'ບໍລີການ', 
              drawerIcon:((focused)=>
                <Ionicons name='people' size={20} ></Ionicons>)
          }}
          />
            <draw.Screen 
            name='setting'
            component={drawerSetting}
            options={{
                drawerLabel:'ຕັ້ງຄ່າ', 
                drawerIcon:((focused)=>
                  <Ionicons name='settings' size={20} ></Ionicons>)
            }}
            
            />
            <draw.Screen
            name='Logout'
            component={Logout}
            options={{
                drawerLabel:'ອອກຈາກລະບົບ',
                drawerIcon:((focused)=>
                  <Ionicons name='' size={20} ></Ionicons>)
            }}
            
            />
            
        </draw.Navigator>
    </NavigationContainer>
  )
}

export default DrawerMenu

const styles = StyleSheet.create({
  
  drawerLabel:{
    fontFamily:'Phetsarath OT',
  },
  

})