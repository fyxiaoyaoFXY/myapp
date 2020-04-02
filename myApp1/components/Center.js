import React,{useState,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,//相当于div
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated,
  AsyncStorage
} from 'react-native';
import Button from 'react-native-button';
import {Router, Scene} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Actions} from 'react-native-router-flux';
import {WebView} from 'react-native-webview';
import {Icon} from '@ant-design/react-native';
import myNew from './myNew'

const {width} = Dimensions.get('window')
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const styles = {
  box1:{
    width:"20%",
    height:90,
    marginTop:8,
    backgroundColor:'white'
  },
  box2:{
    width:"80%",
    height:90,
    marginTop:8,
    backgroundColor:'white'
  },
  txt:{
    color:"black",
    paddingLeft:30,
    paddingTop:15
  },

};

export default class Home extends Component {
    // let [val, setVal] = useState('1');
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(20),
            imageUrl:''
        }
    }
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
              source=JSON.stringify(source)
              AsyncStorage.setItem('path',source,
              ()=>{console.log('store sucess')})
            }
          });
    }
    zoom = ()=>{
        Animated.timing(this.state.width,{
            toValue: 200,
            // easing: Easing.elastic() 
        }).start()
    }
    tiaozhuan=()=>{
      Actions.mynew()
    }
    render(){
    return(
        <>
    <StatusBar barStyle="dark-content" style={{backgroundColor:'#f23030'}}/>
      <SafeAreaView>
        <ScrollView>
            <View style={{width:'100%',height:400,backgroundColor:'white'}}>
            <Image 
                    style={{width:300,height:300}} 
                    source={this.state.imageUrl}
                />
                 <Button 
                    onPress={()=>{this.takephoto()}}
                >拍照</Button>
            {/* <Image
              style={{width:100,height:100,marginLeft:190,marginTop:50}} 
              source={require('../assets/pic.png')
              }/> */}
              <Text style={{paddingLeft:173,paddingTop:10,fontSize:18,color:'white'}}>BINNU DHILLON</Text>
            </View>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:"space-evenly",
                    flexWrap:'wrap',
                    borderWidth:0.5,
                    borderColor:'#ccc'
                  }}
            >
               <View style={{width:'10%',height:50,backgroundColor:'white'}}>
                <Icon name='user' size='lg' color='grey' style={{marginTop:10,marginLeft:10}}/>
                </View>
                <View style={{width:'90%',height:50,backgroundColor:'white'}}>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:10}}>我的个人中心</Text>
                </View> 
            </View>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:"space-evenly",
                    flexWrap:'wrap',
                  }}
            >
               <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                    <Icon name='setting' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>账户管理</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='user' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>收货地址</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='moon' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的信息</Text>
                </View>
                <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                    <Icon name='user' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的订单</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='number' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的维码</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='message' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的积分</Text>
                </View>
                <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                    <Icon name='star' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的收藏</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                   
                </View>
            </View>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:"space-evenly",
                    flexWrap:'wrap',
                    borderWidth:0.5,
                    borderColor:'#ccc',
                    marginTop:5

                  }}
            >
               <View style={{width:'10%',height:50,backgroundColor:'white'}}>
                <Icon name='file' size='lg' color='grey' style={{marginTop:10,marginLeft:10}}/>
                </View>
                <View style={{width:'90%',height:50,backgroundColor:'white'}}>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:10}}>E族活动</Text>
                </View> 
            </View>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:"space-evenly",
                    flexWrap:'wrap',
                  }}
            >
               <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                    <Icon name='setting' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>居家维修保养</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='car' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>出行接送</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='user' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的受赠人</Text>
                </View>
                <View style={{width:'33%',height:100,backgroundColor:'white'}}>
                    <Icon name='home' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的住宿优惠</Text>
                </View>
                <View style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='news' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}/>
                    <Text style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}>我的活动</Text>
                </View>
                <View key='mynew' style={{width:'33.5%',height:100,backgroundColor:'white'}}>
                    <Icon name='message' size='lg' color='grey' style={{marginTop:20,marginLeft:50}}
                    key='mynew'
                    component={myNew}
                     />
                    <Button style={{paddingTop:15,fontSize:17,color:'grey',paddingLeft:40}}
                    onPress={this.tiaozhuan}
                    component={myNew}
                    >我的发布</Button>
                   
                             
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
      </>
    );
};
    }
