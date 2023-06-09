import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListElement from '../../../components/ListElement';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Favorites = ({ navigation }) => {
    let ScreenHeight = Dimensions.get('window').height;

    const [favorites, setFavorites] = useState<any>([]);
    const [updateFavorite, setUpdateFavorite] = useState<any>()
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fefefe',
            height: ScreenHeight,
            width: '100%',
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user: any = await AsyncStorage.getItem('user')
                const parseUser = (JSON.parse(user));
                await instance.post('favorites/user', { id: parseUser.id })
                    .then((response) => {
                        setFavorites(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [updateFavorite]);

    const handleChange = () => {
        console.log('Change 2');
        setUpdateFavorite(new Date())
    }
    return (
        <View style={styles.container}>
            <Header name='Favorites' logout={false} leftArrow={false} navigation={undefined} backValue={null} />
            <View style={{
                position: 'absolute',
                top: 40,
                left: 0,
                width: '100%'
            }}>
                {!!favorites[0] ?
                    <ListElement favorites={favorites} navigation={navigation} onChange={handleChange} favoriteIcon={true} />
                    : <Text>You don't have favorites</Text>
                }
            </View>

            <Footer navigation={navigation} />

        </View>
    );


};
export default Favorites;