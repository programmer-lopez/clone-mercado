import React from "react";
import { 
    Container,
    Title,
    Card,
    LocationIcon,
    PlatinumIcon,
    Reputacion,
    Cajas,
    Row,
    SupporIcon,
    ClockIcon,
    Link

} from "./styled";

export const InfoVendedor = () => {
    return (
        <Container>
            <Title>
                Información sobre el vendedor
            </Title>
            <Card>
                <LocationIcon />
                <div>
                    <p>Ubicacion</p>
                    <strong>Mexico, Estado de Mexico</strong>
                </div>
            </Card>
            <Card>
                <PlatinumIcon />
                <div>
                    <p className="platinum">Mercado Lider Platinum</p>
                    <strong>Es uno de los mejores del sitio!</strong>
                </div>
            </Card>
            <Reputacion>
                <Cajas>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li className="active" />
                </Cajas>
            </Reputacion>
            <Row>
                <div>
                    <strong>+500</strong>
                    <span>Ventas en los últimos 60 días</span>
                </div>
                <div>
                    <strong>
                        <SupporIcon />
                    </strong>
                    <span>Brinda buena atención</span>
                </div>
                <div>
                    <strong>
                        <ClockIcon />
                    </strong>
                    <span>Entrega sus productos a tiempo</span>
                </div>
            </Row>
            <Link href=".">Ver más datos de este vendedor</Link>
        </Container>
    )
}