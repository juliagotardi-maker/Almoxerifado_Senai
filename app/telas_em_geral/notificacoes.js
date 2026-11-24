import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
const dados=[["⚠","Estoque baixo: Extensão elétrica","Restam apenas 3 unidades.","Alerta"],["◷","Empréstimo próximo do vencimento","Notebook Dell — conferir prazo de devolução.","Prazo"],["✓","Devolução registrada","Projetor Epson devolvido ao almoxarifado.","Concluído"]];
export default function Notificacoes(){
 const [lidas,setLidas]=useState([]);
 return <TelaBase title="Notificações" subtitle="Avisos de prazos, estoque baixo e ocorrências.">
  {dados.map(([ico,titulo,desc,tipo],i)=><TouchableOpacity key={titulo} style={UI.card} onPress={()=>setLidas([...lidas,i])}><View style={UI.row}><Text style={{fontSize:20,color:UI.red}}>{ico}</Text><Text style={{fontSize:9,color:UI.muted}}>{lidas.includes(i)?"Lida":"Não lida"}</Text></View><Text style={{fontWeight:"800",color:UI.ink,marginTop:8}}>{titulo}</Text><Text style={{fontSize:11,color:UI.muted,marginTop:5}}>{desc}</Text><Text style={{fontSize:9,color:UI.red,marginTop:8}}>{tipo}</Text></TouchableOpacity>)}
  <Text style={{fontSize:10,color:UI.muted,textAlign:"center"}}>{lidas.length} de {dados.length} notificações marcadas como lidas</Text>
 </TelaBase>;
}
