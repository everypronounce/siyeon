
import React from 'react';
import {Button,SafeAreaView,ToastAndroid,Text} from 'react-native'; //특별한 컴포넌트들

const time='17:26';
const date=new Date();

console.log(date.getHours()+":"+date.getMinutes());
const App=()=>{
   if(date.getHours()+":"+date.getMinutes()==time){
    return (
        <SafeAreaView>
            <Text>오운영 학습시간 </Text>
        </SafeAreaView>
    );
   } 
   return (
    <SafeAreaView>
        <Text>오운영 학습시간 아님 </Text>
    </SafeAreaView>
);
};

export default App; //컴포넌트 내보내기