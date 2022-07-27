import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import ThemeContext from "../contexts/ThemeContext";
import { ProductProvider } from "../contexts/ProductContext";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";
import { OptionBodyProvider } from "../contexts/OptionBodyContext";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {

  const { theme } = useContext(ThemeContext);
  //<div class="p-3 mb-2 bg-dark text-white"></div>

  return (
    <div className={`bg-${theme} text-${theme === "light" ? "white" : "dark"}`} >
      <ProductProvider>
        <ShoppingCartProvider>
          <OptionBodyProvider>
            <Header />
            <Container>
              <Body />
            </Container >
          </OptionBodyProvider>
        </ShoppingCartProvider>
      </ProductProvider>
      <Footer />
    </div>
  );
};

export default Main;