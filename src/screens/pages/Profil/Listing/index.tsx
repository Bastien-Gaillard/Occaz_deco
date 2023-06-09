import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Footer from '../../../../components/Footer';

import Header from '../../../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListElement from '../../../../components/ListElement';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Listing = ({ navigation }) => {
    let ScreenHeight = Dimensions.get('window').height;

    const [listing, setListing] = useState<any>([]);
    const [updateListing, setUpdateListing] = useState<any>()
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

                await instance.post('create/user', { id: parseUser.id })
                    .then((response) => {
                        setListing(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [updateListing]);

    const handleChange = () => {
        console.log('Change 2');
        setUpdateListing(new Date());
    }
    return (
        <View style={styles.container}>
            <Header name='My Listings' logout={false} leftArrow={false} navigation={undefined} backValue={null} />
            <View style={{
                position: 'absolute',
                top: 40,
                width: '100%',
            }}>
                {!!listing[0] ?
                    <ListElement favorites={listing} navigation={navigation} onChange={handleChange} favoriteIcon={false} />
                    : <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>You don't have create products</Text>
                }
            </View>

            <Footer navigation={navigation} />

        </View>
    );


};
export default Listing;