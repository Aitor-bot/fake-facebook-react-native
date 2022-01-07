import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import MainSeparator from '../components/MainSeparator';
import ToolBar from '../components/ToolBar';

const View = styled.View`
    flex: 1;
`;

const Home = () => {
    return(
        <View>
            <ToolBar/>
            <MainSeparator />
        </View>
    )
}
export default Home
