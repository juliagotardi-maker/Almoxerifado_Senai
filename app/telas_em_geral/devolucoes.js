import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
import { Campo, Botao } from "../../components/Helpers";
export default function Devolucoes(){
 const [codigo,setCodigo]=useState(""),[data,setData]=useState(""),[obs,setObs]=useState("");
 function registrar(){if(!codigo.trim()||!data.trim()){Alert.alert("Atenção","Informe o código do empréstimo e a data da devolução.");return;}Alert.alert("Devolução registrada", "Registro demonstrativo concluído. A atualização do estoque será conectada à API.");setCodigo("");setObs("");}
 return <TelaBase title="Devoluções" subtitle="Registre e acompanhe a devolução dos materiais emprestados.">
  <View style={UI.card}><Text style={UI.h2}>Registrar devolução</Text><Campo label="Código do empréstimo *" value={codigo} onChangeText={setCodigo} placeholder="Ex.: EMP001"/><Campo label="Data da devolução *" value={data} onChangeText={setData} placeholder="DD/MM/AAAA"/><Campo label="Observações" value={obs} onChangeText={setObs} placeholder="Estado do material ou observações"/><Botao title="Registrar devolução" onPress={registrar}/></View>
  <View style={UI.card}><Text style={UI.h2}>Acompanhamento</Text><Text style={{fontSize:12,color:UI.ink}}>EMP003 • Cabo HDMI</Text><Text style={{fontSize:10,color:UI.red,marginTop:5}}>Devolução pendente de conferência</Text></View>
 </TelaBase>;
}
