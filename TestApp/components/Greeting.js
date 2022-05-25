import React from 'react';
import {View,Text} from 'react-native';
//함수 컴포넌트 만들기
//props를 이용해 동적으로 바뀌
function Greeting(props){
    return(
        <View>
            <Text>안녕하세요! {props.name}!</Text>
        </View>
    );
};
export default Greeting;