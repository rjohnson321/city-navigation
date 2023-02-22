import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Drawer = createDrawerNavigator();


const artImg = require('./assets/art.png');
const ArtScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={artImg}/>
    </View>
  );
}

const mileImg = require('./assets/mile.png');
const MileScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={mileImg}/>
    </View>
  );
}

const pierImg = require('./assets/pier.png');
const PierScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={pierImg}/>
    </View>
  );
}

const waterImg = require('./assets/water.png');
const WaterScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={waterImg}/>
    </View>
  );
}

const willisImg = require('./assets/willis.png');
const WillisScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={willisImg}/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Art Institue of Chicago" component={ArtScreen}/>
        <Drawer.Screen name="Magnificent Mile" component={MileScreen}/>
        <Drawer.Screen name="Navy Pier" component={PierScreen}/>
        <Drawer.Screen name="Water Tower" component={WaterScreen}/>
        <Drawer.Screen name="Willis Tower" component={WillisScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 480
  },
});
