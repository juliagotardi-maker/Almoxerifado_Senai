import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
import { Campo, Botao } from "../../components/Helpers";
export default function Usuarios(){
 const [lista,setLista]=useState([{nome:"Julia Gotardi",email:"julia@senai.com",perfil:"Administrador"},{nome:"Carlos Silva",email:"carlos@senai.com",perfil:"Operador"},{nome:"Maria Oliveira",email:"maria@senai.com",perfil:"Consulta"}]);
 const [nome,setNome]=useState(""),[email,setEmail]=useState(""),[perfil,setPerfil]=useState("Consulta"),[busca,setBusca]=useState("");
 function adicionar(){if(!nome.trim()||!email.trim()){Alert.alert("Atenção","Informe nome e e-mail.");return;}setLista([...lista,{nome,email,perfil}]);setNome("");setEmail("");}
 return <TelaBase title="Gerenciamento de usuários" subtitle="Cadastre, pesquise e administre os acessos ao sistema.">
  <View style={UI.card}><Text style={UI.h2}>Novo usuário</Text><Campo label="Nome" value={nome} onChangeText={setNome}/><Campo label="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address"/><Campo label="Perfil" value={perfil} onChangeText={setPerfil}/><Botao title="Adicionar usuário" onPress={adicionar}/></View>
  <TextInput style={[UI.input,{marginBottom:12}]} value={busca} onChangeText={setBusca} placeholder="Pesquisar usuário..."/>
  {lista.filter(u=>u.nome.toLowerCase().includes(busca.toLowerCase())).map((u,i)=><View key={u.email+i} style={UI.card}><Text style={{fontWeight:"800",color:UI.ink}}>{u.nome}</Text><Text style={{fontSize:10,color:UI.muted,marginTop:4}}>{u.email}</Text><View style={[UI.row,{marginTop:8}]}><Text style={{fontSize:10,color:UI.red,fontWeight:"700"}}>{u.perfil}</Text><TouchableOpacity onPress={()=>Alert.alert("Usuário",`A edição de ${u.nome} será conectada à API.`)}><Text style={{color:UI.red,fontSize:10,fontWeight:"700"}}>Editar</Text></TouchableOpacity></View></View>)}
 </TelaBase>;
}
