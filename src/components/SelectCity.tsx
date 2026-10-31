import React,  {useState} from 'react';


import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export default function Select ({
  onBack,
  onContinue,
}: Props) {
    const [name, setName] = useState ('');

    return (
     <SafeAreaView style={styles.safeArea}>
     <StatusBar style="dark" 
    />
     <View style={styles.container}>     
        <Pressable onPress={onBack}>
        <Text style={styles.back}>←</Text>
        </Pressable> 
        <Text style={styles.title}>
          Выберите город
        </Text>
          
        <Text style={styles.subtitle}>
          Заведение которые будут показываться вам,
          будут зависеть от вашего города.
        </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Выбрать город"
          placeholderTextColor="#AAA9B2"
          keyboardType="default"
        />
         <AntDesign name="down" size={20} color="#1B1923" />
       </View>

       <View>
        <Pressable
         style = {styles.continueButton}
         onPress = {() => {
         console.log('Продолжить басылды');
         onContinue();
        }}
        >
        <Text style = {styles.continueButtonText}>
          Продолжить
        </Text>
        </Pressable>
      </View>

    </View>      
</SafeAreaView>
);
}

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

   container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 20,
  },

  back: {
    fontSize: 32,
    color: '#1B1923',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B1923',
    marginTop: 30,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 18,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop: 10,
  },

  inputIconText: {
    fontSize: 18,
    marginRight: 14,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },

  continueButton: {
    width:'100%',
    height: 60,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 25,
  },

  continueButtonText: {
    color:'#FFFFFF',
    fontSize: 19,
    fontWeight:'700',
  },

});