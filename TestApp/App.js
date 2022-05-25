//컴포넌트는 구성요소

import React,{useState} from 'react';
import {SafeAreaView,StyleSheet} from 'react-native'; //특별한 컴포넌트들
import Counter from './components/Counter';

const App=()=>{
    const [count,setCount]=useState(0);

    const onIncrease=()=>setCount(count+1);
    const onDecrease=()=>setCount(count-1);

return(
    <SafeAreaView style={styles.full}>
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
    </SafeAreaView>
);
};
const styles=StyleSheet.create({
    full:{
        flex:1,
        backgroundColor:'pink'
    },
});
export default App; //컴포넌트 내보내기