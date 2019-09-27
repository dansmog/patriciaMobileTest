import React, {PureComponent} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import {Icon} from 'native-base';

import {BoldText, RegularText} from '../../components/appText';
import ThemeContainer from '../../containers/ThemeContainer';
import AppHeader from '../../components/appHeader';
import colors from '../../utils/colors';
import CardView from '../../components/cardView';
import {TouchableOpacity} from 'react-native-gesture-handler';

class HomeScreen extends PureComponent {
  state = {
    user: 'John',
    meals: [
      {
        id: 123123,
        image: '',
        name: 'Cheese Burger',
        ingredients: 'Beef, Veggies & Chilli',
        ratings: 5,
        image: require('../../assets/images/food/one.jpg'),
      },
      {
        id: 123127,
        image: '',
        name: 'Jollof Rice',
        ingredients: 'Grilled Chicken, Veggies & Sauce',
        ratings: 5,
        image: require('../../assets/images/food/two.jpg'),
      },
    ],
    mealsByImages: [
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605901/johnHavemercy/three.jpg',
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605900/johnHavemercy/one.jpg',
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605902/johnHavemercy/four.jpg',
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1569605900/johnHavemercy/two.jpg',
    ],
  };

  renderCard = ({item}) => (
    <CardView
      image={item.image}
      name={item.name}
      ratings={item.ratings}
      ingredients={item.ingredients}
      onPress={() => this.props.navigation.navigate('Checkout')}
    />
  );

  renderFoodImage = () =>
    this.state.mealsByImages.map(image => {
      return <Image key={image} source={{uri: image}} style={styles.foodImage} />;
    });

  render() {
    return (
      <>
        <AppHeader isCartHasItem={true} leftIcon={false} rightPressFunc={() => this.props.navigation.navigate('Orders')}/>
        <ThemeContainer>
          <ScrollView style={styles.container}>
            <View>
              <BoldText style={styles.headerText}>
                Hello, {this.state.user}
              </BoldText>
              <RegularText>Select your meal for the day</RegularText>
            </View>
            <View style={styles.marginTopXS}>
              <View style={styles.search}>
                <Icon
                  name="search"
                  type="Feather"
                  style={{color: colors.borderBottom, fontSize: 24}}
                />
                <TextInput
                  keyboardType="default"
                  onChange={text => this.setState({searchQuery: text})}
                  placeholder="search for meals, dishes"
                  style={styles.searchForm}
                />
              </View>
            </View>
            <View style={styles.marginTopXS}>
              <FlatList
                data={this.state.meals}
                renderItem={this.renderCard}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.recommendedWrapper}>
              <View style={styles.recommendedText}>
                <BoldText style={styles.recommendedTextTitle}>
                  Recommended
                </BoldText>
                <TouchableOpacity>
                  <RegularText>View All</RegularText>
                </TouchableOpacity>
              </View>
              <View style={styles.recommendedFood}>{this.renderFoodImage()}</View>
            </View>
          </ScrollView>
        </ThemeContainer>
      </>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    width: '100%',
    backgroundColor: colors.lightAsh,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 30,
    color: '#4a4a4a',
  },

  searchForm: {
    height: 50,
    fontFamily: 'brandon-grotesque-light',
    fontSize: 17,
    marginLeft: 10,
  },
  marginBottomXs: {
    marginBottom: 30,
  },
  marginTopXS: {
    marginTop: 30,
  },
  recommendedWrapper: {
    paddingVertical: 20,
  },
  recommendedFood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendedText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendedTextTitle: {
    color: '#4a4a4a',
    fontSize: 17,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginTop: 20
  },
});
