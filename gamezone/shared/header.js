import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    // <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
    // </ImageBackground>
    <>
      {/* <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} /> */}
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4fc6e0',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
    color: '#4fc6e0',
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});