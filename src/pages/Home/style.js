import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        paddingVertical: Dimensions.get('window').height * 0.099
    },
    backSlide: {
        position: 'absolute',
        top: 0
    },
    slide: {
        backgroundColor: "rgba(255,255,255, 0.5)",
        backfaceVisibility: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
        elevation: 6,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 28,
        height: Dimensions.get('window').height * 0.5
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12
    },
    subText: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 12
    },
});

export default styles;