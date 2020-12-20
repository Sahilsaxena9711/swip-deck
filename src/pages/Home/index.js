import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions } from 'react-native'
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Card } from '../../components';
import { DATA } from '../../constants';

export default class HomeScreen extends Component {

    state = {
        activeSlide: 0
    }

    renderItem = ({ item, index }) => {
        return (
            <Card key={index} item={item} index={index} />
        );
    }

    pagination = () => {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={DATA.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 16,
                    marginHorizontal: 0,
                    backgroundColor: '#000'
                }}
                inactiveDotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 16,
                    marginHorizontal: 0,
                    borderColor: '#000',
                    backgroundColor: 'rgba(255,255,255, 0.1)',
                    borderWidth: 1.5
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
        );
    }


    render() {
        return (
            <SafeAreaView style={[styles.container, {
                backgroundColor: DATA[this.state.activeSlide].backgroundColor
            }]}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 20
                }}>
                    <View style={{
                        backgroundColor: "#000",
                        borderRadius: 12,
                        paddingHorizontal: 8,
                        paddingVertical: 12
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#fff"
                        }}>ÇÃĮ</Text>
                    </View>
                    <Icon name={'qrcode-scan'} size={20} />
                </View>
                <View style={styles.subContainer}>
                    <Carousel
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                        ref={(c) => { this._carousel = c; }}
                        data={DATA}
                        renderItem={this.renderItem}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width * 0.82}
                    />
                    {this.pagination()}
                </View>
            </SafeAreaView>
        )
    }
}
