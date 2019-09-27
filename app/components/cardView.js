import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';

import {BoldText, RegularText} from './appText';
import colors from '../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardView = ({key, image, name, ratings, ingredients, onPress}) => (
  <TouchableOpacity key={key} style={styles.card} onPress={onPress}>
    <View>
      <Image source={image} style={styles.cardImage}/>
    </View>
    <View style={{padding: 20}}>
      <BoldText style={styles.cardTitle}>{name}</BoldText>
      <RegularText style={styles.ingredients}>{ingredients}</RegularText>
      <View style={{width: 70}}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={ratings}
          starSize={12}
          fullStarColor={colors.rating}
        />
      </View>
    </View>
  </TouchableOpacity>
);

export default CardView;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    elevation: 8,
    borderRadius: 5,
    marginBottom: 30,
  },
  cardImage: {
    height: 120,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    resizeMode: 'cover'
  },
  cardTitle: {
    color: '#4a4a4a',
    fontSize: 17,
  },
  ingredients: {
    marginBottom: 10
  }
})
