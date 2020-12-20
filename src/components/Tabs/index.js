import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

export default function Tabs(props) {
    return (
        <View style={styles.bottomTabContainer}>
            {props.ROUTES.map((route, routeKey) => <View key={routeKey} style={styles.tab}>
                <Icon name={route.icons} size={26} />
                <Text style={styles.bottomTabText}>{route.title}</Text>
            </View>)}
        </View>
    )
}
