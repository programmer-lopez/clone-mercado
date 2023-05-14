import React from "react";
import { InfoVendedor } from "../InfoVendedor";
import {
  Container,
  Panel,
  Column,
  Galeria,
  Description,
  Section
} from "./styles";

export const Products = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <Galeria>
            <img src="https://http2.mlstatic.com/D_NQ_NP_826904-MLM54973846403_042023-O.webp" alt="producto" />
          </Galeria>
          <Info />
        </Column>
        <Column>
          {/* <ProductsVent/> */}
          <InfoVendedor />
          <Garantia />
        </Column>
      </Panel>
    </Container>
  )
}

const Info = () => {
  return (
    <Description>
      <h4>Descripción</h4> <br />
      <p>OutletComputer de Mexico le ofrece equipos Apple reacondicionados a nuevo, 100% funcionales para Profesionales del Audio,
        Video, animacion, videos, clases en linea y mucho mas.... Son equipos 2019 que regresaron por el sistema de intercambio y se
        trabajan para ser funcionales y actuales al 2023.<p /> <br />

        Son equipos ideales para profesionales , donde todo esta equilibrado para que no se corte la transmision por fallas en el hardware,
        todo integrado en su maquina.<br />
        Son equipos Imac 2019 , Core i9 con 64gb RAM y disco SSD 2tb , ademas de una Tarjeta Grafica de 4gb.<br />
        Vienen con teclado Apple recargable y Mouse Inalambrico de pilas , ademas de su cable de poder y una caja para su proteccion en el
        envio por MercadoEnvios.
        Le ofrece OutletComputer de Mexico 3 meses de garantia ya que el equipo pasa los testeos de funcionamiento que nuestros Tecnicos
        graduados le hacen a los equipos para que esten 100% funcionales.

        <br /><br />
        Processor Speed 3.6 GHz<br />
        Built-in Display 27<br />
        Model Identifier iMac19,1
        Apple Order Number BTO (Build to Order)<br />
        Apple Model Number A2115 (EMC 3194)<br />
        Form Factor 27 iMac Late 2012<br />
        Apple Subfamily Retina 5K, Early 2019<br />
        EXPAND / UPGRADE<br />
        Standard RAM<br />
        64 GB<br />
        Maximum RAM<br />
        128 GB<br />
        RAM Slots 4<br />
        RAM Specs PC4-21300 DDR4-2666<br />
        RAM Speed Speed 2666 MHz<br />
        Standard Storage Drive<br />
        2tb SSD<br />
        Storage Drive Interface Serial ATA (SATA) (6 Gb/s)/PCIe<br />
        SYSTEM<br />
        Processor Type Core i9 (9900K) Coffee Lake<br />
        Processors / Cores 1 (8 Cores)<br />
        Geekbench Rating N/A<br />
        Turbo Boost Speed 5.0 GHz<br />
        Custom Speeds N/A<br />
        Architecture 64-Bit<br />
        Processor Upgradeable LGA 1151 socket<br />
        FPU Integrated<br />
        Integrated System RAM None<br />
        Standard RAM 64 GB<br />
        Maximum RAM 128 GB<br />
        RAM Slots 4<br />
        ROM / Firmware Type EFI<br />
        EFI Architecture 64-Bit<br />
        L1 Cache 32k/32k<br />
        L2 / L3 Cache 256k (x4) 6 MB (on chip)<br /><br />

        Con OutletComputer de Mexico recibira lo mejor de nuestro equipo para obtener la mejor experiencia en su compra.
      </p>
    </Description>
  )
}
const Garantia = () => {
  return (
    <Section>
      <h5>Garantía</h5>
      <div>
        <span>
          <p className="title">Compra Protegida con Mercado Pago</p>
          <p className="description">Recibe el producto que esperabas o te devolvemos tu dinero</p>
        </span>
        <span>
          <p className="title">Garantía del vendedor</p>
          <p className="description">Garantía del vendedor: 3 meses</p>
        </span>
        <a href="#">Conocer más sobre garantía</a>
      </div>
    </Section>
  )
}
