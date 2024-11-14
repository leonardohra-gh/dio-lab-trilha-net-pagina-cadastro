import Header from "../../components/Header"
import {Card} from "../../components/Card"
import {UserInfo} from "../../components/UserInfo"
import { Container, Column, Title, TitleHighlight } from "./style"

export const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo percentual={89} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v="/>
                    <UserInfo percentual={80} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v="/>
                    <UserInfo percentual={57} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v="/>
                    <UserInfo percentual={27} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v="/>
                    <UserInfo percentual={12} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v="/>
                </Column>
            </Container>
        </>
    )
}