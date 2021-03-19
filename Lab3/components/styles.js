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
    
    spreadView:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    spreadText:{
        fontWeight: 'bold',
        color: '#1791e8',
        fontSize: 20
    },
    spreadDescription:{
        width: 350,
        alignSelf: 'center',
        padding: 40
    },





    restStyle:{
        fontWeight: 'bold',
        color: '#518226',
        padding: 2
    },
    restButton:{
        
        flexDirection: 'row',
        padding: 15
    },
    restView:{
        flexDirection: 'row',
    },
    restText:{
        backgroundColor: '#518226',
        height: 300,
        width: 380,
        borderRadius: 20,
        padding: 10,
    },






    hookView:{
        backgroundColor: '#e09d00',
        flex: 1,
        justifyContent: 'space-around',
        

    },
    hookButton:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    hookBorderText:{
        borderWidth: 4,
        borderColor: '#ffffff',
        borderRadius: 35,
        padding: 10,
        width: 350,
    },
    viewAlign:{
        alignItems: "center",
    },
    hookText:{
        color: '#ffffff', 
        fontWeight: 'bold', 
        fontSize: 20
    }
    

  })

  export default styles;