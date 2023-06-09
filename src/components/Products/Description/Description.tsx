
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Button from '../../Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ImageCarousel from '../../ImageCarousel';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});
const Description = () => {
    let ScreenHeight = Dimensions.get('window').height;
    const route: any = useRoute();

    const [register, setRegister] = useState(false);
    const [updateFavorite, setUpdateFavorite] = useState<any>();
    const [userId, setUserId] = useState<any>()
    const id = route?.params?.id;
    const title = route?.params?.title;
    let images = route?.params?.images;
    const price = route?.params?.price;
    const description = route?.params?.description;
    const navigation = route?.params?.navigation;
    const favorite = route?.params?.favorite;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            zIndex: 1
        },
        upperView: {
            position: 'absolute',
            top: ScreenHeight / 2,
            height: ScreenHeight / 2,
            backgroundColor: '#ffffff',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingTop: 20,
        },
        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: ScreenHeight / 1.8,
        },
        title: {
            position: 'absolute',
            left: 0,
            top: 40,
            fontFamily: 'Gelasio',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 24,
            lineHeight: 30,
            color: '#303030',
            marginLeft: 25

        },
        price: {
            position: 'absolute',
            left: 0,
            top: 70,
            fontFamily: 'Gelasio',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 30,
            lineHeight: 41,
            color: '#303030',
            marginLeft: 25
        },
        description: {
            fontFamily: 'Gelasio',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: 14,
            lineHeight: 19,
            color: '#606060',
            marginHorizontal: 50
        },
        button: {
            position: 'absolute',
            bottom: 10,
            display: 'flex',
            flexDirection: 'row'
        }
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user: any = await AsyncStorage.getItem('user')
                const parseUser = (JSON.parse(user));
                setUserId(parseUser.id);
                await instance.post('favorites/user/products-id', { id: parseUser.id })
                    .then((response) => {
                        for (const element of response.data) {
                            if (element.products.id == id) {
                                setRegister(true);
                                break;
                            }
                        };
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [updateFavorite]);

    const addFavorites = async () => {
        if (register) {
            await instance.delete('favorites/delete/favorite/' + userId + '/' + id)
                .catch((error) => {
                    console.error(error)
                });
        } else {
            await instance.post('favorites/create/favorite', { users_id: userId, products_id: id })
                .catch((error) => {
                    console.error(error)
                })

        }

        setRegister(!register)
        setUpdateFavorite(new Date());
    }
    return (
        <View style={styles.container}>
            <Button title='' onPress={() => { favorite ? navigation.navigate('Favorites') : navigation.navigate('Main') }} style={{ backgroundColor: '#FFFFFF', zIndex: 1, width: 40, height: 40, boxShadow: '0px 4px 40px rgba(138, 149, 158, 0.2)', borderRadius: 6, marginLeft: 16, marginTop: 16 }} styleText={null} activeOpacity={0.5} icon='chevron-left' colorIcon='#4F63AC' />
            <ImageCarousel images={images || ['http://51.91.249.126:3010/images/categories/noProduct.png']} />
            <View style={styles.upperView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>$ {price.toFixed(2)}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.button}>
                    <Button title='' onPress={() => { addFavorites() }} style={{ backgroundColor: '#F0F0F0', zIndex: 1, width: 60, height: 60, boxShadow: '0px 4px 40px rgba(138, 149, 158, 0.2)', borderRadius: 6, marginRight: 15 }} styleText={null} activeOpacity={0.5} icon='bookmark' colorIcon={register ? '#4F63AC' : '#FFFFFF'} />
                    <Button title='Contact seller' onPress={() => { navigation.navigate('Main') }} style={{ textAlign: 'center', backgroundColor: '#4F63AC', width: 250, color: '#ffffff', boxShadow: '0px 10px 20px rgba(48, 48, 48, 0.25)', borderRadius: 8 }} styleText={{ color: '#ffffff' }} activeOpacity={0.5} icon={null} colorIcon='#4F63AC' />
                </View>
            </View>
        </View>
    );


};
export default Description;

