
import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Alert
} from "react-native";

export default function Inicio() {
  const perfil = "aluno";

  const dados = {
    aluno: {
      nome: "Aluno",
      descricao: "Bem-vindo ao almoxarifado.",
      cards: [
        { titulo: "Materiais disponíveis", valor: "128" },
        { titulo: "Meus empréstimos", valor: "03" },
        { titulo: "Solicitações", valor: "02" }
      ],
      acoes: [
        { titulo: "Consultar materiais", descricao: "Ver itens disponíveis" },
        { titulo: "Solicitar empréstimo", descricao: "Escolher um material" },
        { titulo: "Meus empréstimos", descricao: "Acompanhar minhas solicitações" },
        { titulo: "Histórico", descricao: "Ver movimentações anteriores" }
      ]
    },

    professor: {
      nome: "Professor",
      descricao: "Bem-vindo ao almoxarifado.",
      cards: [
        { titulo: "Materiais disponíveis", valor: "128" },
        { titulo: "Empréstimos ativos", valor: "08" },
        { titulo: "Devoluções pendentes", valor: "03" }
      ],
      acoes: [
        { titulo: "Consultar materiais", descricao: "Ver itens disponíveis" },
        { titulo: "Solicitar empréstimo", descricao: "Escolher materiais" },
        { titulo: "Devoluções", descricao: "Conferir materiais devolvidos" },
        { titulo: "Ocorrências", descricao: "Ver problemas registrados" }
      ]
    },

    administrador: {
      nome: "Administrador",
      descricao: "Bem-vindo ao almoxarifado.",
      cards: [
        { titulo: "Materiais cadastrados", valor: "128" },
        { titulo: "Estoque baixo", valor: "05" },
        { titulo: "Empréstimos ativos", valor: "08" }
      ],
      acoes: [
        { titulo: "Consultar inventário", descricao: "Ver e editar materiais" },
        { titulo: "Cadastrar material", descricao: "Adicionar itens ao estoque" },
        { titulo: "Empréstimos", descricao: "Acompanhar retiradas e devoluções" },
        { titulo: "Usuários e salas", descricao: "Gerenciar cadastros" }
      ]
    }
  };

  const usuario = dados[perfil];

  function abrirTela(titulo) {
    Alert.alert(titulo, "Tela em desenvolvimento.");
  }

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View style={Styles.header}>
        <Image
          source={require("../../assets/logoSenai.png")}
          style={Styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={Styles.profile}
          onPress={() => abrirTela("Meu perfil")}
        >
          <Text style={Styles.profileText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.content}>
          <View style={Styles.welcome}>
            <Text style={Styles.greeting}>Olá, {usuario.nome}!</Text>
            <Text style={Styles.subtitle}>{usuario.descricao}</Text>
          </View>

          <View style={Styles.summary}>
            <Text style={Styles.sectionTitle}>Resumo</Text>

            {usuario.cards.map((card, index) => (
              <View key={index} style={Styles.summaryItem}>
                <Text style={Styles.summaryName}>{card.titulo}</Text>
                <Text style={Styles.summaryValue}>{card.valor}</Text>
              </View>
            ))}
          </View>

          <View style={Styles.menu}>
            <Text style={Styles.sectionTitle}>Acessar</Text>

            {usuario.acoes.map((acao, index) => (
              <TouchableOpacity
                key={index}
                style={Styles.menuItem}
                activeOpacity={0.6}
                onPress={() => abrirTela(acao.titulo)}
              >
                <View style={Styles.menuInfo}>
                  <Text style={Styles.menuTitle}>{acao.titulo}</Text>
                  <Text style={Styles.menuDescription}>{acao.descricao}</Text>
                </View>

                <Text style={Styles.arrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={Styles.footer}>
          <Text style={Styles.footerText}>Almoxarifado SENAI</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  header: {
    height: 75,
    paddingHorizontal: 22,
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE"
  },

  logo: {
    width: 85,
    height: 42
  },

  profile: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    backgroundColor: "#F4F4F4",
    borderRadius: 5
  },

  profileText: {
    color: "#444444",
    fontSize: 12
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 30
  },

  welcome: {
    marginBottom: 30
  },

  greeting: {
    fontSize: 25,
    fontWeight: "700",
    color: "#292929"
  },

  subtitle: {
    fontSize: 13,
    color: "#888888",
    marginTop: 7
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 12
  },

  summary: {
    marginBottom: 30
  },

  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE"
  },

  summaryName: {
    color: "#555555",
    fontSize: 13
  },

  summaryValue: {
    color: "#E30613",
    fontSize: 16,
    fontWeight: "700"
  },

  menu: {
    marginBottom: 15
  },

  menuItem: {
    minHeight: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingVertical: 12
  },

  menuInfo: {
    flex: 1
  },

  menuTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333"
  },

  menuDescription: {
    fontSize: 11,
    color: "#888888",
    marginTop: 5
  },

  arrow: {
    color: "#999999",
    fontSize: 24,
    marginLeft: 10
  },

  footer: {
    paddingVertical: 25,
    alignItems: "center"
  },

  footerText: {
    color: "#AAAAAA",
    fontSize: 11
  }
});
