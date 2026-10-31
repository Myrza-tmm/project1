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
import { Entypo } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export default function Register({
  onBack,
  onContinue,
}: Props) {
  const [name, setName] = useState ('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable onPress={onBack}>
          <Text style={styles.back}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Регистрация
        </Text>

        <Text style={styles.subtitle}>
          Создайте учетную запись, 
          чтобы продолжить
        </Text>

        <View style={styles.inputContainer}>
                  <Text style={styles.inputIconText}><Ionicons name="person" size={24} color="black" /></Text>
        
                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Ваше имя"
                    placeholderTextColor="#AAA9B2"
                    keyboardType="default"
                  />
                </View>

        <View style={styles.inputContainer}>
                  <Text style={styles.inputIconText}><Entypo name="phone" size={24} color="black" /></Text>
        
                  <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Номер телефона"
                    placeholderTextColor="#AAA9B2"
                    keyboardType="phone-pad"
                  />
                </View>
        
                <View style={styles.inputContainer}>
                  <Text style={styles.inputIconText}><Entypo name="lock" size={24} color="black" /></Text>
        
                  <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Пароль"
                    placeholderTextColor="#AAA9B2"
                    keyboardType="default"
                    secureTextEntry
                  />
                </View>

        <View style={styles.agreeContainer}>
          <Pressable 
            style={[styles.checkbox,isAgreed && styles.checkboxChecked]}
            onPress={() => setIsAgreed(!isAgreed)}
            >
              {isAgreed && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
            <Text style={styles.agreeText}>
              Создавая учетную запись, вы соглашаетесь с нашими{' '}
              <Text style={styles.agreeLink}>
                Условиями использования.
              </Text>
            </Text>

        </View>

        <Pressable
          style={[styles.button, !isAgreed && styles.buttonDisabled]}
          onPress={onContinue}
          disabled={!isAgreed}
        >
          <Text style={styles.buttonText}>
            Продолжить
          </Text>
        </Pressable>

      <View style={styles.loginContainer}>
        <Text style={styles.someText}>
          Уже есть аккаунт?
        </Text>

         <Pressable onPress={onBack}>
           <Text style={styles.loginLink}>
             Войти
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

  agreeContainer: {
    flexDirection:'row',
    alignItems: 'flex-start',
    marginTop: 20,
    paddingRight: 20,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#A811DA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },

  checkboxChecked: {
    backgroundColor: '#A811DA',
  },

  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
  },

  agreeText: {
    flex: 1,
    color: '#6B6A73',
    fontSize: 14,
    lineHeight: 20,
  },

  agreeLink: {
    color: '#A811DA',
    fontWeight: '600',
  },

  button: {
    height: 60,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonDisabled: {
    backgroundColor: '#D9D8E0',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },

   registerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  registerText: {
    color: '#9CA3AF',
    fontSize: 16,
  },

  registerLink: {
    fontSize: 16,
    color: '#A811DA',
    fontWeight: '600',
    marginLeft: 5,
  },
  
  someText: {
    color: '#9CA3AF',
    fontSize: 16,
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  loginLink: {
    color: '#A811DA',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  
});