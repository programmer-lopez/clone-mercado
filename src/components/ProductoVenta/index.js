import React from "react";
import { 
    Container,
    Estado,
    Row,
    HeartIcon,
    Card,
    CheckIcon,
    Price,
    Cantidad,
    Color,
    ButtonCard,
    Button,
    Beneficios,
    ShildeIcon


} from "./styled";
export const ProductoVenta = () => {
    return (
        <Container>
            <Estado> Nuevo | 4 Vendidos</Estado>

            <Row>
                <h1>Computadora 2019 27 Apple iMac I9 9900k 64gb Ram Ssd 2tb (Reacondicionado)</h1>
                <HeartIcon />
            </Row>
            <Price>
                $45,959,76
            </Price>
            <Card>
                <CheckIcon/>
                <div>
                    <span className="title">Envío gratis a todo el país</span>
                    <span className="detalle">Conoce los tiempos y las formas de envío.</span>
                    <a href="#">Calcular cuándo llega</a>
                </div>
            </Card>
            <Card>
                <CheckIcon/>
                <div>
                    <span className="title">Devolución gratis</span>
                    <span className="detalle">Tienes 30 días desde que lo recibes.</span>
                    <a href="#">Conocer más</a>
                </div>
            </Card>
            <Color>
            Color:<strong>Gris</strong>
            </Color>
            <Cantidad>
                <p>Cantidad: </p>
                <strong>¡Última disponible!</strong>
                <input type="number" value=""/>
                <span>(No disponible)</span>
            </Cantidad>
            <ButtonCard>
                <Button className="solid">Comprar ahora</Button>
                <Button>Agregar al carrito</Button>
            </ButtonCard>
            <Beneficios>
                <li>
                    <ShildeIcon/>
                    <p>Compra Protegida, <span>Se abrirá en una nueva ventana, recibe el producto que esperabas o te devolvemos tu dinero.</span></p>
                </li>
            </Beneficios>
        </Container>
    )

}