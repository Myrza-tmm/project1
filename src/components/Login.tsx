import React, { useState } from 'react';

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

type LoginProps = {
  onBack: () => void;
  onForgetPassword: () => void;
  onRegister: () => void;
  onContinue: () => void;
};

export default function Login({
  onBack,
  onForgetPassword,
  onRegister,
  onContinue,
}: LoginProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onContinue();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

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

        <Pressable
          style={styles.ssylkaButton}
          onPress={onForgetPassword}
        >
          <Text style={styles.ssylka}>
            Забыл пароль?
          </Text>
        </Pressable>

        <Pressable
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>
            Войти
          </Text>
        </Pressable>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            У вас нет аккаунта?
          </Text>

          <Pressable onPress={onRegister}>
            <Text style={styles.registerLink}>
              Зарегистрироваться
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
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 60,
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

  ssylkaButton: {
    alignItems: 'flex-end',
    marginTop: 10,
  },

  ssylka: {
    color: '#A811DA',
    fontSize: 16,
  },

  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  loginButtonText: {
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
});