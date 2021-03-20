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

    
    
    sortViewArray:{
       padding: 40,
       
       
    },
    sortButtons:{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
    },
    sortArray:{
        borderColor: '#1791e8',
        borderRadius: 20,
        borderWidth: 3,
        padding: 7,
        textAlign:'center',
    },


    lazyAlign:{
        alignItems: "center",
        paddingTop: 20,
    },

    lazyText:{
        backgroundColor: '#518226',
        height: 550,
        width: 380,
        borderRadius: 20,
        padding: 10,
    },




    
    






    hookView:{
        backgroundColor: '#e09d00',
        flex: 1,
        justifyContent: 'space-around',
        

    },
    
    

  })

  export default styles;