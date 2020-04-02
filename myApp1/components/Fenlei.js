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
  TouchableOpacity
} from 'react-native';
import {Icon} from '@ant-design/react-native';


const styles = StyleSheet.create({
  box:{
    width:"40%",
    height:280,
    margin:8,
    backgroundColor:'white'
  },
  txt:{
    color:"black",
    paddingLeft:30,
    paddingTop:15
  },
  size:{
    fontSize:20
  }

});
const Fenlei = () => {
  let [val, setVal] = useState('1');
  return (
    <>
      <StatusBar barStyle="dark-content" style={{backgroundColor:'#ccc'
}}/>
      <SafeAreaView>
        <ScrollView>
        <View style={{flexDirection:'row',
        height:60,
        justifyContent:'center' ,
       }}>
          <View style={{width:'80%' ,
          height:50,
          backgroundColor:'#ccc',
          flexDirection:'row',
          alignItems:'center',
          marginRight:10,
          marginTop:5,
          paddingLeft:20,
          color:'grey',
         }}>
            <TextInput placeholder='请输入商品名称'/>   
            <Icon name='search' color='grey' style={{marginLeft:180}}/>

          </View>
        </View> 
        <View style={{flexDirection:'row',
        height:60,
        // justifyContent:'center' ,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#ccc'
       }}>
        <Text style={[styles.txt,styles.size]}>综合           销量           新品           价格            信用</Text>
        </View>
        {/* flex 布局 */}
        {/* 在 rn 中，组件 默认设置了 flex 属性，默认主轴是 竖轴 */}
        {/* justifyContent:定义主轴对齐方式 */}
        {/* alignItems:定义交叉轴对齐方式 */}
        <View style={{
          flexDirection:'row',
          justifyContent:"space-evenly",
          flexWrap:'wrap'
        }}>
          <View style={styles.box}>
            <Image
          style={{width:150,height:150,margin:20}} 
          source={require('../assets/icon/1.gif')
        }/>
          
          <Text style={{color:'gray',paddingLeft:8}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',paddingTop:8,paddingLeft:8}}>36.00 </Text>
          </View>
          <View style={styles.box}>
            <Image
          style={{width:150,height:150,margin:20}} 
          source={require('../assets/icon/2.gif')
        }/>
          
          <Text style={{color:'gray',paddingLeft:8}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',paddingTop:8,paddingLeft:8}}>36.00 </Text>
          </View>
          <View style={styles.box}>
            <Image
          style={{width:150,height:150,margin:20}} 
          source={require('../assets/icon/1.gif')
        }/>
          
          <Text style={{color:'gray',paddingLeft:8}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',paddingTop:8,paddingLeft:8}}>36.00 </Text>
          </View>
          <View style={styles.box}>
            <Image
          style={{width:150,height:150,margin:20}} 
          source={require('../assets/icon/2.gif')
        }/>
          
          <Text style={{color:'gray',paddingLeft:8}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',paddingTop:8,paddingLeft:8}}>36.00 </Text>
          </View>
          <View style={styles.box}>
            <Image
          style={{width:150,height:150,margin:20}} 
          source={require('../assets/icon/1.gif')
        }/>
          
          <Text style={{color:'gray',paddingLeft:8}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',paddingTop:8,paddingLeft:8}}>36.00 </Text>
          </View>
          <View style={styles.box}>
            <Image
          style={{width:150,height:150,margin:20}} 
          source={require('../assets/icon/2.gif')
        }/>
          
          <Text style={{color:'gray',paddingLeft:8}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',paddingTop:8,paddingLeft:8}}>36.00 </Text>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default Fenlei;