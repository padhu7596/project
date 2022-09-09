import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {
    FlatList,
    ScrollView,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/COLORS';
import Categories from '../components/Categories';
import Foods from '../components/Foods';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 40;


const HomeScreen = ({ navigation }) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const ListCategories = () => {

        return (
            <View >
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <View>
                        <Text style={style.text}>Categories</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}> See All</Text>
                    </View>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={style.categoriesListContainer}>
                    {Categories.map((category, index) => (
                        <TouchableOpacity
                            underlayColor={COLORS.white}
                            activeOpacity={0.8}
                            onPress={() => setSelectedCategoryIndex(index)}>
                            <View style={style.card1}>
                                <View style={{ alignItems: 'center', top: -10 }}>
                                    <Image source={category.image} style={{ height: 50, width: 60 }} />
                                    <Text style={{
                                        fontSize: 12, marginTop: 10, fontWeight: 'bold', color: selectedCategoryIndex == index
                                            ? COLORS.primary
                                            : COLORS.dark,
                                    }}>{category.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    };
    const Card = ({ food }) => {
        const [count, setCount] = useState(0);

        const Increment = () => {
            setCount(count + 1);
        }
        const Decrement = () => {
            if (count > 0) {
                setCount(count - 1);
            }
        }
        return (

            <View style={style.card}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableHighlight
                        underlayColor={COLORS.white}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('DetailsScreen', food)}>
                        <Image source={food.image} style={{ height: 120, width: 120 }} />
                    </TouchableHighlight>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
                    <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
                        {food.ingredients}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                        RS {food.price}
                    </Text>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center'  }} >
                        <TouchableOpacity style={{padding:5,backgroundColor:'green',borderRadius:5,marginLeft:5}} onPress={Decrement}>
                                <Icon name="remove" size={20} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft:5 }}>{count}</Text>
                            <TouchableOpacity style={{padding:5,backgroundColor:'green',borderRadius:5,marginLeft:5}} onPress={Increment}>
                                <Icon name="add" size={20} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
                );
    };
                return (
                <ScrollView>

                    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                        <View style={style.header}>
                            <View style={style.inputContainer}>
                                <Icon name="search" size={35} />
                                <TextInput
                                    style={{ flex: 1, fontSize: 18 }}
                                    placeholder="Search by the item name"
                                />
                            </View>

                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginHorizontal: 2, backgroundColor: '#adff2f', borderRadius: 15, marginTop: 10 }}>
                            <Image source={require('../assets/onam1.png')} style={{ width: 100, height: 70, resizeMode: 'contain', marginLeft: 30 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={style.badge}>
                                    Enjoy your
                                </Text>
                                <Text style={style.badge}>
                                    festival essentials in this
                                </Text >
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 40, color: '#006400' }}>O N A M</Text>
                            </View>
                        </View>
                        <View>
                            <ListCategories />
                        </View>
                        <ScrollView>
                            <View>
                                <Text style={style.text}> Deal of day </Text>
                                <FlatList style={{ marginTop: 10 }}
                                    horizontal
                                    data={Foods}
                                    renderItem={({ item }) => <Card food={item} />}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                            <View>
                                <Text style={style.text}> fresh vegetables </Text>
                                <FlatList style={{ marginTop: 10 }}
                                    horizontal
                                    data={Foods}
                                    renderItem={({ item }) => <Card food={item} />}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                            <View>
                                <Text style={style.text}>End of sale </Text>
                                <FlatList style={{ marginTop: 10 }}
                                    horizontal
                                    data={Foods}
                                    renderItem={({ item }) => <Card food={item} />}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </ScrollView >
                );
};

                const style = StyleSheet.create({
                    header: {
                    marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
    },
                inputContainer: {
                    flex: 1,
                height: 40,
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: COLORS.light,
                alignItems: 'center',
                paddingHorizontal: 20,
    },
                sortBtn: {
                    width: 50,
                height: 50,
                marginLeft: 10,
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
    },
                categoriesListContainer: {
                    paddingVertical: 10,
                alignItems: 'center',

    },
                categoryBtn: {
                    height: 120,
                width: cardWidth,
                marginHorizontal: 10,
                marginBottom: 20,
                marginTop: 50,
                borderRadius: 15,
                elevation: 13,
                backgroundColor: COLORS.white,
    },
                categoryBtnImgCon: {
                    height: 35,
                width: 35,
                backgroundColor: COLORS.white,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
    },
                card: {
                    height: 230,
                width: cardWidth,
                marginHorizontal: 10,
                marginBottom: 20,
                marginTop: 5,
                borderRadius: 15,
                elevation: 13,
                backgroundColor: COLORS.white,
    },
                card1: {
                    width: 80,
                height: 100,
                marginHorizontal: 10,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 15,
                elevation: 20,
                backgroundColor: COLORS.white,
    },
                addToCartBtn: {
                    height: 30,
                width: 30,
                backgroundColor: COLORS.primary,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
    },
                text: {
                    fontSize: 25,
                fontWeight: 'bold',
                color: 'black',
    },
                badge: {
                    fontSize: 13,
                marginRight: 90,
                fontWeight: 'bold',
    }
});

                export default HomeScreen;