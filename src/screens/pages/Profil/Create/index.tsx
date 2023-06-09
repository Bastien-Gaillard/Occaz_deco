import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../../../components/Header';
import InputText from '../../../../components/Input';
import axios from 'axios';
import Button from '../../../../components/Button';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});
const Create = ({ navigation }) => {

    let ScreenHeight = Dimensions.get('window').height;
    const [categories, setCategories] = useState<any>([]);
    const [name, setName] = useState<any>('');
    const [categorie, setCategorie] = useState<any>()
    const [price, setPrice] = useState<any>()
    const [description, setDescription] = useState<any>('')
    const [errorMessage, setErrorMessage] = useState('Error');
    const [displayMessage, setDisplayMessage] = useState(false);
    const [update, setUpdate] = useState<any>()
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#ebebeb',
            height: ScreenHeight,
            width: '100%',
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await instance.get('categories/categories')
                    .then((response) => {
                        setCategories(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [update]);

    const handleTitleChange = (value) => {
        setName(value);
    }
    const handlePriceChange = (value) => {
        setPrice(parseInt(value));
    }
    const handleCategoryChange = (value) => {
        setCategorie(value)
    }
    const handleDescriptionChange = (value) => {
        setDescription(value)
    }

    const onSubmit = async () => {
        setDisplayMessage(false);

        if (name == '') {
            setErrorMessage('Field name empty');
            setDisplayMessage(true);
        } else if (categorie == 'NaN' || categorie == null) {
            setErrorMessage('Field categorie empty');
            setDisplayMessage(true);
        } else if (price == null) {
            setErrorMessage('Field price empty');
            setDisplayMessage(true);
        } else if (isNaN(price)) {
            setErrorMessage('Price need to be a number');
            setDisplayMessage(true);
        } else {
            await instance.post('products/create/product',
                {
                    name: name,
                    price: price,
                    description: description,
                    image: 'https://grandrapidschair.com/wp-content/uploads/2016/01/250_Brady_Graphite_Honey-1.jpg',
                    categories_id: categorie
                }).then(async (response) => {
                    const user: any = await AsyncStorage.getItem('user')
                    const parseUser = (JSON.parse(user));
                    await instance.post('create/create/listing',
                        {
                            users_id: parseUser.id,
                            products_id: response.data.id,
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    navigation.navigate('Listing');
                }).catch((error) => {
                    console.log(error);
                });

        }
    }
    return (
        <View style={styles.container}>
            {!!categories &&
                <View>
                    <Header name='Create a new listing' logout={false} leftArrow={true} navigation={navigation} backValue={'Profil'} />
                    <ScrollView style={{ paddingTop: 60, marginRight: 'auto', marginLeft: 'auto' }} showsVerticalScrollIndicator={false}>
                        <InputText placeholder='Listing Title' name='Title' secureTextEntry={false} style={{ height: 60 }} value={undefined} onChange={handleTitleChange} options={undefined} icon={undefined} multiline={undefined} numberOfLines={undefined} />
                        <InputText placeholder='Select the category' name='Category' options={categories} value={undefined} onChange={handleCategoryChange} icon='chevron-down' secureTextEntry={undefined} style={undefined} multiline={undefined} numberOfLines={undefined} />
                        <InputText placeholder='Enter price in USD' name='Price' secureTextEntry={false} style={undefined} value={undefined} onChange={handlePriceChange} options={undefined} icon={undefined} multiline={undefined} numberOfLines={undefined} />
                        <InputText placeholder='Tell us more...' name='Description' secureTextEntry={false} style={undefined} value={undefined} onChange={handleDescriptionChange} options={undefined} icon={undefined} multiline={true} numberOfLines={6} />
                        {displayMessage && <Text style={{ color: 'red', fontWeight: '700', textAlign: 'center' }}>{errorMessage}</Text>}
                        <Button title={"Submit"} onPress={onSubmit} style={{ marginLeft: 'auto', marginRight: 'auto' }} styleText={{ color: '#ffffff' }} activeOpacity={undefined} icon={undefined} colorIcon={undefined} />
                    </ScrollView >
                </View>
            }
        </View>
    );


};
export default Create;