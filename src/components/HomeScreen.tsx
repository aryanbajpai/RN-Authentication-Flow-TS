import * as React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { AuthContext } from '../router/Router';

export default function HomeScreen({ navigation }: any) {
    const { signOut } = React.useContext(AuthContext)!;

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 12,
            }}>

            {/* Step #9 */}
            <View style={{ marginVertical: 12, flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}>Signed In!</Text>
                <Button title="Sign Out" onPress={signOut} />
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                    backgroundColor: 'lightgray',
                    borderRadius: 10,
                    marginBottom: 16,
                }}>
                <View style={{ marginBottom: 8 }}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'black',
                            fontWeight: 600,
                        }}>
                        Home Screen
                    </Text>
                </View>

                <View
                    style={{
                        backgroundColor: 'gray',
                        width: '100%',
                        padding: 10,
                        borderRadius: 10,
                        marginBottom: 13,
                    }}>

                    <View style={{ marginBottom: 10 }}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'white',
                                fontWeight: 600,
                            }}>
                            Welcome, know about Stack and Drawer Navigators in Details section
                        </Text>
                    </View>
                </View>

                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </SafeAreaView>
    );
}
