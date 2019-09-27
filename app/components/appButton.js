import React, { PureComponent } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { BoldText } from './appText'
import colors from '../utils/colors';


class AppButton extends PureComponent {
  render(){
    const { title } = this.props;
    return (
      <TouchableOpacity style={styles.button}>
        <BoldText style={styles.buttonText}>{title}</BoldText>
      </TouchableOpacity>
    )
  }
}

export default AppButton;

const styles =  StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainColor,
    height:60,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
  }
})