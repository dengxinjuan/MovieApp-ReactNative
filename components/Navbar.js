import React from 'react';
import{
View,
SafeAreaView,
TouchableOpacity,
Image,
StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Navbar extends React.PureComponent {
   
    render() {
        const {navigation, main} = this.props;
        return (
            <SafeAreaView>
        
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={40} color={'black'} />
            </TouchableOpacity>
          </View>
  
      </SafeAreaView>
        );
    }
}

export default Navbar;