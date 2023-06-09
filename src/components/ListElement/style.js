import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
    },
    element: {
        width: '90%',
        height: 100,
        marginVertical: 12,
        marginLeft: '10%',
    },
    title: {
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        color: '#606060'
    },
    price: {
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22,
        color: '#303030',
        marginTop: 8
    }
})