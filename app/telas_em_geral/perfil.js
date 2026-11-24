import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
import { Campo, Botao } from "../../components/Helpers";
export default function Perfil(){
 const [nome,setNome]=useState("Julia Gotardi"),[matricula,setMatricula]=useState("2026001"),[email,setEmail]=useState("julia@senai.com"),[cargo,setCargo]=useState("Estudante"),[setor,setSetor]=useState("TI");
 return <TelaBase title="Meu perfil" subtitle="Consulte e atualize suas informações de usuário.">
  <View style={[UI.card,{alignItems:"center"}]}><Text style={{fontSize:48,color:UI.red}}>♙</Text><Text style={{fontWeight:"900",fontSize:16,color:UI.ink}}>{nome}</Text><Text style={{fontSize:10,color:UI.muted,marginTop:4}}>{cargo}</Text></View>
  <View style={UI.card}><Campo label="Nome completo" value={nome} onChangeText={setNome}/><Campo label="Matrícula" value={matricula} onChangeText={setMatricula}/><Campo label="E-mail" value={email} onChangeText={setEmail}/><Campo label="Cargo / Perfil" value={cargo} onChangeText={setCargo}/><Campo label="Setor" value={setor} onChangeText={setSetor}/><Botao title="Salvar alterações" onPress={()=>Alert.alert("Perfil","Alterações mantidas nesta demonstração.")}/></View>
 </TelaBase>;
}
