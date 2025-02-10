import styled from "styled-components";

export const ConteinerWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
`;

export const FastContentScheduler = styled.section`
    background-color: hsl(33, 50.40%, 55.70%);
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
  overflow: hidden;
  
  /* padding: 20px; */
  /* background-color:rgb(194, 233, 20); */

  @media (max-width: 850px){
    background-color: aqua;

    grid-template-columns: auto;
    max-width: 95%;
    padding: 5px;
    
  }
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
    width: 257px;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsl(31, 66%, 93%);
    overflow: hidden;
    border-radius: .5rem; 

    img{
        width: 80%;
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 7;
        display: flex;
        flex-direction: column;
        align-items: start;

        

        min-width: 31.77rem;
        height: 300px;

        img{
            width: 35%;
            margin-left: 2rem;
        }
    }

    @media (max-width: 425px) {
        background-color:rgb(30, 31, 30);
        min-width: 23.994rem;


        
    }
   
    
`;

export const GridItem1Text = styled.h2`
    width: 178px;
    font-size: 2.1rem;
    text-align: left;
    line-height: 1;
    
    span{
        color: hsl(256, 67%, 59%);
    }

    @media (max-width: 850px){
        width: 430px;

        font-size: 2rem;
        margin-left: 2rem;
        
    }
`;

export const GridItem2 = styled.div`
    grid-column: 2 / 4; 
    grid-row: 1;
    width: 500px;
    height: 323px;
    background-color: hsl(256, 67%, 59%);
    border-radius: .5rem; 
    padding: 20px;
    color: white;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    align-Items: center;
    justify-content: center;
    
    @media (max-width: 850px){
        grid-column: 1; 
        grid-row: 1;

        max-width: 87%;
        /* background-color:rgb(206, 23, 23); */
    }

    @media (max-width: 768px){

    }

    @media (max-width: 650px){
        /* background-color:rgb(206, 23, 23); */
        max-width: 62%;
        line-height: 1;
    }

    @media (max-width: 425px) {
        background-color:rgb(83, 216, 176);

        max-width: 64%;
    }
    
`;

export const GridItem2Title = styled.p`
    max-width: 454px;
    font-size: 3.9rem;
    font-weight: 500;
    /* background-color:rgb(206, 23, 23); */
    margin-top: -10px;

    span{
        color: hsl(39, 100%, 71%);
    }

    @media (max-width: 650px){
        font-size: 3.1rem;
    }

    @media (max-width: 425px) {
        font-size: 3.5rem;
    }

`;
export const StarIcon = styled.div`
    display: flex;
    gap: 1rem;
    /* background-color:rgb(29, 224, 104); */
    margin-top: -40px;
`;

export const GridItem3 = styled.div`
    /* grid-area: item3; */
    grid-column: 4; 
    grid-row: 1 / 3; 
    overflow: hidden;
    max-width: 259px;
    /* height: 603px; */
    background-color:hsl(254, 88%, 90%);
    border-radius: .5rem; 
    /* display: flex;
    flex-direction: column; */

    img{
        width: 326px;
        height: 317px;
        margin-left: 30px;
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 4;

        display: flex;
        flex-direction: column;
        align-Items: center;
        justify-content: center;

        min-width: 31.89rem;

        img{
            min-width: 75%;
            margin-left: 1rem;
        }
    }

    @media (max-width: 425px) {
        background-color:rgb(83, 216, 176);

        min-width: 23.994rem;
    }
`;

export const GridItem3Title = styled.h2`
    max-width: 178px;
    /* background-color: #ffffff; */
    text-align: left;
    margin: 3rem 0 1rem 2rem;

    @media (max-width: 850px){
        min-width: 75%;
        font-size: 1.8rem;
        margin: 3rem 0 1rem 0;
        text-align: center;
    }
`;

export const GridItem3Paragraph = styled.p`
    max-width: 187px;
    text-align: left;
    line-height: 1;
    max-width: 177px;
    height: 83px;
    margin: 1rem 0 2rem 2rem;
    /* background-color: #ffffff; */

    @media (max-width: 850px){
        min-width: 75%;
        
        margin: 1rem 0 2rem 1rem;

        text-align: center;
        font-size: 1.6rem;
    }
`;

export const GridItem4 = styled.div`
    /* grid-area: item4; */
    grid-column: 1;
    grid-row: 2 / 5;
    width: 257px;
    height: 436px;
    border-radius: .5rem;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    background-color: hsl(39, 100%, 71%);
    margin-top: 4.5rem;
    overflow: hidden;

    img{
        width: 82%;
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 8;

        display: flex;
        flex-direction: column;
        margin-top: .2rem;

        min-width: 31.93rem;

        img{
            width: 52%;
            margin-left: 1.5rem;
        }
    }

    @media (max-width: 425px) {
        background-color:rgb(83, 216, 176);

        min-width: 23.99rem;
        margin-top: .5rem;

        img{
            width: 62%;
        }
    }
`;

export const GridItem4Titli = styled.h2`
    max-width: 158px;
    font-size: 2rem;
    text-align: left;
    line-height: 1;
    margin: 1.5rem 0 2.5rem 1.3rem;
    /* margin-bottom: 2.5rem; */

    @media (max-width: 850px){
        /* background-color: #ffffff; */
        max-width: 388px;
        font-size: 2.3rem;
        margin-left: 1.5rem;
    }
`;

export const GridItem5 = styled.div`
    /* grid-area: item5; */
    
    grid-row: 2;
    width: 259px;
    height: 253px;
    background-color:hsl(0, 0%, 100%);
    border-radius: .5rem;
    overflow: hidden;

    img{
        max-width: 338px;
        margin: 1.1rem 0 0 1.1rem;
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 2;

        min-width: 31.93rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        

        img{
            min-width: 95%;
            margin: 0;
        }
    }

    @media (max-width: 768px){
        min-width: 31.90rem;
        background-color:rgb(181, 216, 83);
    }

    @media (max-width: 425px) {
        background-color:rgb(83, 216, 176);

        min-width: 23.994rem;

        img{
            min-width: 85%;
        }
    }
`;

export const GridItem5Paragraph = styled.p`
    font-size: 1.497rem;
    font-weight: 500;
    max-width: 186px;
    /* height: 116px; */
    text-align: left;
    line-height: 1;
    margin-left: 1.4rem;
    /* background-color:rgb(83, 216, 176); */

    @media (max-width: 850px){
        min-width: 95%;
        margin: 0;
        font-size: 2.797rem;
    }

    @media (max-width: 768px){
        font-size: 2.482rem;
        margin-left: 1.4rem;
    }

    @media (max-width: 425px) {
        background-color:rgb(83, 216, 176);
        font-size: 1.782rem;
        
    }

    
`;

export const GridItem6 = styled.div`
    /* grid-area: item6; */
    /* grid-column: 2; */
    grid-row: 2; /* Linha 1 com altura de 412px */
    width: 259px;
    height: 253px;
    font-weight: 500;
    overflow: hidden;
    background-color:hsl(39, 100%, 71%);
    border-radius: .5rem;
    line-height: 1;

    img{
        max-width: 208px;
        margin: .9rem 0 0 .1rem;
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 3;

       /* margin: 0 auto; */

        min-width: 31.85rem;
        min-height: 239px;

        img{
            min-width: 250px;
            
            margin: -20px 0 0 -45%;
        }
    }

    @media (max-width: 425px) {
        background-color:rgb(83, 216, 176);
        min-width: 23.994rem;


        img{
            margin: -15px 0 0 -25%;
        }
        
    }
    
`;

export const GridItem6Paragraph = styled.p`
    font-size: 1.497rem;
    font-weight: 500;
    max-width: 186px;
    /* height: 116px; */
    text-align: left;
    line-height: 1;
    margin-left: 1.4rem;
    /* background-color:rgb(83, 216, 176); */

    @media (max-width: 850px){
        
        min-width: 61%;
        font-size: 1.7rem;
        
    }

    @media (max-width: 425px) {
        background-color:rgb(134, 83, 216);
        min-width: 81%;
        font-size: 1.5rem;


        
    }
`;

export const GridItem7 = styled.div`
    /* grid-area: item7; */
    grid-row: 3; /* Linha 1 com altura de 412px */
    width: 259px;
    height: 253px;
    background-color: hsl(0, 0%, 100%);
    border-radius: .5rem;
    
    

    img{
        width: 188px;
        margin-right: 1.5rem;
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 6;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        min-width: 31.95rem;

        img{
            width: 200px;
            margin-left: 1rem;
        }
    }

    @media (max-width: 425px) {
        background-color:rgb(216, 83, 156);
        min-width: 23.994rem;
        overflow: hidden;

        align-items: start;
        

        img{
            margin-left: 1rem;
        }
       
        
    }
    
    
`;

export const GridItem5Paragraph7 = styled.p`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    margin-left: 1.1rem;
    text-align: left;
    font-size: 1.18rem;


    span{
        font-size: 3.5rem;
        
    }

    @media (max-width: 850px){
        margin-left: 1rem;
    }

    @media (max-width: 425px) {
        background-color:rgb(83, 216, 176);
        min-width: 23.994rem;

        margin-left: 1rem;


        
    }
`;

export const GridItem8 = styled.div`
    /* grid-area: item8; */
    grid-column: 3 / 5;
    grid-row: 3; /* Linha 1 com altura de 412px */
    max-width: 543px;
    height: 253px;
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: hsl(256, 67%, 59%);
    border-radius: .5rem;

    color: hsl(0, 0%, 100%);
    font-size: 2.5rem;
    text-align: left;
    line-height: 1;
    
   img{
        width: 229px;
        height: 198px;
        margin-left: 1.2rem;
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 5;

        display: flex;
        flex-direction: column;

        max-width: 31.94rem;
        height: 23.188rem;
        /* background-color:rgb(83, 216, 176); */

        img{
            margin-top: 1rem;
        }

        p{
            font-size: 2rem;
            text-align: center;
            max-width: 13.375rem;
            
            margin-top: 1rem;
        }

        @media (max-width: 425px) {
        background-color:rgb(216, 83, 83);
        max-width: 23.994rem;


       
        
    }
    }
`;