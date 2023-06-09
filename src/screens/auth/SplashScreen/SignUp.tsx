import { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';

import InputText from '../../../components/Input'
import CheckBox from '../../../components/CheckBox';
import colors from '../../../utils/color'
import Button from '../../../components/Button';
import axios from 'axios';
import AuthHeader from '../../../components/AuthHeader';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});
export default function SignUp({ navigation }) {

    let ScreenHeight = Dimensions.get('window').height;


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [message, setMessage] = useState('One error');
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: ScreenHeight,
            backgroundColor: '#ffffff'
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

    const handleSubmit = () => {
        setDisplayMessage(false)
        if(name == ''){
            setMessage('Field name is empty');
            setDisplayMessage(true);
        } else if (email == ''){
            setMessage('Field email is empty');
            setDisplayMessage(true);
        } else if (password == ''){
            setMessage('Field password is empty');
            setDisplayMessage(true);
        } else if(!agree){
            setMessage('Please accept Terms & Privacy');
            setDisplayMessage(true);
        } else {
            instance.post('users/create', {name: name, email: email, password: password})
            .then((response) => {
                Alert.alert('The account has been created, you can sign in now');
                setName('');
                setEmail('');
                setPassword('');
                setAgree(false);
            })
            .catch((error) => {
                Alert.alert('Error when create account');
            });
            console.log(name, email, password, agree)
        }
    }

    const handleChangeName = (value) => {
        setName(value);
    }

    const handleChangeEmail = (value) => {
        setEmail(value);
    }
    const handleChangePassword = (value) => {
        setPassword(value);
    }
    const handleChangeAgree = (value) => {
        setAgree(value)
    }
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <AuthHeader name='Sign up' onPress={() => navigation.navigate('Home')} />
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <InputText name='Name' placeholder='John Doe' secureTextEntry={false} style={undefined} value={undefined} onChange={handleChangeName} options={undefined} icon={undefined} multiline={undefined} numberOfLines={undefined} />
                    <InputText name='E-mail' placeholder='exemple@gmail.com' secureTextEntry={false} style={undefined} value={undefined} onChange={handleChangeEmail} options={undefined} icon={undefined} multiline={undefined} numberOfLines={undefined} />
                    <InputText name='Password' placeholder='************' secureTextEntry={true} style={undefined} value={undefined} onChange={handleChangePassword} options={undefined} icon={undefined} multiline={undefined} numberOfLines={undefined} />
                    <CheckBox label='I agree with bold Terms & Privacy' selected={false} style={undefined} onChange={handleChangeAgree}/>
                    {displayMessage && <Text style={{fontWeight: '900', color: 'red'}}>{message}</Text>}
                    <Button title='Sign up' colorIcon={false} onPress={handleSubmit} icon={false} style={{ backgroundColor: '#4F63AC'}} activeOpacity={0.6} styleText={{color: '#ffffff' }} />
                    <View style={{ marginTop: 8, marginBottom: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={styles.line}></View>
                        <Text style={styles.text}>Or sign up with</Text>
                        <View style={styles.line}></View>
                    </View>
                    <Button title='' icon='google' colorIcon='#ffffff' onPress={undefined} style={{ backgroundColor: colors.black, width: 142 }} activeOpacity={0.6} styleText={undefined} />
                    <Text style={styles.text} onPress={() => navigation.navigate('SignIn')}>Already have an account? <Text style={{ fontWeight: 'bold' }}>Sign In</Text></Text>
                </View>
            </View>
        </View>
    )
}
