import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
import Login from './Login'
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    register=()=>{
    
            this.setState({isloading:true})
            myFetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd}
            ).then(res=>{
                AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        // this.setState({isloading:false})
                        Alert.alert('注册成功！');
                        Actions.login();
                    })
            })

    //   this.setState({
    //     isloading:true
    //   })
    //   myFetch.post('/register',{
    //     username:this.state.username,
    //     pwd:this.state.pwd
    //   }).then.length(res=>{
    //     AsyncStorage.setItem('message',JSON.stringify(res.data))
    //     .then(()=>{
    //       console.log(res.data);
    //       if(res.data.token=='222'){
    //         ToastAndroid.show(res.data.tips,10);
    //       }else if(res.data.token=='111'){
    //         ToastAndroid.show('注册成功！',10);
    //         Actions.login();
    //       }
    //     })
    //   })
    }
    login = ()=>{
      // if(this.state.username!=''&&this.state.pwd!=''&&this.state.pwdA!=''){
      //   if(this.state.pwd!=this.state.pwdA){
      //     Alert.alert('密码不一致！');
      //   }
      //   else{
      //     this.setState({isloading:true})
      //     myFetch.post('/login',{
      //       username:this.state.username,
      //       pwd:this.state.pwd
      //     }).then(res=>{
      //       if(res.data.token=='1'){
      //         Alert.alert('账户已存在！');
      //       }
      //       else if(res.data.token=='2'){
      //         Alert.alert('连接错误！');
      //       }
      //       else{
      //         AsyncStorage.setItem('user',JSON.stringify(res.data))
      //         .then(()=>{
      //           this.setState({isloading:false})
      //           Actions.login();
      //         })
      //       }
      //       console.log(res.data);
      //     })
      //   }
      // }
      // else{
      //   Alert.alert('存在输入项为空！');
      // }
       // myFetch.get('/topics',{limit:4,user:'sss'})
        //     .then(res=>console.log(res))
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){

            // }
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.homePage();
                })
        })
    }
    back=()=>{
        Actions.login()
      } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
          <Icon 
                        key="login"
                        component={Login}
                        onPress={this.back}
                        name='left' color='white' style={{marginTop:15,marginLeft:30}}/>  
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
          <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.register}>
                <Text>注册</Text>
            </TouchableOpacity>
            
        </View>
        {
            this.state.isloading
            ?<View><Text>正在注册。。。</Text></View>
            :null
        }
      </View>
    );
  }
}