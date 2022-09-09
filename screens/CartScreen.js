
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/COLORS';
import foods from '../components/Foods';
import { PrimaryButton } from '../components/Button1';
import { Picker } from '@react-native-picker/picker';

const CartScreen = ({ navigation }) => {
  const Droper = () => {
    const [selectedValue, setSelectedValue] = React.useState('1kg');
    useState('1kg');
    return (
      <View style={style.droper}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item  label="1kg" value="1kg"/>
          <Picker.Item label="2kg" value="2kg" />
          <Picker.Item label="3kg" value="3kg" />
        </Picker>
      </View>
    )
  }

  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {item.ingredients}
          </Text>
        </View>
        {Droper()}
        
      </View>

    );
  };
  
  
  

return (
  <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
    <View style={style.header}>
      <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
    </View>
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
      data={foods}
      renderItem={({ item }) => <CartCard item={item} />}
      ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
      ListFooterComponent={() => (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Total Price
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}></Text>
          </View>
          <View style={{ marginHorizontal: 30 }}>
            <PrimaryButton title="CHECKOUT" />
          </View>
        </View>
      )}
    />
  </SafeAreaView>
);
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  droper: {
    height: 50,
    width: 100,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
  
  }
});

export default CartScreen;