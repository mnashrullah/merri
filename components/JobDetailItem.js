import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    View
} from 'react-native';

const JobDetailItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.job}>
            <TouchableCmp style={styles.touchableCmp} onPress={props.onViewDetail} useForeGround>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: props.image}} />
                </View>
                <View style={styles.description}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}
const styles = StyleSheet.create({
    job:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10, 
        padding: 10
    },
    touchableCmp: {
        flexDirection:'row',
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10
    },
    description: {
        width: '70%',
        padding: 10
    },
    image: {
        height: '90%',
        width: '90%', 
    },
    imageContainer: {
        width: '30%',
        height: 100,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        overflow: 'hidden',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 14,
        color: '#888'
    },
    location:{
        fontSize: 14,
        color: '#888'
    }
})
export default JobDetailItem;
