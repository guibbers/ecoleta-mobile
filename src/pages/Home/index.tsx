import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons'
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Home = () =>{
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();
  
  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }
  return(
    <KeyboardAvoidingView style={{flex: 1}}behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground source={require('../../assets/images/home-background.png')} imageStyle={{ width: 274, height: 368 }} style={styles.container}>
        <View style={styles.main}>
          <Image source={require('../../assets/images/logo.png')} />
          <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
          <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
        </View>
        <GestureHandlerRootView style={styles.footer}>
          <TextInput  onChangeText={text => setUf(text)} placeholder='Digite a UF' value={uf} maxLength={2} autoCapitalize='characters' autoCorrect={false} style={styles.input} />
          <TextInput value={city} onChangeText={text => setCity(text)} placeholder='Digite a Cidade' autoCorrect={false} style={styles.input} />
          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name='arrow-right' color={'#fff'} size={24} />
            </View>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </RectButton>
        </GestureHandlerRootView>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32    
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;