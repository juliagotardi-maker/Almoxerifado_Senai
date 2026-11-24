import React from "react";
import { Text, View } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
const indicadores=[["1.248","Total de materiais"],["312","Empréstimos"],["287","Devoluções"],["12","Notificações"]];
export default function Relatorios(){
 return <TelaBase title="Relatórios" subtitle="Visualize indicadores gerais do almoxarifado.">
  <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
   {indicadores.map(([v,t])=><View key={t} style={[UI.card,{width:"48%",alignItems:"center"}]}><Text style={{fontSize:23,fontWeight:"900",color:UI.red}}>{v}</Text><Text style={{fontSize:10,color:UI.muted,textAlign:"center",marginTop:5}}>{t}</Text></View>)}
  </View>
  <View style={UI.card}><Text style={UI.h2}>Materiais por categoria</Text>{[["Informática",36],["Equipamentos",30],["Elétrica",20],["Outros",14]].map(([nome,p])=><View key={nome} style={{marginVertical:8}}><View style={UI.row}><Text style={{fontSize:11,color:UI.ink}}>{nome}</Text><Text style={{fontSize:11,fontWeight:"800",color:UI.red}}>{p}%</Text></View><View style={{height:8,backgroundColor:"#EEEEEE",borderRadius:8,marginTop:5}}><View style={{height:8,width:`${p}%`,backgroundColor:UI.red,borderRadius:8}}/></View></View>)}</View>
  <View style={UI.card}><Text style={UI.h2}>Resumo</Text><Text style={{fontSize:11,color:UI.muted,lineHeight:18}}>Os indicadores são demonstrativos e deverão ser alimentados pelos registros reais após a conexão com a API e o banco de dados.</Text></View>
 </TelaBase>;
}
