/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{ useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,// 相当于div
  Text,
  Dimensions,
    Image
} from 'react-native';
import {Router,Scene,Tabs} from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import {Icon} from '@ant-design/react-native';

// 路由专题 （Tab标题）

const App = () => {
  return (
<Router>
        <Scene key='root'>
            <Tabs 
              key='tabbar'
              hideNavBar
              activeTintColor="red"
              inactiveTintColor="blud"
              tabBarStyle={{backgroundColor:'#ccc'}}
            >
                {/* 消息栏 */}
                <Scene key='msg'
                  title='消息'
                  icon={
                      ({focused})=><Icon name='home' color='red'/>
                    }
                      > 
                  <Scene key='ms' component={Msg}/>
                  <Scene 
                    key='msgdetail' 
                    hideTabBar
                    component={MsgDetail}
                    />
                </Scene>
                {/* 文本栏 */}
                <Scene key='doc'
                  title='文档'
                >
                  <Scene key='docs' component={Doc}/>
                </Scene>
            </Tabs>
        </Scene>
    </Router>
  );
};



export default App;