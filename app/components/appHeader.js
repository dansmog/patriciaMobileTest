import React, {PureComponent} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';
import colors from '../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';



class AppHeader extends PureComponent {
  render() {
    const {isCartHasItem, leftIcon, rightPressFunc} = this.props;
    return (
      <View style={styles.appHeader}>
        <View>
          {leftIcon ? (
            <Image
              source={require('../assets/images/menu.png')}
              style={{width: 30, height: 12}}
            />
          ) : null}
        </View>
        <View>
          <TouchableOpacity style={{position: 'relative'}} onPress={rightPressFunc}>
            <Image
              source={require('../assets/images/shopping-basket.png')}
              style={{width: 24, height: 24}}
            />
            {isCartHasItem ? <View style={styles.itemIsAvailable} /> : null}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AppHeader;

const styles = StyleSheet.create({
  appHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  itemIsAvailable: {
    width: 8,
    height: 8,
    backgroundColor: colors.mainColor,
    borderRadius: 100,
    position: 'absolute',
    left: 18,
    bottom: 20,
  },
});
