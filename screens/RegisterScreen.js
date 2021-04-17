import React,{useLayoutEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet,  View,StatusBar } from 'react-native'
import {Button, Input, Text} from "react-native-elements"
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [imageUrl,setImageUrl]=useState("");

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle:"Back to Login",
        });
    },[navigation])
    const register=()=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser=>{
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl|| 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
            })
        }).catch((error)=> alert(error.message));
    };


    return (
        <View behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom: 50}}> Create a Signal Account
            </Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" value={name} onChangeText={(text)=>setName(text)} autofocus type="text"/>
                <Input placeholder="Email" type="email" value={email} onChangeText={(text)=>setEmail(text)} autofocus/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text)=>setPassword(text)} autofocus />
                <Input placeholder="Profile Picture URL (optional)" onSubmitEditing={register} type="text" value={imageUrl} onChangeText={(text)=>setImageUrl(text)} autofocus/>
            </View>
            <Button onPress={register} containerStyle={styles.button} raised title="Register"/>
        </View>
    )
}

export default RegisterScreen

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
