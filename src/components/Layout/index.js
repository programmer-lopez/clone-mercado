import React from "react";

import { Header } from "../Header";
import { Products } from "../Products";
import { Container, Wrapper } from "./styles";
import { Hero } from "../Hero";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Hero />
        <Products />
      </Wrapper>
    </Container>
  );
};
