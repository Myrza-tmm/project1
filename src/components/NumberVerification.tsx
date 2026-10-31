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

type Props = {
    onBack: ()=>void;
    onContinue: ()=>void;
};

export default function NumberVerification({onBack,onContinue}:Props){
    const [code,setCode] = useState(['','','','']);
    const inputRefs = useRef<(TextInput|null)[]>([]);
    const handleChange = (text: string, index: number) => {
        const value = text.replace(/[^0-9]/g,'').slice(-1);
        const newCode = [...code];
        newCode [index] = value;
        setCode(newCode);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (event:any,index:number)=>{
        if(
            event.nativeEvent.key === 'Backspace' &&
            code[index] === '' &&
            index > 0
        ){
            inputRefs.current[index - 1]?.focus ();
        }
    };

  return(
    <SafeAreaView style={styles.SafeArea}>
        <StatusBar style = "dark"/>

        <View style={styles.container}> 
            <Pressable 
            style={styles.backButton} 
            onPress={()=>{console.log('Артқа басылды'); onBack();
            }}
            >
            <Text style={styles.backButtonText}>←</Text>      
            </Pressable>

            <Text style={styles.title}>Подтвердить номер</Text>
            <Text style={styles.subtitle}>Мы только что отправили код на</Text>

            <View style={styles.codeContainer}>
                {code.map ((value, index) =>(
                    <TextInput key={index} 
                    ref={(ref: TextInput | null)=>{inputRefs.current[index] = ref;  
                    }}
                    style={styles.codeInput}
                    value={value}
                    onChangeText={(text) => handleChange (text, index)}
                    onKeyPress={(event) => handleKeyPress (event, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    textAlign="center"
                    />
                ))}
                

            </View>

            <View>
                <Pressable style={styles.continueButton}
                onPress = {onContinue}
                >
                <Text style={styles.continueButtonText}>Продолжить</Text>

                </Pressable>
                
            </View>

            <View>
                <Pressable style = {styles.registerContainer}
                onPress = {() => console.log('Отправить код еще раз басылды')}>
                <Text style = {styles.registerText}>
                Отправить код еще раз 
                </Text>
                </Pressable>
            </View>

        </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
   SafeArea: {
    flex: 1,
    backgroundColor:'#FFFFFF',
   },

   container:{
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
    color:'#1B1923',
   },

   subtitle: {
    fontSize: 18,
    color: '#AAA9B2',
    marginTop: 5,
   },

   codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:30,
  },

  codeInput: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor:'#E0E0E5',
    borderRadius: 14,
    backgroundColor:'#F8F8FA',
    color:'#1B1923',
    fontSize: 24,
    fontWeight: '600',
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

  registerContainer: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

   registerText: {
    color:'#9CA3AF',
    fontSize:16,
  },

});