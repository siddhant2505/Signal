import React, { useLayoutEffect } from 'react'
import { StyleSheet,ScrollView, Text, View, SafeAreaView, TouchableOpacity  } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from "../components/CustomListItem"
import {auth,db} from "../firebase"
import { Icon } from 'react-native-elements'
import {AntDesign,SimpleLineIcons} from "react-native-vector-icons"

const HomeScreen = ({navigation}) => {

    const signOutUser=()=>{
        auth.signOut().then(()=>{
            navigation.replace('Login');
        });
        
    };

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Signal",
            headerStyle:{backgroundColor:"#fff"},
            headerTitleStyle:{color:"black"},
            headerTintColor:"black",
            headerLeft:()=> (<View style={{marginLeft:20}}>
             <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}> 
                <Avatar rounded source={{uri: auth?.currentUser?.photoURL}}/>
                 </TouchableOpacity> 
                </View>),
            headerRight:()=>(
                <View style={{marginLeft:20}}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Icon name="camerao" type="antdesign" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate("AddChat")} activeOpacity={0.5}>
                        <Icon name="pencil" type="simple-line-icon" size={24} color="black"/>
                    </TouchableOpacity>
                </View>),
            })},[navigation]);

    return (
        <SafeAreaView>
            <ScrollView>
 <CustomListItem/> 
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
