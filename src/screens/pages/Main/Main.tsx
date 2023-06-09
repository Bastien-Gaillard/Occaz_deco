import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Categories from './Categories';
import Footer from '../../../components/Footer';

import Products from '../../../components/Products/Products';
const Home = ({ navigation }) => {
    let ScreenHeight = Dimensions.get('window').height;

    const [id, setId] = useState(0);
    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchText, setSearchText] = useState('')
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fefefe',
            height: ScreenHeight,
            width: '100%',

        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 65
        },
        title: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 20,
            textAlign: 'center',
            color: '#303030',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingRight: 44
        },
        products: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap'
        },
        input: {
            flex: 1,
            padding: 0,
            marginLeft: 10,
            fontSize: 16,
        },
        searchIcon: {
            marginRight: 10,
        },
        searchBar: {
            marginLeft: 8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#4F63AC',
            borderRadius: 5,
            width: 120
        }
    });

    const handleCategoryPress = (categorie) => {
        // Perform actions based on the selected category
        setId(categorie.id);
        setFilter(categorie.filter);
    };

    const handleSearchIconPress = () => {
        setSearch(!search);
        setSearchText('');
    };

    return (
        <View style={styles.container} id='main-1'>
            <View style={styles.titleContainer} id='main-2'>
                <View id='main-3'>
                    {search ? (
                        <View style={styles.searchBar} id='main-4'>
                            <Icon name="close" size={20} color="#4F63AC" style={styles.searchIcon} onPress={handleSearchIconPress} />
                            <TextInput
                                style={styles.input}
                                value={searchText}
                                onChangeText={setSearchText}
                                placeholder="Search"
                                autoFocus={true}
                            />
                        </View>
                    ) : (
                        <Icon name="search1" size={20} style={{ marginLeft: 8 }} color="#4F63AC" onPress={handleSearchIconPress} />
                    )}
                </View>
                <Text style={styles.title}>Find All You Need</Text>
            </View>
            <Categories onCategoryPress={handleCategoryPress} />
            <Products filter={filter} categoryId={id} searchValue={searchText} navigation={navigation} />
            <Footer navigation={navigation} />
        </View>
    );


};
export default Home;