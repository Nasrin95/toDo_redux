import React, { Component } from 'react'
import { Text, View ,StyleSheet , FlatList , TouchableOpacity } from 'react-native'
import{connect} from 'react-redux'
import{setRemoveItem} from '../service/action'


class UserListener extends Component {
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "85%",
              backgroundColor: "#E1E2E7",
              marginLeft: "2%",
              marginTop : "2%",
              marginBottom : '2%',
              elevation : 5
              
            }}
          />
        );
    };


    onPressButtonFlat =(index) =>
    {
        console.log('index'  , index)
        // alert(index)
        this.props.setRemoveItem (index)
    }
    
    render(){
        return(
            <View style={styles.container}>
                {/* <Text style={{fontSize:16, marginTop : 45}}>{this.props.name}</Text>
                <Text style={{fontSize:16, marginTop : 25}}>{this.props.lastname}</Text>
                <Text style={{fontSize:16, marginTop : 25}}>{this.props.id}</Text> */}
                <FlatList
                    ItemSeparatorComponent={this.renderSeparator}
                    style = {styles.flatStyle}
                    data = {this.props.items}
                    keyExtractor = {item => item}
                    renderItem ={ ({item , index})  => 
                    <View style = {styles.itemStyle}>
                        <TouchableOpacity onPress={this.onPressButtonFlat.bind(this ,index)} >
                            
                            <Text style={styles.fontStyle} >{item}</Text>
                        </TouchableOpacity>
                    </View>
                }
                         
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-start',
        backgroundColor: '#FCC0C5',
        
    },
    fontStyle : {
        color : '#98042D',  
        fontWeight : "200" , 
        fontSize : 20 ,
    },
    flatStyle :{
        marginTop : 25 ,
    },
    itemStyle :{
        width : 400,
        flexDirection: 'row',
        flex :1,
        // borderColor : '#E1E2E7',
        borderBottomColor:'#98042D',
        marginStart : 15,
        justifyContent: 'flex-start',
        marginTop : 10,
    }
});

const mapStateToProps=(state)=>{
    return{
        // name:state.name,
        // lastname:state.lastname,
        // id : state.id
        items : state. item
    }

}



export default connect(mapStateToProps,{setRemoveItem})(UserListener)