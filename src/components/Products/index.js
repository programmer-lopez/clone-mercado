import React from "react";
import { 
  Container,
  Panel,
  Column,
  Galeria,
  Description
  
 } from "./styles";

export const Products = () => {
  return (
    <Container>
      <Panel>
        <Column>
        <Galeria>
          <img src="https://http2.mlstatic.com/D_NQ_NP_826904-MLM54973846403_042023-O.webp" alt="producto"/>
        </Galeria>
        <Info/>
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

const Info =()=>{
  return(
    <Description>
      <h4>Descripción</h4>
      <p>OutletComputer de Mexico le ofrece equipos Apple reacondicionados a nuevo, 100% funcionales para Profesionales del Audio, Video, animacion, videos, clases en linea y mucho mas.... Son equipos 2019 que regresaron por el sistema de intercambio y se trabajan para ser funcionales y actuales al 2023.

Son equipos ideales para profesionales , donde todo esta equilibrado para que no se corte la transmision por fallas en el hardware, todo integrado en su maquina.
Son equipos Imac 2019 , Core i9 con 64gb RAM y disco SSD 2tb , ademas de una Tarjeta Grafica de 4gb.
Vienen con teclado Apple recargable y Mouse Inalambrico de pilas , ademas de su cable de poder y una caja para su proteccion en el envio por MercadoEnvios.
Le ofrece OutletComputer de Mexico 3 meses de garantia ya que el equipo pasa los testeos de funcionamiento que nuestros Tecnicos graduados le hacen a los equipos para que esten 100% funcionales.
</p>
<p>Processor Speed 3.6 GHz
Built-in Display 27
Model Identifier iMac19,1
Apple Order Number BTO (Build to Order)
Apple Model Number A2115 (EMC 3194)
Form Factor 27 iMac Late 2012
Apple Subfamily Retina 5K, Early 2019
EXPAND / UPGRADE
Standard RAM
64 GB
Maximum RAM
128 GB
RAM Slots 4
RAM Specs PC4-21300 DDR4-2666
RAM Speed Speed 2666 MHz
Standard Storage Drive
2tb SSD
Storage Drive Interface Serial ATA (SATA) (6 Gb/s)/PCIe
SYSTEM
Processor Type Core i9 (9900K) Coffee Lake
Processors / Cores 1 (8 Cores)
Geekbench Rating N/A
Turbo Boost Speed 5.0 GHz
Custom Speeds N/A
Architecture 64-Bit
Processor Upgradeable LGA 1151 socket
FPU Integrated
Integrated System RAM None
Standard RAM 64 GB
Maximum RAM 128 GB
RAM Slots 4
ROM / Firmware Type EFI
EFI Architecture 64-Bit
L1 Cache 32k/32k
L2 / L3 Cache 256k (x4) 6 MB (on chip)</p>
<p>
  Con OutletComputer de Mexico recibira lo mejor de nuestro equipo para obtener la mejor experiencia en su compra.
</p>
    </Description>
  )
}
