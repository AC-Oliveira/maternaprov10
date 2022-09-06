import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Consulta() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput placeholder="Data da Consulta" style={styles.cadastroInput} />
        <TouchableOpacity style={[styles.cadastroButton, {backgroundColor: 'white'}]}>
        <Text styles={[styles.cadastroInput, {fontWeight: 'bold'}]}>O que o dentista vai avaliar?</Text>
        <Text>Seus hábitos de higiene bucal, e alimentação diária.</Text>
        <Text>Avaliação clínica dos dentes e gengiva.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cadastroButton}>
          <Text style={styles.cadastroButtonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 25,
    justifyContent: "center",
  },
  cadastroButton: {
    flex: 1,
    backgroundColor: '#4fc6e0',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: '25%',
    marginTop: 5,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cadastroButtonText: {
    color: '#fede32'
  },
  cadastroInput: {
    borderWidth: 2,
    borderColor: "#4fc6e0",
    borderRadius: 5,
    padding: 8,
    marginHorizontal: '10%',
    width: '80%',

  }
});