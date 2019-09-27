import React, {PureComponent} from 'react';
import { StyleSheet, View } from 'react-native'

class ThemeContainer extends PureComponent {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}
export default ThemeContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30
  }
})