/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Images } from '~/assets/images';
import { navigationRef } from './RootNavigation';

import SplashScreen from '~/screens/SplashScreen';
import Home from '~/screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
};

const editOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  cardShadowEnabled: false,
  headerStyle: {
    backgroundColor: '#F8F8F8',
    opacity: 0.95,
  },
  headerTitleStyle: {
    color: '#333333',
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: -0.24,
    // fontFamily: 'Montserrat-ExtraBold',
  },
};

// const HomeTab = () => (
//   <Tab.Navigator tabBarOptions={{ showLabel: false }} initialRouteName="Feed">
//     <Tab.Screen
//       name="Feed"
//       component={Feed}
//       options={{
//         tabBarIcon: ({ focused }) => (
//           <Image
//             source={focused ? Images.IconHomeActive : Images.IconHome}
//             resizeMode="contain"
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Ranking"
//       component={Ranking}
//       options={{
//         tabBarIcon: ({ focused }) => (
//           <Image
//             source={focused ? Images.IconStarActive : Images.IconStar}
//             resizeMode="contain"
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Chat"
//       component={Chat}
//       options={{
//         tabBarIcon: ({ focused }) => (
//           <Image
//             source={focused ? Images.IconChatActive : Images.IconChat}
//             resizeMode="contain"
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="MyProfile"
//       component={MyProfile}
//       options={{
//         tabBarIcon: ({ focused }) => (
//           <Image
//             source={focused ? Images.IconProfileActive : Images.IconProfile}
//             resizeMode="contain"
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// const Logged = () => (
//   <Stack.Navigator initialRouteName="HomeTab">
//     <Stack.Screen name="HomeTab" component={HomeTab} options={options} />
//     <Stack.Screen name="Profile" component={Profile} options={options} />
//     <Stack.Screen
//       name="EditProfile"
//       component={EditProfile}
//       options={editOptions}
//     />
//   </Stack.Navigator>
// );

const Unlogged = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={options} />
  </Stack.Navigator>
);

const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          ...options,
          gestureEnabled: false,
        }}
      />

      {/* <Stack.Screen
        name="Logged"
        component={Logged}
        options={{
          ...options,
          gestureEnabled: false,
          animationTypeForReplace: 'pop',
        }}
      /> */}
      <Stack.Screen
        name="Unlogged"
        component={Unlogged}
        options={{ ...options, gestureEnabled: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Routes;
