import React, {PureComponent} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';
import colors from '../utils/colors';

class AppHeader extends PureComponent {
  render() {
    const { isCartHasItem } = this.props;
    return (
      <View style={styles.appHeader}>
        <View>
          <Image
            source={require('../assets/images/menu.png')}
            style={{width: 30, height: 12}}
          />
        </View>
        <View>
          <View style={{position: 'relative'}}>
            <Image
              source={require('../assets/images/shopping-basket.png')}
              style={{width: 24, height: 24}}
            />
            {isCartHasItem ? <View style={styles.itemIsAvailable}/> : null}
          </View>
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
    width:8,
    height:8,
    backgroundColor: colors.mainColor,
    borderRadius: 100,
    position:"absolute",
    left: 18,
    bottom: 20
  }
});
