import Button from "../Button";
import logo from "../../assets/logo-dio.png"
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = ({ autenticado }) => {
    const navigate = useNavigate()
    const handleClickCadastrar = () => {
        navigate("/cadastrar");
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {
                        autenticado ?
                            <>
                                <BuscarInputContainer>
                                    <Input placeholder="Buscar..." />
                                </BuscarInputContainer>
                                <Menu>Live Code</Menu>
                                <Menu>Global</Menu>
                            </> :
                            null
                    }
                </Row>
                <Row>
                    {
                        autenticado ?
                            (
                                <>
                                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                                </>
                            )
                            :
                            (
                                <>
                                    <MenuRight href="#">Home</MenuRight>
                                    <Button title={"Entrar"} />
                                    <Button title={"Cadastrar"} onClick={handleClickCadastrar}/>
                                </>
                            )
                    }
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header