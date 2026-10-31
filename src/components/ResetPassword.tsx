import { useRef,useState } from 'react';

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

type Props = {
    onBack: ()=>void;
    onContinue: () => void;
};

export default function ResetPassword({ onBack, onContinue }: Props) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={() => {
            console.log('АРТҚА БАСЫЛДЫ');
            onBack();
          }}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Сбросить пароль
        </Text>

        <Text style={styles.subtitle}>
          Не менее 8 символов,с прописными и строчними буквами
        </Text>

      

      <View style={styles.inputContainer}>
                <Text style={styles.inputIconText}><Entypo name="lock" size={24} color="black" /></Text>
      
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Пароль"
                  placeholderTextColor="#AAA9B2"
                  keyboardType="default"
                />
              </View>
              <View style={styles.inputContainer}>
                        {/* Иконка паролья в виде текстового символа 🔒 */}
                        <Text style={styles.inputIconText}><Entypo name="lock" size={24} color="black" /></Text>
              
                        <TextInput
                          style={styles.input}
                          value={password}
                          onChangeText={setPassword}
                          placeholder="Повторить пароль"
                          placeholderTextColor="#AAA9B2"
                          keyboardType="default"
                          secureTextEntry
                        />
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
    paddingTop: 10,
  },

  backButton: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1B1923',
  },

  subtitle: {
    fontSize: 18,
    color: '#AAA9B2',
    marginTop: 5,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop:10,
  },

  inputIconText: {
    fontSize: 18,
    marginRight: 14,
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

