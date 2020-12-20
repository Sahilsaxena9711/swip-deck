
import React from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

export default class Card extends React.PureComponent {
    animatedValue = new Animated.Value(0);
    value = 0;
    frontInterpolate = this.animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    });
    backInterpolate = this.animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    });
    componentDidMount() {
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
    }

    componentWillUnmount() {
        this.animatedValue.removeListener();
    }

    flipCard = () => {
        if (this.value >= 90) {
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 900,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(this.animatedValue, {
                toValue: 180,
                duration: 900,
                useNativeDriver: true
            }).start();
        }
    }

    renderBackCard = (backAnimatedStyle) => <Animated.View style={[styles.slide, styles.backSlide, backAnimatedStyle]}>
        <TouchableOpacity activeOpacity={1} onPress={this.flipCard} style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: '100%',
            flex: 1
        }}>
            <View
                style={{ width: '100%' }}
            >
                <Text style={[styles.title]}>Лорем ипсумдор {'\n'}ситпсум</Text>
                <Image source={{ uri: 'https://pngimg.com/uploads/qr_code/qr_code_PNG24.png' }} style={{
                    width: '100%',
                    height: '100%'
                }} resizeMode={'cover'} />
            </View>
        </TouchableOpacity>
    </Animated.View>;

    renderFrontCard = (frontAnimatedStyle) => (
        <Animated.View style={[styles.slide, frontAnimatedStyle]}>
            <TouchableOpacity activeOpacity={1} onPress={this.flipCard} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: this.props.item.backgroundColor,
                borderBottomWidth: 2,
                width: '100%'
            }}>
                <View style={{
                    width: '65%',
                }}>
                    <Text style={styles.title}>Лорем ипсумдор ситпсум</Text>
                    <Text style={styles.subText}>
                        сит{'\n'}цлита{'\n'}петентиумфа
              </Text>
                    <Text style={styles.subText}>
                        мунере ипсумдор{'\n'}24.08.1991
              </Text>
                    <Text style={styles.subText}>
                        περτιναcια: сит
              </Text>
                    <Text style={styles.subText}>
                        ελειφενδ περτιναcια
              </Text>
                </View>
                <View style={{
                    width: '35%',
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                }}>
                    <Image
                        style={{
                            width: "100%",
                            height: 130,
                            borderColor: this.props.item.backgroundColor,
                            borderWidth: 2,
                            marginBottom: 20
                        }}
                        source={{ uri: 'https://previews.123rf.com/images/marctran/marctran1708/marctran170800509/83588077-passport-photo-of-asian-female-natural-look-healthy-skin.jpg' }}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={this.flipCard} style={{
                width: '100%',
                paddingTop: 12,
                flexDirection: "column",
                flex: 1,
                justifyContent: "space-between"
            }}>
                <Text style={styles.subText}>
                    цлита:{'\n'}пнтетенти
            </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'space-between'
                }}>
                    <Text style={styles.mainText}>
                        vιvενδο
              </Text>
                    <Icon name={'dots-horizontal-circle-outline'} size={24} />
                </View>
            </TouchableOpacity>
        </Animated.View>
    )

    render() {
        const frontAnimatedStyle = {
            transform: [{
                rotateY: this.frontInterpolate
            }]
        };
        const backAnimatedStyle = {
            transform: [{
                rotateY: this.backInterpolate
            }]
        };
        return (
            <View>
                {this.renderFrontCard(frontAnimatedStyle)}
                {this.renderBackCard(backAnimatedStyle)}
            </View>
        )
    }
}