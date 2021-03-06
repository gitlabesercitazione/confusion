import React from 'react';
import {
  Image,
  View,
  Dimensions
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import {scale, scaleModerate, scaleVertical} from './../../utils/scale';


export class Walkthrough3 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    /*
    let image = RkTheme.current.name === 'light'
      ? <Image source={require('../../assets/images/kittenImage.png')}/>
      : <Image source={require('../../assets/images/kittenImageDark.png')}/>;
    */
    let contentHeight = scaleModerate(375, 1);
    let height = Dimensions.get('window').height - contentHeight;
    let width = Dimensions.get('window').width;
    let height_sub = height;
    let width_sub = width;

    image = <Image style={[styles.image, {height, width}]} source={require('../../assets/images/red-white-plate-with-spoon-knife-and-fork-template-vector-19766185.jpg')}/> ;
    image_quality = <Image style={{ resizeMode: 'contain', height: height_sub, width: width_sub ,marginTop: 150}} source={require('../../assets/images/download.png')}/> ;
    return (
      <View style={styles.screen}>
        {/* {image} */}
        {image_quality}
        <RkText rkType='header2' style={styles.text}>Ricevi una notifica dell'esito</RkText>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1
  },
  text: {
    marginTop: 20
  }
}));
