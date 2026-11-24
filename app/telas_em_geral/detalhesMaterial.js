import React from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TelaBase, UI, materiaisIniciais } from "../../components/Helpers";
import { Botao } from "../../components/Helpers";

export default function DetalhesMaterial() {
 const {codigo} = useLocalSearchParams();
 const m = materiaisIniciais.find(x=>x.codigo===codigo) || materiaisIniciais[0];
 const router=useRouter();
 return <TelaBase title="Detalhes do material" subtitle="Informações completas do item selecionado.">
  <View style={UI.card}>
   <Text style={{fontSize:34,textAlign:"center",margin:8}}>▣</Text>
   <Text style={{fontSize:19,fontWeight:"900",color:UI.ink,textAlign:"center"}}>{m.nome}</Text>
   <Text style={{textAlign:"center",color:UI.muted,fontSize:11,marginTop:5}}>{m.codigo}</Text>
   { [["Categoria",m.categoria],["Quantidade disponível",String(m.quantidade)],["Localização",m.local],["Status",m.status],["Descrição","Material utilizado nas atividades e laboratórios do SENAI."]].map(([a,b])=><View key={a} style={{paddingVertical:12,borderBottomWidth:1,borderColor:UI.line}}><Text style={UI.label}>{a}</Text><Text style={{fontSize:13,color:UI.ink,fontWeight:"600"}}>{b}</Text></View>)}
  </View>
  <Botao title="Solicitar empréstimo" onPress={()=>router.push("/telas_em_geral/emprestimos")}/>
  <Botao title="Voltar ao inventário" secondary onPress={()=>router.back()}/>
 </TelaBase>;
}
