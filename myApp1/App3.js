import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal} from 'react-native-router-flux';
import {Grid,Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen'

import Service from './components/Service';
import Center from './components/Center';
import Shop from './components/Shop';
import ShopCar from './components/ShopCar';
import Fenlei from './components/Fenlei';
import myNew from './components/myNew';
const App = () => {
	// 实现 Tabs
	useEffect(()=>{
		SplashScreen.hide();
	},[])
	return (
		<Router>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="grey"
								tabBarStyle={{backgroundColor:'white'}}
							>
								{/* 首页 */}
								<Scene key='service'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'grey'} 
											name="home"
										/>
									}
									component={Service}
									hideNavBar={true}
								>
									</Scene>
								{/* 消息栏 */}
								<Scene key='fenlei'
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'red':'grey'} 
											name="appstore"
										/>
									}
									component={Fenlei}								
								/>
								{/* 文档栏 */}
								<Scene 
									key='doc'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'grey'} 
											name='shopping'/
									>}
									title="购物车"
									component={ShopCar}
								/>
								{/* 文档栏 */}
								<Scene 
									key='center'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'grey'} 
											name='user'/
									>}
									title="个人中心"
									hideNavBar={true}
									component={Center}
								/>
								
							</Tabs>
							<Scene 
							key='mynew'
							icon={({focused})=>
								<Icon 
									color={focused?'red':'grey'} 
									name='user'/
							>}
							title="个人中心"
							hideNavBar={true}
							component={myNew}
						/>
						<Scene 
							key='center'
							icon={({focused})=>
								<Icon 
									color={focused?'red':'grey'} 
									name='user'/
							>}
							title="个人中心"
							hideNavBar={true}
							component={Center}
						/>
						
						</Scene>
		</Router>
	);
};


export default App;