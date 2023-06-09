
import { View } from 'react-native';

import { styles } from './style';
import Element from './Element';

const ListElement = ({ favorites, navigation, onChange, favoriteIcon }) => {

    const handleDeleteChange = (value) => {
        console.log('Change 1')
        onChange(value);
    }

    return (
        <View style={styles.container} >
            {favorites.map(favorite => {
                return (
                    <Element id={favorite.products.id} title={favorite.products.name} images={favorite.products.images_product} price={favorite.products.price} description={favorite.products.description} navigation={navigation} favorite={favoriteIcon} onDelete={handleDeleteChange} />
                )
            })}

        </View>
    );


};
export default ListElement;

