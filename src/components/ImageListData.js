import React, {Component} from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import { hei, wid } from '../../SizeWindow';

export default class ImageListData extends Component {
  
    render() {

        const {regularUrl, thumbnailUrl, authorName, navigate} = this.props;

        return (
            <TouchableOpacity onPress={() => navigate(regularUrl)}>
                <View>
                    <Image source={{uri: thumbnailUrl}} style={styles.img}/>
                    <View style={styles.mainContainer}>
                        <Text style={styles.text}>Author: {authorName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: wid/1, 
        height: hei*0.5,
    },
    mainContainer:{
        backgroundColor:'white'
    },
    text:{
        textAlign:'center',
        color:'black',
        padding:10,
        fontSize:20,
        fontWeight:'700'
    }
   
    
})

