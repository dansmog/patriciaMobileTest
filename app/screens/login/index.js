import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';

import {BoldText, RegularText} from '../../components/appText';
import ThemeContainer from '../../containers/ThemeContainer';
import AppButton from '../../components/appButton';
import colors from '../../utils/colors';

class LoginScreen extends PureComponent {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{marginBottom: 300}}>

        </View>
        <ThemeContainer>
          <View style={styles.header}>
            <BoldText isHeader={true} style={styles.HeaderText}>
              Welcome Back!
            </BoldText>
            <RegularText style={styles.fontSm}>
              Login to your account
            </RegularText>
          </View>
          <View>
            <View>
              <Form>
                <Item style={{paddingVertical: 5, borderBottomWidth: 2}} floatingLabel last>
                  <Label style={[styles.blackColor, styles.fontBrandonBold]}>Username</Label>
                  <Input />
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
            <View style={styles.actionToRem}>
              <View style={styles.rememberMeComp}>
                <View style={styles.radioButton} onPress={() => alert('working')}/>
                <RegularText style={styles.radioButtonText}>Remember me</RegularText>
              </View>

              <TouchableOpacity>
                <RegularText>Forgot Password?</RegularText>
              </TouchableOpacity>
            </View>
            <AppButton title="LOGIN"  onPress={() => this.props.navigation.navigate('Home')}/>
            <View style={[styles.centerText, styles.marginTopXs]}>
              <View style={styles.footer}>
                <RegularText>New User?</RegularText>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Signup')}>
                  <RegularText
                    style={{color: colors.mainColor, marginLeft: 10}}>
                    Signup
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
export default LoginScreen;

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
