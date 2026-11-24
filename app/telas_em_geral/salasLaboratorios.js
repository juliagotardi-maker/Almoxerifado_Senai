import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";

const salas=[["Laboratório de Informática","120 itens","Notebook, mouse, teclado e monitores"],["Laboratório de Eletrônica","85 itens","Multímetros, fontes e componentes"],["Sala de Projetos","63 itens","Kits e materiais de projetos"],["Auditório","40 itens","Projetor, caixas de som e extensões"]];
export default function SalasLaboratorios(){
 const [aberta,setAberta]=useState(0);
 return <TelaBase title="Salas e laboratórios" subtitle="Consulte os ambientes e os materiais associados.">
 {salas.map(([nome,qtd,desc],i)=><TouchableOpacity key={nome} style={UI.card} onPress={()=>setAberta(aberta===i?-1:i)}>
  <View style={UI.row}><View style={{flex:1}}><Text style={{fontWeight:"800",color:UI.ink}}>{nome}</Text><Text style={{fontSize:10,color:UI.muted,marginTop:5}}>Materiais: {qtd}</Text></View><Text style={{color:UI.red,fontSize:20}}>{aberta===i?"−":"›"}</Text></View>
  {aberta===i&&<Text style={{fontSize:11,color:UI.muted,marginTop:12,borderTopWidth:1,borderColor:UI.line,paddingTop:10}}>{desc}</Text>}
 </TouchableOpacity>)}
 </TelaBase>;
}
