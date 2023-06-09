
import { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});
const Categories = ({ onCategoryPress }) => {
    let ScreenHeight = Dimensions.get('window').height;
    const [actif, setActif] = useState(0);
    const [categories, setCategories] = useState<any>([]);

    const popular = { id: 0, name: 'Popular', image: "http://51.91.249.126:3010/images/categories/star.png" };

    const handleCategoryPress = (categorie) => {
        setActif(categorie);
        if (categorie == 0) {
            onCategoryPress({ id: categorie, filter: false });
        } else {
            onCategoryPress({ id: categorie, filter: true });
        }
    };

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fefefe',
            paddingLeft: 8
        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 54,
        },
        categorieContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginHorizontal: 12
        },
        categorieDiv: {
            width: 44,
            height: 44,
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 19,
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categories = await instance.get('categories/categories')
                    .then((response) => {
                        const array = response.data;
                        array.push(popular);
                        const sortedData = array.sort((a, b) => a.id - b.id);
                        setCategories(sortedData);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);




    return (
        <View style={styles.container} id='categories-1'>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} id='categories-2'>
                <View style={styles.titleContainer} id='categories-3'>
                    {!!categories && categories.map((categorie) => {
                        return (
                            <TouchableOpacity onPress={() => handleCategoryPress(categorie.id)} key={categorie.id.toString()}>
                                <View style={styles.categorieContainer} >
                                    <View style={[styles.categorieDiv, categorie.id == actif ? { backgroundColor: '#303030' } : { backgroundColor: '#F5F5F5' }]} >
                                        <Image resizeMode='contain' style={{ width: 20, height: 20 }} source={{ uri: categorie.image }} />
                                    </View>
                                    <Text style={[styles.text, categorie.id == actif ? { color: '#4F63AC' } : { color: '#999999' }]}>{categorie.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }

                    )}
                </View>
            </ScrollView>
        </View>
    );


};
export default Categories;

