import React, {PureComponent} from 'react';
import {View, ScrollView, FlatList, Image, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

import {BoldText, RegularText} from '../../components/appText';
import ThemeContainer from '../../containers/ThemeContainer';
import AppButton from '../../components/appButton';

const ListItem = ({image, name, ingredient, price}) => (
  <View style={[styles.rowLify, styles.listItemCard]}>
    <View style={[styles.rowLify]}>
      <Image
        source={{uri: image}}
        style={{width: 50, height: 50, borderRadius: 10, resizeMode: 'cover'}}
      />
      <View style={{marginLeft: 15}}>
        <BoldText>{name}</BoldText>
        <RegularText style={{fontSize: 12}}>{ingredient}</RegularText>
      </View>
    </View>
    <View style={[styles.rowLify]}>
      <RegularText style={styles.price}>NGN {price}</RegularText>
      <View style={styles.deleteIcon}>
        <Icon
          name="trash-can-outline"
          type="MaterialCommunityIcons"
          style={{fontSize: 20}}
        />
      </View>
    </View>
  </View>
);

class OrderScreen extends PureComponent {
  state = {
    data: [
      {
        id: 123127,
        image: '',
        name: 'Cheese Burger',
        ingredients: 'Beef, Veggies & Chilli',
        price: '2,000',
        image:
          'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605901/johnHavemercy/three.jpg',
      },
      {
        id: 123227,
        image: '',
        name: 'Large Pizza',
        ingredients: 'Extra CHeese & Toppings',
        price: '2,070',
        image:
          'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605901/johnHavemercy/four.jpg',
      },
      {
        id: 123227,
        image: '',
        name: 'Grilled Turkey',
        ingredients: 'Sauce and Pepper',
        price: '3,500',
        image:
          'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605901/johnHavemercy/one.jpg',
      },
      {
        id: 123227,
        image: '',
        name: 'Peppersoup',
        ingredients: 'Beef & Mutton',
        price: '4,000',
        image:
          'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605901/johnHavemercy/two.jpg',
      },
    ],
    total: "20,000"
  };

  renderList = ({item}) => (
    <ListItem
      name={item.name}
      image={item.image}
      ingredient={item.ingredients}
      price={item.price}
    />
  );

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ThemeContainer>
          <View style={styles.marginTopSM}>
            <BoldText style={styles.title}>My Orders</BoldText>
            <RegularText style={styles.subTitle}>Welcome to your cart, preview items below</RegularText>
          </View>
          <View style={styles.marginTopXS}>
            <FlatList
              data={this.state.data}
              renderItem={this.renderList}
              keyExtractor={item => item.id}
            />
          </View>
          <View>
            <View style={[styles.rowLify, styles.totalCon]}>
              <BoldText>Total: </BoldText>
              <BoldText style={styles.totalPrice}>NGN {this.state.total}</BoldText>
            </View>
            <AppButton 
              title="CHECKOUT"
            />
          </View>
        </ThemeContainer>
      </ScrollView>
    );
  }
}

export default OrderScreen;

const styles = StyleSheet.create({
  deleteIcon: {
    borderRadius: 100,
    width: 30,
    height: 30,
    backgroundColor: '#F9E0D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30
  },
  rowLify: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemCard: {
    justifyContent: 'space-between',
    marginBottom: 30
  },
  marginTopSM: {
    marginTop: 70
  },
  marginTopXS: {
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    color: '#4a4a4a'
  },
  subTitle: {
    fontSize: 17,
  },
  price: {
    fontSize: 14,
  },
  totalCon: {
    paddingVertical: 50,
    justifyContent: 'space-between'
  },
  totalPrice: {
    fontSize: 30,
    color: '#4a4a4a'
  }
});
