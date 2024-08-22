import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function DetailsScreen({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
      }}>
      <View style={{marginBottom: 8}}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: 600,
          }}>
          Details Screen
        </Text>
      </View>

      {/* IMP */}
      <View
        style={{
          backgroundColor: 'gray',
          width: '100%',
          padding: 10,
          borderRadius: 10,
          marginBottom: 13,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            marginVertical: 5,
            fontWeight: 600,
            textAlign: 'center',
          }}>
          Important
        </Text>

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingHorizontal: 10,
            }}>
            {'>'} npm i @react-navigation/native
          </Text>
        </View>
      </View>

      {/* STACK */}
      <View
        style={{
          backgroundColor: 'darkgray',
          width: '100%',
          padding: 10,
          borderRadius: 10,
          marginBottom: 13,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            marginVertical: 5,
            fontWeight: 600,
            textAlign: 'center',
          }}>
          Stack Navigator
        </Text>

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 19,
              color: 'black',
              fontWeight: 600,
            }}>
            Required Library:
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              paddingHorizontal: 10,
            }}>
            {'>'} npm install @react-navigation/native-stack
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 19,
              color: 'black',
              fontWeight: 600,
            }}>
            Required Dependencies:
          </Text>
          <Text
            style={{
              fontSize: 19,
              color: 'white',
              paddingHorizontal: 10,
            }}>
            {'>'} npm i react-native-screens react-native-safe-area-context
          </Text>
        </View>
      </View>

      {/* DRAWER */}
      <View
        style={{
          backgroundColor: 'gray',
          width: '100%',
          padding: 10,
          borderRadius: 10,
          marginBottom: 13,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            marginVertical: 5,
            fontWeight: 600,
            textAlign: 'center',
          }}>
          Drawer Navigator
        </Text>

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 19,
              color: 'black',
              fontWeight: 600,
            }}>
            Required Library:
          </Text>
          <Text
            style={{
              fontSize: 19,
              color: 'white',
              paddingHorizontal: 10,
            }}>
            {'>'} npm install @react-navigation/drawer
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 19,
              color: 'black',
              fontWeight: 600,
            }}>
            Required Dependencies:
          </Text>
          <Text
            style={{
              fontSize: 19,
              color: 'white',
              paddingHorizontal: 10,
            }}>
            {'>'} npm install react-native-gesture-handler react-native-reanimated
          </Text>
        </View>
      </View>


    {/*Not works on DRAWER Navigator */}
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> */}


      <View style={{flexDirection: 'row', gap: 10, marginTop: 12}}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
