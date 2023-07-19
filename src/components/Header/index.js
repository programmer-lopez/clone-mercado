import React from "react";

import { Container, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img className="nav-logo"
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png"
          alt="logo"
        />
        <img className="img-2"
          src="https://http2.mlstatic.com/D_NQ_948848-MLA70392170748_072023-OO.webp"
          alt="logo"
        />
      </Wrapper>
    </Container>
  );
};
