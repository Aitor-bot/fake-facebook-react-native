import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import MainSeparator from '../components/MainSeparator';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import Story from '../components/Story';

const View = styled.View`
    flex: 1;
`;

const Home = () => {
    return(
        <View>
            <ToolBar/>
            <MainSeparator />
            <Users />
            <MainSeparator />
            <Story />
            <MainSeparator />
        </View>
    )
}
export default Home
