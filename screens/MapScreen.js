import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('HomeScreen')}

            style={tw`absolute top-8 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}>
             <Icon name="menu" />
            </TouchableOpacity>

            <View style={tw`h-1/3`}>
                <Map />
            </View>

        {/* initially was h-1/2 for each card, but that messed with the phone keyboard */}
            <View style={tw`h-2/3`}>
                <Stack.Navigator>
                    <Stack.Screen
                    name="NavigateCard"
                    component={NavigateCard}
                    options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen
                    name="RideOptionsCard"
                    component={RideOptionsCard}
                    options={{
                        headerShown: false,
                    }}/>

                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({});