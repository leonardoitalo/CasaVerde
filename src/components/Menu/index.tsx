import { Header, Logo, Nav } from "./Menu.styles"

const Menu = () => {
  return (
    <Header>
        <Logo>
            <img src="/imgs/logo.png" alt="" />
        </Logo>
        <Nav>
            <a href="">
                Como Fazer
            </a>
            <span>/</span>
            <a href="">
                Ofertas
            </a>
            <span>/</span>
            <a href="">
                Depoimentos
            </a>
            <span>/</span>
            <a href="">
                Vídeos
            </a>
            <span>/</span>
            <a href="">
                Meu Carrinho
            </a>
        </Nav>
    </Header>
  )
}

export default Menu