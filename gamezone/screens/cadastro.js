import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Cadatro() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Input with Nome, CPF, Data de Nascimento placeholder */}
        <TextInput placeholder="Nome" style={styles.cadastroInput} />
        <TextInput placeholder="CPF" style={styles.cadastroInput} />
        <TextInput placeholder="Data de Nascimento" style={styles.cadastroInput} />
        <TextInput placeholder="Telefone" style={styles.cadastroInput} />
        <TextInput placeholder="Email" style={styles.cadastroInput} />
        <TextInput placeholder="Qual é da da sua última menstruação?" style={styles.cadastroInput} />
        <TextInput placeholder="Você está grávida?" style={styles.cadastroInput} />
        <TextInput placeholder="Em situação de emergência ligar para?" style={styles.cadastroInput} />
        <TouchableOpacity style={styles.cadastroButton}>
          <Text style={styles.cadastroButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 5,
    width: 300,
  }
});