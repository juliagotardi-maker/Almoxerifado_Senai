import React, { useState } from "react";
import { Text, View } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
const itens=[["27/10/2026","Devolução","Notebook Dell","Julia Gotardi"],["26/10/2026","Empréstimo","Projetor Epson","Carlos Silva"],["25/10/2026","Entrada","Mouse sem fio","Maria Oliveira"],["24/10/2026","Saída","Cabo HDMI","Julia Gotardi"]];
export default function Historico(){
 const [filtro,setFiltro]=useState("Todos");
 const lista=itens.filter(i=>filtro==="Todos"||i[1]===filtro);
 return <TelaBase title="Histórico e movimentações" subtitle="Acompanhe entradas, saídas, empréstimos e devoluções.">
  <View style={{flexDirection:"row",flexWrap:"wrap",gap:7,marginBottom:12}}>{["Todos","Entrada","Saída","Empréstimo","Devolução"].map(f=><Text key={f} onPress={()=>setFiltro(f)} style={{padding:9,borderRadius:8,overflow:"hidden",backgroundColor:filtro===f?UI.red:UI.pale,color:filtro===f?"#FFF":UI.red,fontSize:10,fontWeight:"700"}}>{f}</Text>)}</View>
  {lista.map((i,n)=><View key={n} style={UI.card}><Text style={{fontSize:10,color:UI.muted}}>{i[0]} • {i[1]}</Text><Text style={{fontWeight:"800",color:UI.ink,marginTop:6}}>{i[2]}</Text><Text style={{fontSize:10,color:UI.muted,marginTop:4}}>Responsável: {i[3]}</Text></View>)}
 </TelaBase>;
}
