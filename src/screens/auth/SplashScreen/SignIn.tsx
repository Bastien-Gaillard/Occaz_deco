import { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';

import InputText from '../../../components/Input'
import colors from '../../../utils/color'
import Button from '../../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AuthHeader from '../../../components/AuthHeader';

export default function SignIn({ navigation }) {

    let ScreenHeight = Dimensions.get('window').height;
    const errorMessage = 'This file is empty'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorName, setErrorName] = useState(<Text style={{ color: '#DC143C', fontWeight: '800' }}>{errorMessage}</Text>);
    const [errorPassword, setErrorPassword] = useState(<Text style={{ color: '#DC143C', fontWeight: '800' }}>{errorMessage}</Text>);
    const [displayErrorName, setDisplayErrorName] = useState(false);
    const [displayErrorPassword, setDisplayErrorPassword] = useState(false);

    const instance = axios.create({
        baseURL: 'http://51.91.249.126:3010/',
    });

    let refreshToken;

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: ScreenHeight,
            backgroundColor: '#ffffff'
        },
        title: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 26,
            lineHeight: 32,
            color: '#4F63AC',
            marginLeft: 16
        },
        text: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 17,
            color: '#4F63AC'
        },
        line: {
            width: 90,
            height: 1,
            backgroundColor: colors.grey,
            marginHorizontal: 12
        }
    });

    const handleSubmit = async (event) => {
        setDisplayErrorName(false);
        setDisplayErrorPassword(false);
        if (email == '') {
            setDisplayErrorName(true);
        } else if (password == '') {
            setDisplayErrorPassword(true);
        } else {
            try {
                instance.post('users/login', {
                    email: email,
                    password: password,
                }).then(async (response) => {
                    if (response.data == 'Wrong email or password') {
                        Alert.alert(response.data);
                    } else {
                        await AsyncStorage.setItem('accessToken', response.data);
                        instance.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
                        const user = loadUserInfos();
                        navigation.navigate('Main');
                    }
                }).catch((error) => {
                    console.log(error);
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
    function loadUserInfos() {
        instance.get('me').then((response) => {
            AsyncStorage.setItem('user', JSON.stringify(response.data));
        }).catch((error) => {
            console.log(error.response);
        });
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <AuthHeader name='Sign in' onPress={() => navigation.navigate('Home')} />
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <InputText name='Name' placeholder='John Doe' secureTextEntry={false} style={undefined} value={email} onChange={handleEmailChange} options={undefined} icon={undefined} multiline={undefined} numberOfLines={undefined} />
                    {displayErrorName && errorName}
                    <InputText name='Password' placeholder='************' secureTextEntry={true} style={undefined} value={password} onChange={handlePasswordChange} options={undefined} icon={undefined} multiline={undefined} numberOfLines={undefined} />
                    {displayErrorPassword && errorPassword}
                    <Button title='Sign in' onPress={handleSubmit} icon={false} colorIcon={false} style={{ backgroundColor: '#4F63AC' }} activeOpacity={0.6} styleText={{ color: '#ffffff' }} />
                    <View style={{ marginTop: 8, marginBottom: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={styles.line}></View>
                        <Text style={styles.text}>Or sign up with</Text>
                        <View style={styles.line}></View>
                    </View>
                    <Button title='' icon='google' onPress={loadUserInfos} colorIcon={'#ffffff'} style={{ backgroundColor: colors.black, width: 142, marginBottom: 32 }} activeOpacity={0.6} styleText={undefined} />
                    <Text style={styles.text} onPress={() => navigation.navigate('SignUp')}>Don’t have an account? <Text style={{ fontWeight: 'bold' }}>Sign Up </Text></Text>
                </View>
            </View>
        </View>
    )
}
