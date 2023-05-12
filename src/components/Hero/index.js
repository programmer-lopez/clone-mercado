import React from "react";
import { Container, Row } from "./styles";

export const Hero = () => {
    return (
        <Container>
            <Row>
                <a href="#" className="volver">volver al Listado</a>
                <a href="#">computador</a>
                <a href="#">accesorios para MAC</a>
                <a href="#">Microfonos</a>
                <a href="#">Redragon</a>
            </Row>
            <a href="#">Compartir</a>
            <a href="#">Vender una igual</a>
        </Container>
    );
};