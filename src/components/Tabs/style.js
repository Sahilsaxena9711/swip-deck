import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottomTabContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    tab: {
        alignItems: 'center',
        marginHorizontal: 22
    },
    bottomTabText: {
        fontSize: 10,
        fontWeight: '500'
    }
});

export default styles;