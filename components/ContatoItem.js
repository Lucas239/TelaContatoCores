import React from 'react';
import{Text, StyleSheet, TouchableOpacity} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

const ContatoItem =(props) =>{
    return(
        <TouchableOpacity onLongPress={props.onDelete.bind(this,props.chave)}> 
            <Cartao estilos={estilos.itemNaLista}>
                <Text>({props.id})Nome: {props.nome}</Text>
                <Text>       Telefone: {props.numero}</Text>
            </Cartao>
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    itemNaLista:{
        width:Medidas.itemWidth,
        maxWidth:Medidas.itemMaxW,
        alignItems:Medidas.alignGeral,
        backgroundColor:Cores.backItemNa,
        flex:Medidas.itemflex,
        margin:Medidas.itemMargin,
        padding:Medidas.itemPadding,
        borderColor:Cores.backItemNo,
        borderWidth:1,
        marginBottom:8,
        borderRadius:5
      }
});
export default ContatoItem;