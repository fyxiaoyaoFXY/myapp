import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button
} from 'react-native';


export default class MsgDetail extends Component{
    render(){
        return(
            <View>
                <Button 
                    title='返回消息页面' 
                    onPress={()=>Actions.pop()}
                />
                <Text>消息详情</Text>
            </View>
        )
    }
}