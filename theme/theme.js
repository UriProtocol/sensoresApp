import { StyleSheet } from "react-native"

const colores = {
    'uno':'#BBD6B8',
    'dos':'#AEC2B6',
    'tres':'#94AF9F',
    'cuatro':'#DBE4C6',
    'cinco':'#ffffff',
    'seis':'#000000'
}

export const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: colores.tres,
    padding: 10
 }   
})