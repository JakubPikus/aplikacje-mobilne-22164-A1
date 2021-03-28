import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    startView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
  
    },
    startButton: {
      height: 70,
      width: 300,
      backgroundColor: '#884444',
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
    },
    startText: {
      fontSize : 20,
      color: '#ffffff',
      fontWeight: 'bold',
    },

    TextInput: {
      backgroundColor: '#8BC8F3',
      borderRadius: 15,
      textAlign: 'center',
    },
    TextInputText: {
      top: -5,
      color: '#ffffff',
      alignSelf: 'center'
    },

    TextInputView: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    TextInputViewText: {
        borderColor: '#1791e8',
        backgroundColor: '#1791e8',
        borderRadius: 30,
        borderWidth: 3,
        padding: 15,
        width: 350,
    },
    SelectPickerView: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'

    },
    SelectPickerViewText: {
      borderColor: '#518226',
      backgroundColor: '#518226',
      borderRadius: 30,
      borderWidth: 3,
      padding: 15,
      width: 350,
      alignItems: 'center',
    },
    SelectPickerViewText2: {
      borderColor: '#65a230',
      backgroundColor: '#65a230',
      borderRadius: 30,
      borderWidth: 3,
      padding: 15,
      width: 250,
    },
    ModalView:{
      backgroundColor: '#e09d00',
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
      padding: 60
    },
    ModalViewIn:{
      backgroundColor: '#e09d00',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
    },
    ModalText: {
      color: '#ffffff',
      alignSelf: 'center',
      fontSize: 20,
      top: -30
    },
    DatePickerView:{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    DatePickerViewCal:{
      borderColor: '#1a1a1a',
      backgroundColor: '#1a1a1a',
      borderRadius: 40,
      padding: 15,
      width: 250,
      alignItems: 'center'
    },
    DatePickerViewCalMid:{
      borderColor: '#ffffff',
      backgroundColor: '#ffffff',
      borderRadius: 30,
      width: 170,
      height: 50,
      justifyContent: "center",
    },
    
  })

  export default styles;