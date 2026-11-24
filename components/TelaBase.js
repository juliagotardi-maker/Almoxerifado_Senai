import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Image
} from "react-native";
import { useRouter } from "expo-router";

const links = [
  ["Início", "/telas_em_geral/inicio"],
  ["Inventário", "/telas_em_geral/inventario"],
  ["Salas", "/telas_em_geral/salasLaboratorios"],
  ["Empréstimos", "/telas_em_geral/emprestimos"],
  ["Devoluções", "/telas_em_geral/devolucoes"],
  ["Notificações", "/telas_em_geral/notificacoes"],
  ["Perfil", "/telas_em_geral/perfil"],
  ["Usuários", "/telas_em_geral/usuarios"],
  ["Histórico", "/telas_em_geral/historico"],
  ["Relatórios", "/telas_em_geral/relatorios"],
];

export default function TelaBase({ title, subtitle, children }) {
  const router = useRouter();
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require("../assets/logoSenai.png")} style={s.logo} resizeMode="contain" />
        <View style={{flex: 1}}>
          <Text style={s.brand}>ALMOXARIFADO</Text>
          <Text style={s.brandSub}>SISTEMA DE GESTÃO SENAI</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/telas_em_geral/perfil")} style={s.avatar}>
          <Text style={s.avatarText}>♙</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.nav} contentContainerStyle={s.navContent}>
        {links.map(([label, path]) => (
          <TouchableOpacity key={path} style={s.navItem} onPress={() => router.push(path)}>
            <Text style={s.navText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
        <Text style={s.eyebrow}>SENAI • ALMOXARIFADO</Text>
        <Text style={s.title}>{title}</Text>
        {!!subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
        {children}
        <Text style={s.footer}>Ambiente seguro SENAI</Text>
      </ScrollView>
    </View>
  );
}

export const UI = {
  red: "#E30613",
  ink: "#292929",
  muted: "#777777",
  line: "#E7E7E7",
  pale: "#FFF2F2",
  gray: "#F6F6F6",
  card: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E7E7E7", borderRadius: 13, padding: 14, marginBottom: 12 },
  h2: { color: "#292929", fontSize: 15, fontWeight: "800", marginBottom: 10 },
  label: { color: "#444444", fontSize: 11, fontWeight: "700", marginBottom: 6, marginTop: 7 },
  input: { borderWidth: 1, borderColor: "#E2E2E2", backgroundColor: "#FAFAFA", borderRadius: 9, paddingHorizontal: 12, paddingVertical: 10, color: "#292929", fontSize: 12 },
  button: { backgroundColor: "#E30613", paddingVertical: 12, paddingHorizontal: 15, borderRadius: 9, alignItems: "center", marginTop: 9 },
  buttonText: { color: "#FFFFFF", fontWeight: "800", fontSize: 12 },
  secondary: { backgroundColor: "#FFF1F1", paddingVertical: 10, paddingHorizontal: 12, borderRadius: 9, alignItems: "center", marginTop: 8 },
  secondaryText: { color: "#E30613", fontWeight: "700", fontSize: 11 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 },
  pill: { backgroundColor: "#E6F5E9", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 20 },
  pillText: { color: "#26723A", fontSize: 10, fontWeight: "700" },
};

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: { minHeight: 76, paddingHorizontal: 17, paddingTop: 22, paddingBottom: 10, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEEEE", gap: 12 },
  logo: { width: 76, height: 38 },
  brand: { fontSize: 11, fontWeight: "900", color: "#333333", letterSpacing: 1 },
  brandSub: { fontSize: 8, color: "#888888", marginTop: 3, letterSpacing: .5 },
  avatar: { width: 34, height: 34, borderRadius: 18, backgroundColor: "#F4F4F4", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#E7E7E7" },
  avatarText: { color: "#555555", fontSize: 18 },
  nav: { maxHeight: 47, borderBottomWidth: 1, borderBottomColor: "#EEEEEE" },
  navContent: { paddingHorizontal: 10, alignItems: "center", gap: 7 },
  navItem: { backgroundColor: "#FFF1F1", borderRadius: 18, paddingHorizontal: 12, paddingVertical: 8 },
  navText: { color: "#B9000B", fontSize: 10, fontWeight: "700" },
  content: { padding: 18, paddingBottom: 35 },
  eyebrow: { color: "#E30613", fontSize: 9, fontWeight: "900", letterSpacing: 1.5, marginBottom: 5 },
  title: { color: "#222222", fontSize: 24, fontWeight: "900" },
  subtitle: { color: "#777777", fontSize: 11, lineHeight: 17, marginTop: 6, marginBottom: 17 },
  footer: { textAlign: "center", color: "#AAAAAA", fontSize: 9, marginTop: 20 },
});
