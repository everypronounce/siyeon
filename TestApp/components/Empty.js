import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
function Empty(){
    return (
        <View style={styles.block}>
            <Text style={styles.description}>할일이 없습니다.</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    block:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    description:{
        fontSize:24,
        color:'black',
    },
});
export default Empty;