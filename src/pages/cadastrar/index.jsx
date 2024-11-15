import Header from "../../components/Header"
import { Column, ErrorText, Container, Row, Title, Wrapper, JaTenhoContaText, FazerLoginText, AceitoTermosText, TitleCadastrar, SubtitleCadastrar } from "./style"
import Button from "../../components/Button"
import { Input } from "../../components/Input"
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email('Email não é válido').required(),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required()
}).required();

export const Cadastrar = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async formData => {
    }

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
                        <TitleCadastrar>Comece agora grátis</TitleCadastrar>
                        <SubtitleCadastrar>Crie sua conta e make the change._</SubtitleCadastrar>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <AceitoTermosText>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</AceitoTermosText>
                        </Row>
                        <Row>
                            <JaTenhoContaText>Já tenho conta</JaTenhoContaText>
                            <FazerLoginText>Fazer login</FazerLoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}