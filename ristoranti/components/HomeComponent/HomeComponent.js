import React, { Component } from 'react';

import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

import HeaderComponent from './HeaderComponent';
import {Home} from '../../screens/screenName';
export default class HomeComponent extends Component {
    static navigationOptions = ({navigation}) => {
        let draweLabel = 'Home';
        let drawerIcon = () => (
            <Image 
                source={require('../../assets/icons/loading-icon.1.png')}
                syle={{width:26,height:26, tintColor: 'red'}}
                />
        )
        return {draweLabel};
    }
    render (){
        return (<View style = {{
            flex:1,
            flexDirection : 'column',
        }}>
        <HeaderComponent {...this.props} />
            <View style = {{
                flex:1,
                backgroundColor: 'red',
                alignItems :'center',
                justifyContent: 'center',
                flexDirection : 'column',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
            This is Home Screen
            </Text>
            <TouchableHighlight style={{
                margin :20,
                width:200,
                height:45,
                backgroundColor: 'darkviolet',
                padding:10,
                alignItems: 'center'
            }}
            onPress={() => {
const {navigate} = this.props.navigation;
                navigate(Home);
            }}>
            <Text style={{color: 'white', fontSize: 18}}> Navigate to Info</Text>
            </TouchableHighlight>
             </View>
        </View>);
    }
}