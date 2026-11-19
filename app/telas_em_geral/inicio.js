
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
      descricao: "Acompanhe seus materiais e empréstimos.",
      cards: [
        { titulo: "Materiais disponíveis", valor: "128", icone: "▤" },
        { titulo: "Meus empréstimos", valor: "03", icone: "⇄" },
        { titulo: "Solicitações", valor: "02", icone: "◷" }
      ],
      acoes: [
        { titulo: "Consultar inventário", descricao: "Veja os materiais disponíveis", icone: "▤" },
        { titulo: "Solicitar empréstimo", descricao: "Peça um material ao almoxarifado", icone: "＋" },
        { titulo: "Meus empréstimos", descricao: "Acompanhe suas solicitações", icone: "⇄" },
        { titulo: "Histórico", descricao: "Consulte suas movimentações", icone: "◷" }
      ]
    },

    professor: {
      nome: "Professor",
      descricao: "Acompanhe materiais e movimentações.",
      cards: [
        { titulo: "Materiais disponíveis", valor: "128", icone: "▤" },
        { titulo: "Empréstimos ativos", valor: "08", icone: "⇄" },
        { titulo: "Devoluções pendentes", valor: "03", icone: "◷" }
      ],
      acoes: [
        { titulo: "Consultar inventário", descricao: "Veja os materiais disponíveis", icone: "▤" },
        { titulo: "Solicitar empréstimo", descricao: "Solicite materiais para suas atividades", icone: "＋" },
        { titulo: "Conferir devoluções", descricao: "Acompanhe as devoluções pendentes", icone: "✓" },
        { titulo: "Ocorrências", descricao: "Consulte problemas registrados", icone: "!" }
      ]
    },

    administrador: {
      nome: "Administrador",
      descricao: "Gerencie o estoque e acompanhe o almoxarifado.",
      cards: [
        { titulo: "Total de materiais", valor: "128", icone: "▤" },
        { titulo: "Estoque baixo", valor: "05", icone: "!" },
        { titulo: "Empréstimos ativos", valor: "08", icone: "⇄" }
      ],
      acoes: [
        { titulo: "Gerenciar inventário", descricao: "Controle os materiais cadastrados", icone: "▤" },
        { titulo: "Cadastrar materiais", descricao: "Adicione novos itens ao estoque", icone: "＋" },
        { titulo: "Controle de empréstimos", descricao: "Acompanhe retiradas e devoluções", icone: "⇄" },
        { titulo: "Usuários e salas", descricao: "Gerencie os cadastros do sistema", icone: "♙" }
      ]
    }
  };

  const usuario = dados[perfil];

  function abrirTela(titulo) {
    Alert.alert(titulo, "Esta funcionalidade será desenvolvida.");
  }

  return (
    <View style={Styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scroll}
      >
        <View style={Styles.header}>
          <View style={Styles.headerLeft}>
            <Image
              source={require("../assets/logo-senai.png")}
              style={Styles.logo}
              resizeMode="contain"
            />

            <View style={Styles.divider} />

            <Text style={Styles.headerLabel}>
              ALMOXARIFADO
            </Text>
          </View>

          <TouchableOpacity
            style={Styles.profileButton}
            onPress={() => abrirTela("Meu perfil")}
          >
            <Text style={Styles.profileIcon}>♙</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.content}>
          <View style={Styles.welcome}>
            <View>
              <Text style={Styles.eyebrow}>
                PAINEL INICIAL
              </Text>

              <Text style={Styles.title}>
                Olá, {usuario.nome}!
              </Text>

              <Text style={Styles.subtitle}>
                {usuario.descricao}
              </Text>
            </View>
          </View>

          <View style={Styles.sectionHeader}>
            <Text style={Styles.sectionTitle}>
              Visão geral
            </Text>

            <Text style={Styles.sectionCaption}>
              Resumo do sistema
            </Text>
          </View>

          <View style={Styles.stats}>
            {usuario.cards.map((card, index) => (
              <View
                key={index}
                style={Styles.statCard}
              >
                <View style={Styles.statTop}>
                  <View style={Styles.statIcon}>
                    <Text style={Styles.statIconText}>
                      {card.icone}
                    </Text>
                  </View>
                </View>

                <Text style={Styles.statValue}>
                  {card.valor}
                </Text>

                <Text style={Styles.statTitle}>
                  {card.titulo}
                </Text>
              </View>
            ))}
          </View>

          <View style={Styles.sectionHeader}>
            <Text style={Styles.sectionTitle}>
              Acesso rápido
            </Text>

            <Text style={Styles.sectionCaption}>
              O que deseja fazer?
            </Text>
          </View>

          <View style={Styles.actions}>
            {usuario.acoes.map((acao, index) => (
              <TouchableOpacity
                key={index}
                style={Styles.actionCard}
                activeOpacity={0.75}
                onPress={() => abrirTela(acao.titulo)}
              >
                <View style={Styles.actionIcon}>
                  <Text style={Styles.actionIconText}>
                    {acao.icone}
                  </Text>
                </View>

                <View style={Styles.actionInfo}>
                  <Text style={Styles.actionTitle}>
                    {acao.titulo}
                  </Text>

                  <Text style={Styles.actionDescription}>
                    {acao.descricao}
                  </Text>
                </View>

                <Text style={Styles.actionArrow}>
                  ›
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={Styles.notice}>
            <View style={Styles.noticeIcon}>
              <Text style={Styles.noticeIconText}>i</Text>
            </View>

            <View style={Styles.noticeInfo}>
              <Text style={Styles.noticeTitle}>
                Informações do almoxarifado
              </Text>

              <Text style={Styles.noticeText}>
                Consulte o inventário para verificar a disponibilidade dos materiais.
              </Text>
            </View>
          </View>
        </View>

        <View style={Styles.footer}>
          <Text style={Styles.footerText}>
            Ambiente seguro SENAI
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    paddingBottom: 25,
  },

  header: {
    height: 85,
    paddingHorizontal: 23,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 83,
    height: 38,
  },

  divider: {
    width: 1,
    height: 23,
    backgroundColor: "#DDDDDD",
    marginHorizontal: 10,
  },

  headerLabel: {
    fontSize: 9,
    color: "#333333",
    fontWeight: "800",
    letterSpacing: 1,
  },

  profileButton: {
    width: 37,
    height: 37,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  profileIcon: {
    fontSize: 19,
    color: "#555555",
  },

  content: {
    paddingHorizontal: 23,
    paddingTop: 30,
  },

  welcome: {
    marginBottom: 30,
  },

  eyebrow: {
    color: "#E30613",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#222222",
  },

  subtitle: {
    fontSize: 12,
    color: "#888888",
    marginTop: 8,
    lineHeight: 19,
  },

  sectionHeader: {
    marginBottom: 14,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#292929",
  },

  sectionCaption: {
    color: "#999999",
    fontSize: 11,
    marginTop: 4,
  },

  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 29,
  },

  statCard: {
    width: "31.5%",
    minHeight: 115,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 12,
    padding: 11,
    marginBottom: 5,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  statTop: {
    marginBottom: 9,
  },

  statIcon: {
    width: 29,
    height: 29,
    borderRadius: 8,
    backgroundColor: "#FFF0F0",
    alignItems: "center",
    justifyContent: "center",
  },

  statIconText: {
    color: "#E30613",
    fontSize: 16,
    fontWeight: "700",
  },

  statValue: {
    color: "#252525",
    fontSize: 21,
    fontWeight: "800",
  },

  statTitle: {
    color: "#888888",
    fontSize: 9,
    lineHeight: 13,
    marginTop: 4,
  },

  actions: {
    gap: 11,
    marginBottom: 25,
  },

  actionCard: {
    minHeight: 72,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    backgroundColor: "#FFFFFF",
  },

  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#FFF0F0",
    alignItems: "center",
    justifyContent: "center",
  },

  actionIconText: {
    color: "#E30613",
    fontSize: 20,
    fontWeight: "700",
  },

  actionInfo: {
    flex: 1,
    marginLeft: 13,
  },

  actionTitle: {
    color: "#333333",
    fontSize: 12,
    fontWeight: "700",
  },

  actionDescription: {
    color: "#999999",
    fontSize: 10,
    marginTop: 5,
  },

  actionArrow: {
    color: "#BBBBBB",
    fontSize: 25,
    marginLeft: 5,
  },

  notice: {
    backgroundColor: "#FFF7F7",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F9E1E1",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  noticeIcon: {
    width: 27,
    height: 27,
    borderRadius: 15,
    backgroundColor: "#E30613",
    alignItems: "center",
    justifyContent: "center",
  },

  noticeIconText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  noticeInfo: {
    flex: 1,
    marginLeft: 11,
  },

  noticeTitle: {
    color: "#333333",
    fontSize: 11,
    fontWeight: "700",
  },

  noticeText: {
    color: "#888888", 
    fontSize: 10,
    lineHeight: 15,
    marginTop: 4,
  },

  footer: {
    alignItems: "center",
    marginTop: 30,
  },

  footerText: {
    color: "#AAAAAA",
    fontSize: 10,
  },
});
