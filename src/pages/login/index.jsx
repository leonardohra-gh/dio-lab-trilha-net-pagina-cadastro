import Header from "../../components/Header"
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./style"
import Button from "../../components/Button"
import { Input } from "../../components/Input"
import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from "react-router-dom"

export const Login = () => {
    
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed');
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleClickSignIn}>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}