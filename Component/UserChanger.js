import React , {Component} from 'react'
import { Text, View ,StyleSheet , TextInput , TouchableOpacity} from 'react-native'
import{connect} from 'react-redux'
import{setName , setLastname , setId , setItem} from '../service/action'

class Userchanger extends Component{

    constructor (props){
        super(props)

        this.state ={
            // nameText :'',
            // lastText : '',
            text : '', 
            
        }
    }

    setTextName(input ){
        this.setState({
            nameText: input || 'unknown'
        })
    }

    setTexLastName(input ){
        this.setState({
            lastText: input || 'unknown'
        })
    }

    setText(input ){
        this.setState({
            text: input || 'noThing'
        })
    }
    
    onPressButton =() =>
    {
        // this.props.setName (this.state.nameText)
        // this.props.setLastname (this.state.lastText)
        // this.props.setId ()
        this.props.setItem (this.state.text)
        this.setState({
  
            text : ''
            
        })
    }

    render(){
        // console.warn(this.state.text)
        return(
            <View style ={styles.container}>
                {/* <TextInput 
                style={styles.inputStyle}
                onChangeText = {this.setTextName.bind(this)}
                /> */}
                <TextInput 
                placeholder = {'type your work =))'}
                value = {this.state.text}
                style={styles.inputStyle}
                onChangeText = {this.setText.bind(this)}
                />
                <TouchableOpacity onPress={this.onPressButton.bind(this)}
                 
                    style ={styles.bottonStyle}>
                    <Text style = {styles.fontStyle}>Done</Text>
                
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1E2E7',
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'center',
        alignItems:"flex-end",
        elevation : 15
        
    },
    inputStyle:{
        flex : 8 ,
        backgroundColor: '#f2f3f7',
        borderWidth: 2,
        borderColor : '#E1E2E7',
        borderBottomColor:'#98042D',
         margin : 20 ,
         marginBottom : 30,
         elevation : 15
    },
    bottonStyle:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin : 20,
        marginBottom : 30,
        elevation : 15,
    },
    
    fontStyle : {
        color : '#98042D',  
        fontWeight : "200" , 
        fontSize : 14 ,
    }

});



export default  connect (null ,{setName , setLastname , setId , setItem})(Userchanger);
