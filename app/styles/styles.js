import {StyleSheet,Dimensions} from 'react-native';
const win = Dimensions.get("window");

export default StyleSheet.create({

    container: {
      padding: 10,
      flex: 1,  
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },

    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

    loginInput: {
      marginTop: 30,
      padding: 20,
      width: 300,
      textAlign: "center",
      fontSize: 20
    },

    logoImage: {
      marginTop: 100,
      width: win.width,
      height: 43,
      alignSelf: "stretch"
    },

    btnLogin: {
      margin: 30,
      padding: 30,
      width: win.width,
      backgroundColor: "#3498db"
    }

  });