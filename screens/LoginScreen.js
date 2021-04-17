import React,{useEffect, useState} from 'react'
import { StyleSheet, StatusBar,Text, View, KeyboardAvoidingView } from 'react-native'
//import {StatusBar} from "react-native-vector-icons"
import {Button, Input, Image} from "react-native-elements"
import { auth } from '../firebase';


const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged((authUser)=>{
            console.log(authUser);
            if(authUser){
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    },[])
    const signIn =()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((error)=>alert(error));
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar styles="light"/>
            <Image 
            source={{uri:"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",}}
            style={{width:200,height:200}}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Email" value={email} onChangeText={(text)=> setEmail(text)} autoFocus type="Email"/>
                <Input placeholder="Password" value={password} onChangeText={(text)=> setPassword(text)} secureTextEntry type="password"/>
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button onPress={()=>navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register"/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        backgroundColor:"white",
        
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
})
