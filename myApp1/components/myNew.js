import React, { Component } from 'react'
import {Actions} from 'react-native-router-flux';
import {
    View,
    Text,
    AsyncStorage,
    ScrollView,
    TextInput,
    ToastAndroid,
} from 'react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';
import {Icon} from '@ant-design/react-native';
import Button from 'react-native-button';
import Center from './Center'


var page=1;
var back;
var back1;
export default class myNew extends Component {
    
    constructor(){
        super();
        this.state={
            tits:[],
            create:[]

        }
    }
    // storeData = () =>{
    //     AsyncStorage.setItem('userName','helloworld',
    //         ()=>{
    //             console.log('success');
    //         }
    //     );
    // }
    storeData = async () =>{
        await AsyncStorage.setItem('userName','helloworld',
            ()=>{
                console.log('success');
            }
        );
    }
    getData = () =>{
        AsyncStorage.getItem('userName')
        .then(
            (res)=>{
                console.log(res);
            }
        )
    }
    // componentDidMount(){
    //     fetch('https://cnodejs.org/api/v1/topics?limit=15&&page='+page)
    //         .then((res)=>res.json())
    //          .then((res)=>{
    //             console.log(res.data);
    //             this.setState({
    //                 data: res.data
    //             });
    //         })  
    // }
    getTitle=()=>{
        page++;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?page='+page+"&&limit=15")
            .then((res)=>res.json())
             .then((res)=>{
                // console.log(res.data);
                this.setState({
                    tits: res.data
                });
            })  
    }
    getTitle1=()=>{
        page--;
        if(page<=0){
            ToastAndroid.show("当前已经是第一页 !", ToastAndroid.SHORT);
        }
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?page='+page+"&&limit=15")
            .then((res)=>res.json())
             .then((res)=>{
                // console.log(res.data);
                this.setState({
                    tits: res.data
                });
            })  
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15')
        .then(res=>res.json())
        .then(res=>{
            this.setState({tits:res.data})
            // this.setState({create:res.data})
        })
        // fetch('https://cnodejs.org/api/v1/topics?limit=15&&page='+page)
        //     .then((res)=>res.json())
        //      .then((res)=>{
        //         console.log(res.data);
        //         this.setState({
        //             data: res.data
        //         });
        //     })  
        var number = 10;
        var randomNumber = parseInt(Math.random() * number)
        console.log(randomNumber);

    }
    back=()=>{
        Actions.center()
      }
    getnumber=()=>{
        var number = 10;
        var randomNumber = parseInt(Math.random() * number)
        console.log(randomNumber);
        if (randomNumber>=5){
            back='已回复';
        }else{
            back='未回复';
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:"space-evenly",
                    flexWrap:'wrap',
                    borderWidth:0.5,
                  }}
            >
                    <View style={{width:'20%',backgroundColor:'red',color:'white',height:50}}>
                        <Icon 
                        key="center"
                        component={Center}
                        onPress={this.back}
                        name='left' color='white' style={{marginTop:15,marginLeft:30}}/>                     
                    </View>
                    <View style={{width:'80%',backgroundColor:'red',color:'white',height:50}}>
                        <Text style={{color:'white',fontSize:20,paddingLeft:100,paddingTop:10}}>我的发布</Text>
                    </View>
                    </View>
                    {/* <Button title="存储" onPress={this.storeData}/>
                    <Button title="获取" onPress={this.getData} /> */}
                    {/* <Button title="请求title" onPress={this.getTitle} /> */}
                    {
                    this.state.tits.map((item)=>(
                        <View style={{overflow:'hidden',width:'100%',height:35, borderWidth:0.5,
                        flexDirection:'row',
                        justifyContent:"space-evenly",
                        flexWrap:'wrap',
                        borderColor:'#ccc'}} >
                            <View style={{width:'65%'}}>
                                <Text style={{fontSize:15}}>
                            {item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}
                            </Text>
                            </View>
                            <View style={{width:'20%'}}>
                                <Text style={{fontSize:15}}>
                                {item.create_at ? (item.create_at.length > 10 ? item.create_at.substr(0, 10) : item.title) : ""}
                                </Text>
                            </View>
                            <View style={{width:'15%'}}>
                                <Text onPress={this.getnumber()} style={{fontSize:15}}>
                                    {back}
                                </Text>
                            </View>
                            
                            {/* {item.create_at} */}
                            
                            
                        </View>
                    ))
                }
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:"space-evenly",
                    flexWrap:'wrap',
                  }}
            >
                <View style={{width:'40%'}}>
                <Button
                    style={{
                        marginTop:20,
                        marginLeft:60,
                        width: 80,
                        height: 25,
                        color: '#fff',
                        // textAlignVertical: 'center',
                        borderRadius: 20,
                        backgroundColor: 'red',
                        // paddingLeft:60,
                        fontSize:15
                    }} 
                    onPress={this.getTitle1}
                   >
                        上一页
                    </Button>
                </View>
                <View style={{width:'20%'}}>
                <Text style={{paddingLeft:40,paddingTop:20}}>第{page}页</Text>
                </View>
                <View style={{width:'40%'}}>
                <Button
                    style={{
                        marginTop:20,
                        marginLeft:70,
                        width: 80,
                        height: 25,
                        color: '#fff',
                        // textAlignVertical: 'center',
                        borderRadius: 20,
                        backgroundColor: 'red',
                        // paddingLeft:60,
                        fontSize:15
                    }} 
                    onPress={this.getTitle}
                   >
                        下一页
                    </Button>
                </View>
            </View>
                </ScrollView>
            </View>
        )
    }
}
