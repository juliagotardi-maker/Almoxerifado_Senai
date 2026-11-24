import React, { useMemo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import TelaBase, { UI } from "./TelaBase";

const materiaisIniciais = [
  { codigo:"MAT001", nome:"Notebook Dell", categoria:"Informática", quantidade:10, local:"Lab. TI", status:"Em estoque" },
  { codigo:"MAT002", nome:"Mouse sem fio", categoria:"Informática", quantidade:25, local:"Lab. TI", status:"Em estoque" },
  { codigo:"MAT003", nome:"Cabo HDMI", categoria:"Acessórios", quantidade:30, local:"Sala 1", status:"Em estoque" },
  { codigo:"MAT004", nome:"Projetor Epson", categoria:"Equipamentos", quantidade:5, local:"Auditório", status:"Em estoque" },
  { codigo:"MAT005", nome:"Extensão elétrica", categoria:"Elétrica", quantidade:3, local:"Sala 2", status:"Estoque baixo" },
];

export function Campo({ label, value, onChangeText, placeholder, keyboardType }) {
  return <View><Text style={UI.label}>{label}</Text><TextInput style={UI.input} value={value} onChangeText={onChangeText} placeholder={placeholder || label} keyboardType={keyboardType || "default"} /></View>;
}
export function Botao({ title, onPress, secondary }) {
  return <TouchableOpacity style={secondary ? UI.secondary : UI.button} onPress={onPress}><Text style={secondary ? UI.secondaryText : UI.buttonText}>{title}</Text></TouchableOpacity>;
}
export function Cartao({ children }) { return <View style={UI.card}>{children}</View>; }
export function TituloSecao({ children }) { return <Text style={UI.h2}>{children}</Text>; }
export { materiaisIniciais, TelaBase, UI, Alert, useMemo, useState, View, Text, TouchableOpacity };
