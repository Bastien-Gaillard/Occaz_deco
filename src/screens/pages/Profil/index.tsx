import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import colors from '../../../utils/color'
import Footer from '../../../components/Footer/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Information from './Information';
import Button from './Update/Button';

import Button1 from '../../../components/Button/index';
import Header from '../../../components/Header';
import color from '../../../utils/color';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Profil = ({ navigation }) => {
    let ScreenHeight = Dimensions.get('window').height;

    const [user, setUser] = useState<any>();
    const [createCount, setCreateCount] = useState<number>(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user: any = await AsyncStorage.getItem('user')
                setUser(JSON.parse(user));

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await instance.post('create/count', { users_id: user.id })
                    .then((response) => {
                        setCreateCount(response.data)
                    }).catch((error) => {
                        console.error(error);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    });
    const styles = StyleSheet.create({
        container: {
            height: ScreenHeight,
            width: '100%',
        },
        contain: {
            position: 'relative',
            top: 100,
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
        secondText: {
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 40,
            lineHeight: 49,
            textAlign: 'center',
            color: colors.blue,
        },
    });

    return (
        <View style={styles.container}>
            <Header name='Profil' logout={true} leftArrow={false} navigation={navigation} backValue={null} />
            <Information name={user?.name} email={user?.email} />
            <View style={{ position: 'relative', top: 0, display: 'flex', flexDirection: 'column' }}>
                <ScrollView style={{ height: '48%' }}>
                    <Button id={1} title='My listing' description={'Already have ' + createCount + ' listing'} onPress={() => { navigation.navigate('Listing'); }} style={undefined} />
                    <Button id={2} title='Settings' description='Account, FAQ, Contact' onPress={() => { navigation.navigate('Update'); }} style={undefined} />
                </ScrollView>
            </View>
            <Button1 title='Add a new listing' onPress={() => navigation.navigate('Create')} style={{ backgroundColor: color.blue, marginLeft: 'auto', marginRight: 'auto', color: '#ffffff' }} activeOpacity={undefined} icon={undefined} colorIcon={undefined} styleText={{ color: '#ffffff' }} />
            <Footer navigation={navigation} />

        </View>

    );


};
export default Profil;