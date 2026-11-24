import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { TelaBase, UI, materiaisIniciais } from "../../components/Helpers";
import { Campo, Botao } from "../../components/Helpers";

export default function LeitorQR(){
 const [codigo,setCodigo]=useState("");
 const [resultado,setResultado]=useState(null);
 function consultar(){const m=materiaisIniciais.find(x=>x.codigo.toLowerCase()===codigo.trim().toLowerCase());setResultado(m||null);if(!m)Alert.alert("Código não encontrado","Confira o código informado.");}
 return <TelaBase title="Leitor QR Code" subtitle="Identifique materiais pelo código. A leitura pela câmera poderá ser ativada na integração nativa.">
  <View style={[UI.card,{alignItems:"center",padding:25}]}>
   <Text style={{fontSize:64,color:UI.red}}>▦</Text><Text style={{fontWeight:"800",color:UI.ink,marginTop:8}}>Leitura de identificação</Text><Text style={{fontSize:10,color:UI.muted,textAlign:"center",marginTop:6}}>Informe abaixo o código impresso na etiqueta do material.</Text>
  </View>
  <View style={UI.card}><Campo label="Código do material" value={codigo} onChangeText={setCodigo} placeholder="Ex.: MAT001"/><Botao title="Consultar código" onPress={consultar}/></View>
  {resultado&&<View style={UI.card}><Text style={UI.h2}>Material identificado</Text><Text style={{fontWeight:"800",color:UI.ink}}>{resultado.nome}</Text><Text style={{fontSize:11,color:UI.muted,marginTop:6}}>{resultado.codigo} • {resultado.local} • Qtd.: {resultado.quantidade}</Text></View>}
 </TelaBase>;
}
