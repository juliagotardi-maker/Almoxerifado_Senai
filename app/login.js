
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { router } from "expo-router";

export default function Login() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function entrar() {
    if (!matricula.trim() || !senha.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    router.replace("/telas_em_geral/inicio");
  }

  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={Styles.redDecoration} />

      <ScrollView
        contentContainerStyle={Styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={Styles.header}>
          <Image
            source={require("../assets/logoSenai.png")}
            style={Styles.logo}
            resizeMode="contain"
          />

          <View style={Styles.logoDivider} />

          <Text style={Styles.headerText}>INVENTÁRIO</Text>
        </View>

        <View style={Styles.content}>
          <Text style={Styles.eyebrow}>GESTÃO INTELIGENTE</Text>

          <Text style={Styles.title}>Bem-vindo de volta</Text>

          <Text style={Styles.subtitle}>
            Acesse para gerenciar materiais, equipamentos e kits dos laboratórios.
          </Text>

          <View style={Styles.form}>
            <Text style={Styles.label}>Matrícula</Text>

            <View style={Styles.inputContainer}>
              <Text style={Styles.inputIcon}>♙</Text>

              <TextInput
                style={Styles.input}
                placeholder="Digite sua matrícula"
                placeholderTextColor="#A0A0A0"
                value={matricula}
                onChangeText={setMatricula}
                keyboardType="numeric"
              />
            </View>

            <Text style={Styles.label}>Senha</Text>

            <View style={Styles.inputContainer}>
              <Text style={Styles.inputIcon}>◷</Text>

              <TextInput
                style={Styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#A0A0A0"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!mostrarSenha}
              />

              <TouchableOpacity
                onPress={() => setMostrarSenha(!mostrarSenha)}
              >
                <Text style={Styles.eyeIcon}>
                  {mostrarSenha ? "◉" : "◎"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={Styles.button}
              onPress={entrar}
              activeOpacity={0.85}
            >
              <Text style={Styles.buttonText}>Entrar</Text>
              <Text style={Styles.buttonArrow}>›</Text>
            </TouchableOpacity>

            <View style={Styles.help}>
              <Text style={Styles.helpText}>
                Problemas com o acesso?
              </Text>

              <Text style={Styles.helpHighlight}>
                Fale com o administrador da sua unidade
              </Text>
            </View>
          </View>
        </View>

        <View style={Styles.footer}>
          <View style={Styles.secureIcon}>
            <Text style={Styles.check}>✓</Text>
          </View>

          <Text style={Styles.footerText}>
            Ambiente seguro SENAI
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 25,
  },

  redDecoration: {
    position: "absolute",
    top: -105,
    right: -105,
    width: 205,
    height: 205,
    borderRadius: 110,
    backgroundColor: "#E30613",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 48,
    height: 105,
    zIndex: 1,
  },

  logo: {
    width: 98,
    height: 42,
  },

  logoDivider: {
    width: 1,
    height: 23,
    backgroundColor: "#DADADA",
    marginHorizontal: 10,
  },

  headerText: {
    color: "#333333",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  content: {
    paddingHorizontal: 27,
    marginTop: 78,
  },

  eyebrow: {
    color: "#E30613",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 7,
  },

  title: {
    color: "#202020",
    fontSize: 25,
    fontWeight: "800",
    letterSpacing: -0.8,
  },

  subtitle: {
    color: "#777777",
    fontSize: 12,
    lineHeight: 20,
    marginTop: 9,
    marginBottom: 28,
  },

  form: {
    width: "100%",
  },

  label: {
    color: "#333333",
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 8,
    marginLeft: 2,
  },

  inputContainer: {
    height: 45,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    marginBottom: 17,
    backgroundColor: "#FAFAFA",
  },

  inputIcon: {
    color: "#999999",
    fontSize: 17,
    width: 24,
  },

  input: {
    flex: 1,
    height: "100%",
    color: "#333333",
    fontSize: 12,
    paddingHorizontal: 5,
  },

  eyeIcon: {
    color: "#888888",
    fontSize: 18,
    paddingHorizontal: 3,
  },

  button: {
    height: 48,
    backgroundColor: "#E30613",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 1,
    elevation: 5,
    shadowColor: "#E30613",
    shadowOpacity: 0.2,
    shadowRadius: 9,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  buttonArrow: {
    color: "#FFFFFF",
    fontSize: 23,
    position: "absolute",
    right: 20,
    top: 7,
  },

  help: {
    alignItems: "center",
    marginTop: 22,
  },

  helpText: {
    color: "#888888",
    fontSize: 10,
  },

  helpHighlight: {
    color: "#E30613",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 5,
    textAlign: "center",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 110,
    paddingBottom: 8,
  },

  secureIcon: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  check: {
    color: "#999999",
    fontSize: 10,
    fontWeight: "bold",
  },

  footerText: {
    color: "#999999",
    fontSize: 9,
  },
});
