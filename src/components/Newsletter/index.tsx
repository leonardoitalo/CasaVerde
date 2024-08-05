import SmallTitle from "components/styles/SmallTitle"
import { Button, Container, Input, NewsletterSubmit } from "./Newsletter.styles"
import Title from "components/styles/Title"

const Newsletter = () => {
  return (
    <Container>
        <SmallTitle>Sua casa com as</SmallTitle>
        <Title>melhores plantas</Title>
        <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        <NewsletterSubmit>
            <Input type="email" placeholder="Insira seu e-mail" />
            <Button>Assinar newsletter</Button>
        </NewsletterSubmit>
    </Container>
  )
}

export default Newsletter