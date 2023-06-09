
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Product = ({ id, name, images, price, description, navigation }) => {

    const styles = StyleSheet.create({
        container: {
            marginHorizontal: 8,
            marginVertical: 8
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
        title: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 19,
            color: '#606060'
        },
        price: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 14,
            lineHeight: 19,
            color: '#606060'
        },
    });

    return (
        <View style={styles.container} key={id}>
            <Pressable onPress={() => { navigation.navigate('Description', { id: id, images: images, title: name, price: price, description: description, navigation: navigation }) }}>
                <Image style={{ width: 157, height: 236, borderRadius: 12 }} source={{ uri: images?.[0]?.image || 'http://51.91.249.126:3010/images/categories/noProduct.png' }} />
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>$ {price.toFixed(2)}</Text>
            </Pressable >
        </View>
    );


};
export default Product;

