import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Easing } from 'react-native-reanimated';

import TravelList from '../screens/TravelList';
import TravelDetails from '../screens/TravelDetails';

const Stack = createSharedElementStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
          name="TravelList" 
          component={TravelList}
        />
        <Stack.Screen 
          name="TravelDetails" 
          component={TravelDetails}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
              return [
                {
                  id: `item.${item.key}.photo`,
                  // animation: 'move'
                },
                {
                  id: `item.${item.key}.name`,
                  // animation: 'fade-out'
                },
              ];
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {duration: 300, easing: Easing.inOut(Easing.ease)},
              },
              close: {
                animation: 'timing',
                config: {duration: 300, easing: Easing.inOut(Easing.ease)},
              },
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;