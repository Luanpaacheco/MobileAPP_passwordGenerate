import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard'



interface ModalPasswordProps {
    password: string;
    handleClose: () => void;
}

export function ModalPassword({password, handleClose}: ModalPasswordProps){

    function copy(){
        Clipboard.setString(password)
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <View style={styles.innerPassword}>
                    <View style={styles.passwordContent}>
                        <Pressable style={styles.innerPassword}>
                            <Text style={styles.text}>{password}</Text> 
                        </Pressable>

                        <TouchableOpacity style={styles.copy} onPress={copy}>
                            <Text style={styles.copy_text}>❐ copy</Text> 
                        </TouchableOpacity>
                    </View>
                    
                
                    <View style={styles.button_area}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.button_text} onPress={handleClose}>Voltar</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={[styles.button, styles.button_save]}>
                            <Text style={styles.button_saveText}>Salvar senha</Text>
                        </TouchableOpacity> 
                    </View>
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
        fontSize: 19,
        fontWeight: "bold",
        color: "gray",
        flexWrap: "wrap",
        maxWidth: 150 
    },
    passwordContent:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: "80%",
        padding: 12,
        paddingLeft: 18,
        borderRadius: 8,
        backgroundColor: "#0e0e0e",
    },
    copy:{
        backgroundColor: "rgba(51, 176, 116, 0.3)",
        borderWidth: 1,
        borderColor: "rgba(51, 176, 116, 0.3)",
        borderStyle: "solid",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 8
    },
    copy_text:{
       color: "#33b074",
       fontSize: 16, 
    },
    button_area:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        marginTop:8,
        alignItems: "center",
        
    },
    button:{
        flex:1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,   
    },
    button_save:{
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },
    button_saveText:{
        color: "#FFF",
        fontWeight: "bold",
    },
    button_text:{

    }
})

