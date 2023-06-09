
import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import Product from './Product';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Categories = ({ filter, categoryId, searchValue, navigation }) => {
    let ScreenHeight = Dimensions.get('window').height;

    const [matchingSearch, setMatchingSearch] = useState(false);
    const [products, setProducts] = useState<any>([])
    const styles = StyleSheet.create({
        container: {
            marginVertical: 36,
            marginHorizontal: 20,
            backgroundColor: '#fefefe',
            paddingLeft: 8,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            paddingBottom: 50,
        },
        noProduct: {
            fontWeight: '900',
            fontSize: 22
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await instance.get('products/products/' + searchValue)
                    .then((response) => {
                        setProducts(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    });

    return (
        <ScrollView id='products-1'>
            {!filter ?
                <View style={styles.container} id='products-2'>
                    {!!products ? (
                        products.map((product) =>
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                images={product.images_product}
                                price={product.price}
                                description={product.description}
                                navigation={navigation}
                            />
                        )
                    ) : (
                        <Text>Loading products</Text>
                    )}
                </View>
                :
                <View style={styles.container}>
                    {products.filter((product) => categoryId == product.categories_id).map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            images={product.images_product}
                            price={product.price}
                            description={product.description}
                            navigation={navigation}
                        />
                    ))}
                    {products.filter((product) => categoryId == product.categories_id).length === 0 && (
                        <Text style={styles.noProduct}>No products found</Text>
                    )}
                </View>
            }
        </ScrollView>
    );


};
export default Categories;

