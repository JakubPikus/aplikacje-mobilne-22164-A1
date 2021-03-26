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
   

    

  })

  export default styles;