import { StyleSheet } from "react-native";
import colors from '../../../../../../utils/color';


export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 60,
        backgroundColor: '#ffffff',
        marginVertical: 8
    },
    input: {
        position: 'relative',
        height: 40,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 19,
        display: 'flex',
        alignItems: 'center',
        color: '#4F63AC',
        marginLeft: 16,
    },
    name: {
        marginLeft: 16,
        marginTop: 8,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        color: '#808080',
    }

})