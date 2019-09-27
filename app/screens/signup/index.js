import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';

import {BoldText, RegularText} from '../../components/appText';
import ThemeContainer from '../../containers/ThemeContainer';
import AppButton from '../../components/appButton';
import colors from '../../utils/colors';

class SignupScreen extends PureComponent {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{marginBottom: 300}}>

        </View>
        <ThemeContainer>
          <View style={styles.header}>
            <BoldText isHeader={true} style={styles.HeaderText}>
              Create your Account!
            </BoldText>
            <RegularText style={styles.fontSm}>
             It's free and easy to setup
            </RegularText>
          </View>
          <View>
            <View style={styles.marginBottomSm}>
              <Form>
                <Item style={{paddingVertical: 5, borderBottomWidth: 2}} floatingLabel last>
                  <Label style={[styles.blackColor, styles.fontBrandonBold]}>Username</Label>
                  <Input  style={styles.formInput}/>
                </Item>
                <Item style={{paddingVertical: 5, borderBottomWidth: 2}} floatingLabel last>
                  <Label style={[styles.blackColor, styles.fontBrandonBold]}>Email</Label>
                  <Input keyboardType="email-address"  style={styles.formInput}/>
                </Item>
                <Item style={{paddingVertical: 5, borderBottomWidth: 2}} floatingLabel  last>
                  <Label style={[styles.blackColor, styles.fontBrandonBold]}>Password</Label>
                  <Input 
                    secureTextEntry={true}
                    style={styles.formInput}
                  />
                </Item>
              </Form>
            </View>
            <AppButton title="LOGIN" />
            <View style={[styles.centerText, styles.marginTopXs]}>
              <View style={styles.footer}>
                <RegularText>Existing User?</RegularText>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <RegularText
                    style={{color: colors.mainColor, marginLeft: 10}}>
                    Login
                  </RegularText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ThemeContainer>
      </ScrollView>
    );
  }
}
export default SignupScreen;

const styles = StyleSheet.create({
  HeaderText: {
    fontSize: 30,
  },
  formInput: {
    fontSize: 16,
    fontFamily: "brandon-grotesque-black",
  },
  fontBrandonBold: {
    fontFamily: "brandon-grotesque-light",
  },
  marginBottomSm: {
    marginBottom: 100
  },
  blackColor: {
    color: '#000'
  },
  fontSm: {
    fontSize: 17,
  },
  actionToRem: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom:100
  },
  rememberMeComp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderColor: colors.borderBottom,
    borderWidth: 1,
    borderRadius:100
  },
  radioButtonText: {
    marginLeft: 10
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTopXs: {
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
  },
});
