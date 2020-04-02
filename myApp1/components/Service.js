import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,//相当于div
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'
import {Icon} from '@ant-design/react-native';

const { width } = Dimensions.get('window')

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
  size:{
    fontSize:20
  },
  container: {
    flex: 1
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  },
  btn:{
    width: 200,
    height: 40,
    color: '#fff',
    textAlignVertical: 'center',
    borderRadius: 20,
    backgroundColor: 'red'
},

};

const Service=()=>{
    let [val, setVal] = useState('1');
    return(
        <>
           <StatusBar barStyle="dark-content" style={{backgroundColor:'#f23030'
}}/>
      <SafeAreaView>
        <ScrollView>
        <View style={{flexDirection:'row',
        height:60,
        justifyContent:'center' ,
        backgroundColor:'#f23030',
       }}>
          <View style={{width:'80%' ,
          height:50,
          backgroundColor:'#fbb8b8',
          flexDirection:'row',
          alignItems:'center',
          marginRight:10,
          marginTop:5,
          paddingLeft:20,
          color:'grey',
          borderRadius:25,
         }}>
            <Icon name='search' size='lg' color='white'/>
            <TextInput placeholder='请输入商品名称' style={{fontColor:'white',fontSize:15}}/>   
            <Icon name='shopping' color='white' size="lg" style={{marginLeft:200}}/>

          </View>
        </View> 
        <View style={styles.container}>
        <Swiper style={styles.wrapper} height={200}autoplay={true}>
        <View style={styles.slide1} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../assets/2.png')} />
          </View>
          <View style={styles.slide2} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../assets/1.png')} />
          </View>
          <View style={styles.slide3} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../assets/2.png')} />
          </View>
        </Swiper>
      </View>
      
      <View style={{
          flexDirection:'row',
          justifyContent:"space-evenly",
          flexWrap:'wrap'
        }}>
          <View style={styles.box1}>
            <Image
              style={{width:80,height:80,marginLeft:20}} 
              source={require('../assets/3.png')
              }/>
          </View>
          <View style={styles.box2}>
            <Text style={{paddingLeft:25,size:25,paddingTop:40}}> 居家维修保养</Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={{width:80,height:80,marginLeft:20}} 
              source={require('../assets/4.png')
              }/>
          </View>
          <View style={styles.box2}>
            <Text style={{paddingLeft:25,size:25,paddingTop:40}}> 住宿优惠</Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={{width:80,height:80,marginLeft:20}} 
              source={require('../assets/5.png')
              }/>
          </View>
          <View style={styles.box2}>
            <Text style={{paddingLeft:25,size:25,paddingTop:40}}> 出行接送</Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={{width:80,height:80,marginLeft:20}} 
              source={require('../assets/6.png')
              }/>
          </View>
          <View style={styles.box2}>
            <Text style={{paddingLeft:25,size:25,paddingTop:40}}> E族活动</Text>
          </View>
        </View>
        <Text>
        
      </Text>
        </ScrollView>
      </SafeAreaView>
      <Text 
      style={{
        marginTop:20,
        marginLeft:140,
        width: 200,
        height: 40,
        color: '#fff',
        textAlignVertical: 'center',
        borderRadius: 20,
        backgroundColor: 'red',
        paddingLeft:60,
        fontSize:20
      }}>
      发布需求
      </Text>
      </>
    );
};
export default Service;