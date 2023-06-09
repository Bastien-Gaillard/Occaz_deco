/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/screens/auth/SplashScreen/Home';
import SignUp from './src/screens/auth/SplashScreen/SignUp';
import SignIn from './src/screens/auth/SplashScreen/SignIn';
import Main from './src/screens/pages/Main/Main';
import Product from './src/components/Products/Product';
import Description from './src/components/Products/Description/Description';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profil from './src/screens/pages/Profil';
import Listing from './src/screens/pages/Profil/Listing';
import Favorites from './src/screens/pages/Favorites';
import Create from './src/screens/pages/Profil/Create';
import Update from './src/screens/pages/Profil/Update';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const UserContext = createContext({});

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('accesToken');
        await AsyncStorage.setItem('favorites', JSON.stringify([]));

        setUser(storedUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack.Navigator>

          {!!user ?
            <React.Fragment>
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }} />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
            </React.Fragment>

            :
            <React.Fragment>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }} />
            </React.Fragment>

          }
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }} />


          <Stack.Screen
            name="Description"
            component={Description}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Profil"
            component={Profil}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Listing"
            component={Listing}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Create"
            component={Create}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Update"
            component={Update}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </UserContext.Provider>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
