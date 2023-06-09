
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Input from './Input';
import Title from './Title';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Form = () => {

    const [user, setUser] = useState<any>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const styles = StyleSheet.create({
        container: {
            position: 'relative',
            top: 60,
            marginLeft: '5%',
            width: '100%',
        },
    });

    const handleNameChange = async (value) => {
        setName(value);
        await instance.put('users/update/name', { id: user.id, name: value })
            .then(async (response) => {
                user.name = value;
                await AsyncStorage.setItem('user', JSON.stringify(user));
            })
            .catch((error) => {
                Alert.alert('Error changing the name')
            });
    }

    const handleEmailChange = async (value) => {
        setEmail(value);
        await instance.put('users/update/email', { id: user.id, email: value })
            .then(async (response) => {
                user.email = value;
                await AsyncStorage.setItem('user', JSON.stringify(user));
            })
            .catch((error) => {
                Alert.alert('Error changing the email')
            });
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user: any = await AsyncStorage.getItem('user')
                const userParse = JSON.parse(user);
                setUser(userParse);
                setName(userParse.name);
                setEmail(userParse.email);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Title name='Personal Information' icon='edit' />
            {!!user &&
                <View>
                    <Input name='Name' value={user?.name} onChange={handleNameChange} />
                    <Input name='Email' value={user?.email} onChange={handleEmailChange} />
                </View>
            }
        </View>
    );


};
export default Form;

