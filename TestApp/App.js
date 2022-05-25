//컴포넌트는 구성요소

import React from 'react';
import {SafeAreaView} from 'react-native'; //특별한 컴포넌트들
import Greeting from './components/Greeting';

const App=()=>{
return(
    <SafeAreaView>
        <Greeting/>
    </SafeAreaView>
);
};
export default App; //컴포넌트 내보내기