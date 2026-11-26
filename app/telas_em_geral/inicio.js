
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Inicio() {
  const router = useRouter();

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
        {
          titulo: "Consultar inventário",
          descricao: "Veja os materiais disponíveis",
          icone: "▤",
          rota: "/telas_em_geral/inventario"
        },
        {
          titulo: "Solicitar empréstimo",
          descricao: "Peça um material ao almoxarifado",
          icone: "＋",
          rota: "/telas_em_geral/emprestimos"
        },
        {
          titulo: "Meus empréstimos",
          descricao: "Acompanhe suas solicitações",
          icone: "⇄",
          rota: "/telas_em_geral/emprestimos"
        },
        {
          titulo: "Histórico",
          descricao: "Consulte suas movimentações",
          icone: "◷",
          rota: "/telas_em_geral/historico"
        }
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
        {
          titulo: "Consultar inventário",
          descricao: "Veja os materiais disponíveis",
          icone: "▤",
          rota: "/telas_em_geral/inventario"
        },
        {
          titulo: "Solicitar empréstimo",
          descricao: "Solicite materiais para suas atividades",
          icone: "＋",
          rota: "/telas_em_geral/emprestimos"
        },
        {
          titulo: "Conferir devoluções",
          descricao: "Acompanhe as devoluções pendentes",
          icone: "✓",
          rota: "/telas_em_geral/devolucoes"
        },
        {
          titulo: "Ocorrências",
          descricao: "Consulte os registros",
          icone: "!",
          rota: "/telas_em_geral/relatorios"
        }
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
        {
          titulo: "Gerenciar inventário",
          descricao: "Controle os materiais cadastrados",
          icone: "▤",
          rota: "/telas_em_geral/inventario"
        },
        {
          titulo: "Leitor de QR Code",
          descricao: "Consulte materiais usando um código QR",
          icone: "▦",
          rota: "/telas_em_geral/leitorQR"
        },
        {
          titulo: "Cadastrar materiais",
          descricao: "Adicione novos itens ao estoque",
          icone: "＋",
          rota: "/telas_em_geral/cadastroMateriais"
        },
        {
          titulo: "Controle de empréstimos",
          descricao: "Acompanhe retiradas e devoluções",
          icone: "⇄",
          rota: "/telas_em_geral/emprestimos"
        },
        {
          titulo: "Usuários e salas",
          descricao: "Gerencie os cadastros",
          icone: "♙",
          rota: "/telas_em_geral/usuarios"
        }
      ]
    }
  };

  const usuario = dados[perfil];

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scroll}
      >
        <View style={Styles.header}>
          <View style={Styles.headerLeft}>
            <Image
              source={require("../../assets/logoSenai.png")}
              style={Styles.logo}
              resizeMode="contain"
            />

            <View style={Styles.divider} />

            <Text style={Styles.headerLabel}>ALMOXARIFADO</Text>
          </View>

          <TouchableOpacity
            style={Styles.profileButton}
            onPress={() => router.push("/telas_em_geral/perfil")}
          >
            <Text style={Styles.profileIcon}>♙</Text>
          </TouchableOpacity>
        </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.content}>
          <View style={Styles.welcome}>
            <Text style={Styles.eyebrow}>PAINEL INICIAL</Text>

            <Text style={Styles.title}>
              Olá, {usuario.nome}!
            </Text>

            <Text style={Styles.subtitle}>
              {usuario.descricao}
            </Text>
          </View>

          <View style={Styles.sectionHeader}>
            <Text style={Styles.sectionTitle}>Visão geral</Text>
            <Text style={Styles.sectionCaption}>Resumo do sistema</Text>
          </View>

          <View style={Styles.stats}>
            {usuario.cards.map((card, index) => (
              <View key={index} style={Styles.statCard}>
                <View style={Styles.statIcon}>
                  <Text style={Styles.statIconText}>{card.icone}</Text>
                </View>

                <Text style={Styles.statValue}>{card.valor}</Text>
                <Text style={Styles.statTitle}>{card.titulo}</Text>
              </View>
            ))}
          </View>

          <View style={Styles.sectionHeader}>
            <Text style={Styles.sectionTitle}>Acesso rápido</Text>
            <Text style={Styles.sectionCaption}>O que deseja fazer?</Text>
          </View>

          <View style={Styles.actions}>
            {usuario.acoes.map((acao, index) => (
              <TouchableOpacity
                key={index}
                style={Styles.actionCard}
                activeOpacity={0.75}
                onPress={() => router.push(acao.rota)}
              >
                <View style={Styles.actionIcon}>
                  <Text style={Styles.actionIconText}>{acao.icone}</Text>
                </View>

                <View style={Styles.actionInfo}>
                  <Text style={Styles.actionTitle}>{acao.titulo}</Text>
                  <Text style={Styles.actionDescription}>
                    {acao.descricao}
                  </Text>
                </View>

                <Text style={Styles.actionArrow}>›</Text>
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
    borderBottomColor: "#EEEEEE",
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

  statIcon: {
    width: 29,
    height: 29,
    borderRadius: 8,
    backgroundColor: "#FFF0F0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
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

  noticeText: {
    color: "#888888",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 4,
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
