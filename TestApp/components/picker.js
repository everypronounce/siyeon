import { Picker } from "@react-native-picker/picker";
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class Picker {
    state = {
      country: 'usa',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Picker
            style={{height: 50, width: 250}}
            selectedValue={this.state.country}>
            <Picker.Item label="korea" value={'korea'} />
            <Picker.Item label="USA" value={'usa'} />
          </Picker>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
});

export default Pickert;