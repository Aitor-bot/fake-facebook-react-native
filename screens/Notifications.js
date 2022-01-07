import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import Avatar from '../components/Avatar'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import notifications from '../data/notifications'
import MainSeparator from '../components/MainSeparator'


const Container = styled.View`
    background-color: rgba(45, 85, 255, 0.2);


`
const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-top: 5px;
    padding: 0 10px;
`

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

const User = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #222121;
`

const Time = styled.Text`
    font-size: 9px;
    color: #747476;
`

const PostContent = styled.Text`
    font-size: 12px;
    color: #222121;
    line-height: 16px;
    padding: 0 11px;
`

const Photo = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 300px;
`

const Footer = styled.View`
    padding: 0 11px;
`

const FooterCount = styled.View`

`

const IconCount = styled.View`
    background: #1878f3;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`

const TextCount = styled.Text`
    font-size: 11px;
    color: #424040;
`

const Separator = styled.View`

`

const FooterMenu = styled.View`

`

const Buttom = styled.TouchableOpacity`

`

const Icon = styled.View`
    margin-right: 6px;
`

const Text = styled.Text`
`

const Notifications = () => {
    return (
        <>
        {notifications.map((user, i) =>{
            return(
                
                <Container key={i.toString()}>
                    <Header>
                        <Row>
                            <Avatar source={user.source} />
                            <View style={{ paddingLeft: 10 }} >
                                <User>{user.name}</User>
                                <Row>
                                    
                                </Row>
                                <PostContent>{user.postContent}</PostContent>
                            </View>
                        </Row>
                        <MaterialCommunityIcons name='dots-horizontal' size={20} color='#747476' />
                    </Header>

                    <Footer>
                        <FooterCount>
                            <Row>
                            </Row>
                            <TextCount>{user.comments}</TextCount>
                        </FooterCount>
                        <Separator />

                    </Footer>
                </Container>
            )
        })}
        </>
    )
}

export default Notifications

