import React from "react";

import { Header } from "../Header";
import { MenList } from "../MenList";
import { Products } from "../Products";
import { Container, Wrapper } from "./styles";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <MenList />
        <Products />
      </Wrapper>
    </Container>
  );
};
