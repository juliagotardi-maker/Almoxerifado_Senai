import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
import { Campo, Botao } from "../../components/Helpers";

const iniciais=[["EMP001","Notebook Dell","20/11/2026","Ativo"],["EMP002","Projetor Epson","18/11/2026","Ativo"],["EMP003","Cabo HDMI","15/11/2026","Pendente"]];
export default function Emprestimos(){
 const [material,setMaterial]=useState(""),[matricula,setMatricula]=useState(""),[data,setData]=useState("");
 function solicitar(){if(!material.trim()||!matricula.trim()||!data.trim()){Alert.alert("Atenção","Preencha material, matrícula e previsão de devolução.");return;}Alert.alert("Solicitação registrada", "A solicitação foi validada localmente. A confirmação dependerá do almoxarife.");}
 return <TelaBase title="Empréstimos" subtitle="Consulte empréstimos e registre novas solicitações.">
  <View style={UI.card}><Text style={UI.h2}>Solicitar empréstimo</Text><Campo label="Material desejado" value={material} onChangeText={setMaterial} placeholder="Nome ou código do material"/><Campo label="Matrícula do solicitante" value={matricula} onChangeText={setMatricula} keyboardType="numeric"/><Campo label="Previsão de devolução" value={data} onChangeText={setData} placeholder="DD/MM/AAAA"/><Botao title="Enviar solicitação" onPress={solicitar}/></View>
  <Text style={UI.h2}>Empréstimos recentes</Text>
  {iniciais.map(([cod,nome,dt,status])=><View key={cod} style={UI.card}><View style={UI.row}><Text style={{fontWeight:"800",color:UI.ink}}>{nome}</Text><Text style={{fontSize:10,color:"#26723A",fontWeight:"700"}}>{status}</Text></View><Text style={{fontSize:10,color:UI.muted,marginTop:6}}>{cod} • Retirada: {dt}</Text></View>)}
 </TelaBase>;
}
