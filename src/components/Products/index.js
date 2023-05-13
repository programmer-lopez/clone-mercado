import React from "react";
import { 
  Container,
  Panel,
  Column,
  Galeria,
  
 } from "./styles";

export const Products = () => {
  return (
    <Container>
      <Panel>
        <Column>
        <Galeria>
          <img src="https://m.media-amazon.com/images/I/517hJ0wexHL._AC_SX425_.jpg" alt="producto"/>
        </Galeria>
        {/* <Info/> */}
        </Column>
        <Column>
        {/* <ProductsVent/> */}
        {/* <InfoVendedor/> */}
        {/* <Galeria/> */}
        </Column>
      </Panel>
    </Container>
  )
}
