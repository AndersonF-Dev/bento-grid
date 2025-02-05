import styled from "styled-components";

export const ConteinerWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
`;

export const FastContentScheduler = styled.section`
    background-color: hsl(31, 66%, 93%);
    width: 257px;
    height: 412px;
`;

export const FastContentScheduler2 = styled.section`
    background-color: hsl(36, 4.00%, 24.50%);
    width: 257px;
    height: 412px;
`;

export const AiBoosted = styled.section`
    background-color: hsl(256, 67%, 59%);
    width: 545px;
    height: 323px;
`;

export const ChedulerSocial = styled.section`
    background-color: hsl(254, 88%, 90%);
    width: 257px;
    height: 603px;
`;


// Container com Grid usando grid-template-areas
export const GridContainer = styled.div`
  display: grid;
  /* grid-template-areas:
    "item1 item2 item2 item3"
    "item1 item2 item2 item3"
    "item4 item5 item6 item3"
    "item4 item7 item8 item8"; */
  /* grid-template-columns: 257px 545px 257px;  */
  grid-template-columns: auto auto auto auto;
  /* grid-template-rows: repeat(4, 1fr);  */
  max-width: 81%;
  /* width: 1123px; */
  grid-gap: 8px; /* Espaçamento entre os itens */
  padding: 20px;
  background-color:rgb(194, 233, 20);
`;

// Estilo para os Itens
// export const GridItem = styled.div`
//   background-color: #007bff;
//   color: white;
//   padding: 20px;
//   text-align: center;
//   border-radius: 8px;

//   /* Posicionando os itens no grid */
//   &:nth-child(1) {
//     grid-area: item1;
//     height: 412px;
//   }

//   &:nth-child(2) {
//     grid-area: item2;
//     height: 323px;
//   }

//   &:nth-child(3) {
//     grid-area: item3;
//     height: 603px;
//   }

//   &:nth-child(4) {
//     grid-area: item4;
//     height: 412px;
//   }

//   &:nth-child(5) {
//     grid-area: item5;
//     width: 259px;
//     height: 253px;
//   }

//   &:nth-child(6) {
//     grid-area: item6;
//     width: 259px;
//     height: 253px;
//   }

//   &:nth-child(7) {
//     grid-area: item7;
//     width: 259px;
//     height: 253px;
//   }

//   &:nth-child(8) {
//     grid-area: item8;
//     width: 543px;
//     height: 253px;
//   }
// `;

export const GridItem1 = styled.div`
    /* grid-area: item1; */
    grid-row: 1 / 3;
    grid-column: 1;
    /* grid-column: span 2; */
    /* grid-row: 1 / 3; */
    /* width: 257px;
    height: 412px; */
    background-color: #007bff;
    color: white;
`;

export const GridItem2 = styled.div`
    /* grid-area: item2; */
    grid-column: 2 / 4; 
    grid-row: 1;
    /* width: 545px; */
    /* height: 323px; */
    background-color: #007bff;
    color: white;
`;

export const GridItem3 = styled.div`
    /* grid-area: item3; */
    grid-column: 4; 
    grid-row: 1 / 3; 
    /* height: 603px; */
    background-color: #007bff;
    color: white;
`;

export const GridItem4 = styled.div`
    /* grid-area: item4; */
    grid-column: 1;
    grid-row: 3 / 5;
    /* width: 257px;
    height: 412px; */
    background-color: #007bff;
    color: white;
`;

export const GridItem5 = styled.div`
    /* grid-area: item5; */
    grid-row: 2;
    /* width: 259px;
    height: 253px; */
    background-color: #007bff;
    color: white;
`;

export const GridItem6 = styled.div`
    /* grid-area: item6; */
    /* grid-column: 2; */
    grid-row: 2; /* Linha 1 com altura de 412px */
    /* width: 259px;
    height: 253px; */
    background-color: #007bff;
    color: white;
`;

export const GridItem7 = styled.div`
    /* grid-area: item7; */
    grid-row: 3; /* Linha 1 com altura de 412px */
    /* width: 259px;
    height: 253px; */
    background-color: #007bff;
    color: white;
`;

export const GridItem8 = styled.div`
    /* grid-area: item8; */
    grid-column: 3 / 5;
    grid-row: 3; /* Linha 1 com altura de 412px */
    /* width: 543px;
    height: 253px; */
    background-color: #007bff;
    color: white;
`;