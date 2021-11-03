import React from 'react';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';
import Orders from '../../pages/Orders';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {theme} from '../../styles/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Items = [
  {
    title: 'Home',
    name: 'Home',
    icon: 'home-outline',
    component: Home,
  },
  {
    title: 'Carrinho',
    name: 'Carrinho',
    icon: 'cart-outline',
    component: Cart,
  },
  {
    title: 'Meus Pedidos',
    name: 'Pedidos',
    icon: 'pricetag-outline',
    component: Orders,
  },
];

const Tabbar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 70,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderBottomWidth: 3,
          borderBottomColor: theme.colors.darkGrey,
        },
      }}>
      {Items.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            // eslint-disable-next-line
          tabBarIcon: ({focused}) => (
              <Icon
                name={item.icon}
                size={25}
                color={focused ? theme.colors.darkGrey : theme.colors.lightGrey}
              />
            ),
            // eslint-disable-next-line
          tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={{
                    color: focused
                      ? theme.colors.darkGrey
                      : theme.colors.lightGrey,
                    width: '70%',
                    textAlign: 'center',
                    borderBottomWidth: 3,
                    borderBottomColor: focused ? theme.colors.darkGrey : '#fff',
                    marginBottom: 5,
                  }}>
                  {item.name}
                </Text>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabbar;
