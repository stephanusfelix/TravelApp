import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import {styles} from "./styleForm.js";


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email : '',
            password : '',
            isLogin : false,
        }
    }

    login = () => {
        if(!this.state.email && !this.state.password){
            Alert.alert('Email atau Password Tidak Boleh Konsong')
        }else{
            if(this.state.email == "hotelapp@gmail.com" && this.state.password == "user123"){
                this.setState({
                    //disini login true
                    isLogin : true
                })
            }else{
                Alert.alert("Email atau Password Salah")
            }
        }
    }

    render() {
        
        const {email, password, isLogin} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}> Login </Text>
                <Text style={styles.subtitle}> Hotel Reservation App </Text>
                <View style={styles.line} />
                
                {/* isi */}
                <View style = {styles.isi}>
                   <View style={styles.inputWrapper}>
                        <Text>Email : </Text>
                        <TextInput 
                            type='email'
                            style={styles.textInput}
                            placeholder='Masukan email'
                            value={email}
                            onChangeText={(email => this.setState({email}))}
                        />
                   </View>

                   <View style={styles.inputWrapper}>
                        <Text>Password : </Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='Masukan password'
                            value={password}
                            onChangeText={(password => this.setState({password}))}
                            secureTextEntry={true}
                        />
                   </View>

                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.textButton} onPress={() => this.login()}>Login</Text>
                   </TouchableOpacity>

                    
                   {isLogin && (
                       <Text style={{marginTop: 20}}>
                           Selamat berhasil login
                       </Text>
                   )}
                </View>
            </View>
        )
    }
}
