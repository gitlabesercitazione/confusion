import React, { Component } from 'react';

import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import Button from 'react-native-elements';
export default class HeaderComponent extends Component {
    // static navigationOptions = ({navigation}) => {
    //     let draweLabel = 'Home';
    //     let drawerIcon = () => (
    //         <Image 
    //             source={require('../../assets/icons/visaIcon@2x.png')}
    //             syle={{width:26,height:26, tintColor: backgroundColor}}
    //             />
    //     )
    //     return {draweLabel};
    // }
    render (){
        return (<View style = {{
            height:98,
            flexDirection : 'row',
            justifyContent: 'flex-start',
            alignItems :'center',

        }}>
            <TouchableHighlight style={{ marginLeft : 10 , marginTop:20}}
            onPress={() => {
                const {navigate} = this.props.navigations;
                navigate('DrawerOpen');
            }}>
            <Image style={{ width:32, height:32}}
            source = {require('../../assets/icons/loading-icon.1.png')}
            />
            </TouchableHighlight>
        </View>);
    }
}