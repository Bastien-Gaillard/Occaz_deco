
import { Alert, Image, Pressable, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});
const Element = ({ id, title, images, price, description, navigation, favorite, onDelete }) => {
    const deleteFavorite = async () => {
        const user: any = await AsyncStorage.getItem('user')
        const parseUser = (JSON.parse(user));
        const test = await instance.delete('favorites/delete/favorite/' + parseUser.id + '/' + id);
        onDelete(id)
    }
    const deleteCreate = async () => {
        const user: any = await AsyncStorage.getItem('user')
        const parseUser = (JSON.parse(user));

        await instance.delete('create/delete/create/' + parseUser.id + '/' + id)
            .catch((error) => {
                console.log(error);
            });
        await instance.delete('products/delete/product/' + id)
            .catch((error) => {
                console.log(error);
            });
        Alert.alert('Product delete successful')
        onDelete(id);
    }

    return (
        <View style={styles.element} >
            <Pressable style={{ display: 'flex', flexDirection: 'row', width: '100%' }} onPress={() => { navigation.navigate('Description', { id: id, images: images, title: title, price: price, description: description, navigation: navigation, favorite: true }) }}>
                <Image style={{ width: 100, height: 100, borderRadius: 12 }} source={{ uri: images[0]?.image || 'http://51.91.249.126:3010/images/categories/noProduct.png' }} />
                <View style={{ marginLeft: 12 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>$ {price.toFixed(2)}</Text>
                </View>
                {favorite ?
                    <Icon style={{ position: 'absolute', right: 10 }} name="close-circle-outline" size={28} color="#4F63AC" onPress={() => { deleteFavorite() }} />
                    :
                    <Icon style={{ position: 'absolute', right: 10 }} name="trash-can" size={28} color="#4F63AC" onPress={() => { deleteCreate() }} />
                }
            </Pressable >
            <View style={{ borderColor: '#F0F0F0', borderStyle: 'solid', borderWidth: 0.4, width: ' 90%', marginTop: 12 }}></View>
        </View>
    );


};
export default Element;

