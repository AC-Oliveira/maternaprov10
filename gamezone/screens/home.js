import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard, Image, Dimensions  } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [reviews, setReviews] = useState([
  //   { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
  //   { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
  //   { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  // ]);

  // const addReview = (review) => {
  //   review.key = Math.random().toString();
  //   setReviews((currentReviews) => {
  //     return [review, ...currentReviews];
  //   });
  //   setModalOpen(false);
  // };

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width/16);
  const imageWidth = dimensions.width*2;
  return (
    <View style={globalStyles.container}>
  
      {/* <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24}
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} /> */}
      <View style={styles.homeContainer}>
        <Image source={require('../assets/img/materna_pro_logo.png')} style={{ height: '15%', width: '100%' }}/>
        <Text style={styles.homeText}>Acompanhamento pré-natal odontológico e educação em saúde da gestante e do bebê.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>CADASTRO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4fc6e0',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fede32',//yellow
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 35,
    fontWeight: '400',
    color: '#4fc6e0',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});