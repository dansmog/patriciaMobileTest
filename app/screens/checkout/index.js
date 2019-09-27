import React, {PureComponent} from 'react';
import {ScrollView, View, StyleSheet, Image} from 'react-native';
import {BoldText, RegularText} from '../../components/appText';
import ThemeContainer from '../../containers/ThemeContainer';
import AppHeader from '../../components/appHeader';
import AppButton from '../../components/appButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

class CheckoutScreen extends PureComponent {
  state = {
    sizes: ['S', 'M', 'L'],
    selectedSize: 'M',
  };

  renderSize = () => {
    const selectedSize = this.state.selectedSize;
    return this.state.sizes.map(size => {
      if (selectedSize === size) {
        return (
          <TouchableOpacity
            key={size}
            style={styles.selectedSizeStyle}
            onPress={() => this.setState({selectedSize: size})}>
            <RegularText>{size}</RegularText>
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity
            key={size}
            style={styles.size}
            onPress={() => this.setState({selectedSize: size})}>
            <RegularText>{size}</RegularText>
          </TouchableOpacity>
        );
      }
    });
  };

  render() {
    return (
      <>
        <AppHeader isCartHasItem={true} />
        <ThemeContainer>
          <ScrollView style={styles.container}>
            <View style={styles.checkoutHeader}>
              <View style={styles.halfSize}>
                <BoldText isHeader={true} style={styles.productName}>
                  Cheese Burger
                </BoldText>
              </View>
              <View style={{...styles.halfSize, alignItems: 'flex-end'}}>
                <RegularText style={styles.textAlign}>NGN</RegularText>
                <BoldText style={styles.price} isHeader={true}>
                  2000
                </BoldText>
              </View>
            </View>
            <View style={styles.productDetails}>
              <View>
                <Image
                  source={require('../../assets/images/burger.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View style={styles.center}>
                <RegularText style={{textAlign: 'center', fontSize: 17}}>
                  Our Medium Cheeze burger is packed with just the right amount
                  of nutrition including veggies you need to kickstart your day.
                  Perfect breakfast choice!
                </RegularText>
              </View>
              <View style={styles.sizeWrapper}>
                <BoldText style={{textAlign: 'center', marginVertical: 30}}>
                  Size
                </BoldText>
                <View style={styles.sizeContainer}>{this.renderSize()}</View>
              </View>
            </View>
            <View style={styles.marginBottomXs}>
              <AppButton title="Proceed to Checkout" />
            </View>
          </ScrollView>
        </ThemeContainer>
      </>
    );
  }
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  halfSize: {
    flex: 0.4,
  },
  productName: {
    fontSize: 30,
    color: '#4A4A4A',
  },
  currency: {
    textAlign: 'right',
  },
  price: {
    fontSize: 30,
    color: '#4A4A4A',
  },
  imageStyle: {
    width: '100%',
    height: 350,
    resizeMode: 'center',
  },
  productDetails: {},
  center: {
    alignItems: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  size: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  selectedSizeStyle: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  sizeWrapper: {
    paddingBottom: 30,
  },
  marginBottomXs: {
    marginBottom: 30,
  },
});
