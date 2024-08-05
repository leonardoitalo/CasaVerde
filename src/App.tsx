import Home from "components/Home";
import Reset from "./global/Reset";
import { GlobalStyles } from "global/GlobalStyles";
import { MainContainer } from "global/MainContainer";
import Hero from "components/Hero";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Home />
      <MainContainer>
        <Hero />
      </MainContainer>
    </>
  )
}

export default App
