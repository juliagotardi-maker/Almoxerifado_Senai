import React, { useMemo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { TelaBase, UI, materiaisIniciais } from "../../components/Helpers";

export default function Inventario() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const router = useRouter();
  const lista = useMemo(() => materiaisIniciais.filter(m =>
    (m.nome.toLowerCase().includes(busca.toLowerCase()) || m.codigo.toLowerCase().includes(busca.toLowerCase())) &&
    (categoria === "Todas" || m.categoria === categoria)
  ), [busca, categoria]);
  return <TelaBase title="Inventário" subtitle="Consulte, pesquise e filtre os materiais cadastrados.">
    <TextInput style={UI.input} value={busca} onChangeText={setBusca} placeholder="Buscar por nome ou código..." />
    <View style={{flexDirection:"row", flexWrap:"wrap", gap:7, marginVertical:12}}>
      {["Todas","Informática","Acessórios","Equipamentos","Elétrica"].map(c => <TouchableOpacity key={c} onPress={() => setCategoria(c)} style={{backgroundColor:categoria===c?UI.red:UI.pale, padding:9, borderRadius:8}}><Text style={{fontSize:10, color:categoria===c?"#FFF":UI.red, fontWeight:"700"}}>{c}</Text></TouchableOpacity>)}
    </View>
    <Text style={UI.h2}>{lista.length} materiais encontrados</Text>
    {lista.map(m => <TouchableOpacity key={m.codigo} style={UI.card} onPress={() => router.push({pathname:"/telas_em_geral/detalhesMaterial", params:{codigo:m.codigo}})}>
      <View style={UI.row}><Text style={{fontWeight:"800", color:UI.ink}}>{m.nome}</Text><Text style={{fontSize:10,color:UI.red}}>Ver detalhes ›</Text></View>
      <Text style={{fontSize:10,color:UI.muted,marginTop:6}}>{m.codigo} • {m.categoria}</Text>
      <View style={[UI.row,{marginTop:9}]}><Text style={{fontSize:11}}>Quantidade: {m.quantidade}</Text><Text style={{fontSize:10,color:m.quantidade<=5?UI.red:"#26723A",fontWeight:"700"}}>{m.status}</Text></View>
      <Text style={{fontSize:10,color:UI.muted,marginTop:4}}>Localização: {m.local}</Text>
    </TouchableOpacity>)}
  </TelaBase>;
}
