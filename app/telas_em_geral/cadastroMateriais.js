import React, { useState } from "react";
import { Alert } from "react-native";
import { TelaBase, UI } from "../../components/Helpers";
import { Campo, Botao } from "../../components/Helpers";

export default function CadastroMateriais(){
 const [tipo,setTipo]=useState("Material individual"),[nome,setNome]=useState(""),[codigo,setCodigo]=useState(""),[categoria,setCategoria]=useState(""),[quantidade,setQuantidade]=useState(""),[local,setLocal]=useState(""),[descricao,setDescricao]=useState("");
 function salvar(){if(!nome.trim()||!codigo.trim()||!quantidade.trim()||!local.trim()){Alert.alert("Campos obrigatórios","Preencha nome, código, quantidade e localização.");return;} Alert.alert("Cadastro validado",`${tipo} "${nome}" preenchido. A gravação definitiva será feita após integração com a API.`); }
 return <TelaBase title="Cadastro de materiais e kits" subtitle="Cadastre ou edite os itens do almoxarifado.">
  <View style={{flexDirection:"row",gap:8}}>{["Material individual","Kit de materiais"].map(t=><Botao key={t} title={t} secondary={tipo!==t} onPress={()=>setTipo(t)}/>)}</View>
  <View style={UI.card}>
   <Campo label="Nome do material/kit *" value={nome} onChangeText={setNome} placeholder="Ex.: Notebook Dell"/>
   <Campo label="Código *" value={codigo} onChangeText={setCodigo} placeholder="Ex.: MAT006"/>
   <Campo label="Categoria" value={categoria} onChangeText={setCategoria} placeholder="Ex.: Informática"/>
   <Campo label="Quantidade *" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" placeholder="Ex.: 10"/>
   <Campo label="Localização *" value={local} onChangeText={setLocal} placeholder="Ex.: Laboratório de TI"/>
   <Campo label="Descrição" value={descricao} onChangeText={setDescricao} placeholder="Descreva o item"/>
   <Botao title="Salvar cadastro" onPress={salvar}/>
  </View>
 </TelaBase>;
}
