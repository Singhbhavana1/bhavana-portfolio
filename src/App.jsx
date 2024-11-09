import { BrowserRouter } from "react-router-dom";
import { darkTheme } from "./utils/Theme";
import styled, { ThemeProvider } from "styled-components";
import {
  About,
  StarsCanvas,
  Contact,
  Experience,
  Hero,
  Footer,
  Navbar,
  Tech,
  Works,
} from "./components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Body>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </Body>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
