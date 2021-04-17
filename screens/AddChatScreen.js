import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text,View } from 'react-native'
import { Input,Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from '../firebase'

const AddChatScreen = ({navigation}) => {
    const [input,setInput]=useState("");
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Add a new chat",
        })
    },[navigation])

    const createChat=async ()=>{
        await db.collection('chats').add({
            chatName:input}).then(()=>{
                navigation.goBack();
            })
            .catch((error)=>alert(error));
        }
    
    return (
        <View style={styles.container}>
           <Icon name="rocket" size={30} color="#900" />
            <Input onSubmitEditing={createChat} 
            leftIcon={
                <Icon name="rocket" size={30} color="#900" />}
            // <Icon name="wechat" type="antdesign"  size={24} color="black" />} 
            placeholder="Enter a Chat Name" value={input} 
            onChangeText={(text)=>setInput(text)}/>
        <Button onPress={createChat} title="Create new Chat"/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{},
})
