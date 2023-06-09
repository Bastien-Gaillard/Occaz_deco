import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../../../components/Header';
import Form from './Form';
import Help from './Help';
import Footer from '../../../../components/Footer';
const UpdateProfil = ({ navigation }) => {
    let ScreenHeight = Dimensions.get('window').height;


    const [user, setUser] = useState<any>();
    const [firstname, setFirstname] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user: any = await AsyncStorage.getItem('user')
                setUser(JSON.parse(user));
                setFirstname(user?.firstname)

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    const styles = StyleSheet.create({
        container: {
            height: ScreenHeight,
            width: '100%',
            minHeight: '70%'
        },
        contain: {
            position: 'relative',
            top: 40,
            marginLeft: 16
        },
        name: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 20,
            lineHeight: 27,
            color: '#303030',
            marginBottom: 12
        },
        email: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 15,
            textAlign: 'justify',
            color: '#808080',
            marginBottom: 12
        },
        description: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 15,
            textAlign: 'justify',
            color: '#808080',
        },
    });

    const handleFirstname = (value) => {
        setFirstname(value);
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ minHeight: 400 }}>

                <Header name="Settings" logout={false} leftArrow={false} navigation={undefined} backValue={undefined} />
                <Form />
                <Help />
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    );


};
export default UpdateProfil;