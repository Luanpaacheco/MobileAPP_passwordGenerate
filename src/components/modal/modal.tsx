import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';



export function ModalPassword(){

    function copy(){
        console.log("Senha copiada")
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <View style={styles.passwordContent}>
                    <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>123456</Text> 
                    </Pressable>
                    <TouchableOpacity style={styles.copy} onPress={copy}>
                            <Text style={styles.copy_text}>copy</Text>
                            
                          </TouchableOpacity>
                </View>
                



            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex:1,
        justifyContent: "center",   
        alignItems: "center",
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    innerPassword:{

    },text:{
        fontSize: 20,
        fontWeight: "bold",
        color: "gray"
    },
    passwordContent:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        padding: 8,
        borderRadius: 8,
        marginBottom: 24
    },
    copy:{
        backgroundColor: "rgba(51, 176, 116, 0.3)",
        borderWidth: 1,
        borderColor: "rgba(51, 176, 116, 0.3)",
        borderStyle: "solid",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 8
    },
    copy_text:{
       color: "#33b074",
       fontSize: 16, 
    }
})

{/* <Text style={styles.text}>Clique no botão abaixo para copiar a senha</Text>
                <TouchableOpacity>
                    <Text>Copiar senha</Text>
                </TouchableOpacity> */}