import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './src/common/SwiperPage';
import Home from './src/home/Home';
import Login from './src/common/Login'
import Register from './src/common/Register'
import Goods from './src/goods/Goods';
import User from './src/userinfor/Userinfor';
import Userinfor from './src/userinfor/Userinfor';
import Service from './components/Service';
import Center from './components/Center';
import Shop from './components/Shop';
import ShopCar from './components/ShopCar';
import Fenlei from './components/Fenlei';
import myNew from './components/myNew';

console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/d37ae6e93719e019023afe5941b20461/api';

const App = () => {
	// 实现 Tabs
	let [isInstall,setInterval]=useState(true);
	let now = 0;
	useEffect(()=>{
		SplashScreen.hide();
		fetch(rootUrl+'/topics?limit=5')
			.then(res=>res.json())
			.then(res=>console.log(JSON.stringify(res)))
	},[]);
	let afterInstall=()=>{
		console.log('after install');
		setInterval(false);
	}
	if(isInstall){
		return<View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
						<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="grey"
								tabBarStyle={{backgroundColor:'white'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
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
									key='register'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'grey'} 
											name='shopping'/
									>}
									title="购物车"
									component={Register}
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
							component={myNew}
						/>
						<Scene 
							key='center'
							component={Center}
						/>
						<Scene 
							key='register'
							hideNavBar={true}
							component={Register}
						/>
						<Scene 
							key='login'
							component={Login}
						/>
						
						</Scene>
					</Drawer>
					{/* <Scene key='light' component={Mybox}/> */}
				</Lightbox>
				<Scene initial={true} key='login' component={Login}/>

				{/* <Scene key="login" component={ShowMyName}/> */}
				{/* <Scene key="login1" component={Login}/> */}
			</Modal>
			{/* <Scene component={Message}/> */}
			</Overlay>
		</Router>
	);
};

export default App;