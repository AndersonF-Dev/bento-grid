import styled from "styled-components";

export const ConteinerWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    width: 95%; 

    
    @media (max-width: 610px){
        width: 71%; 
        background-color: orange;
    }

    @media (max-width: 481px){
        width: 92%; 
        background-color: greenyellow;
    }

    @media (max-width: 430px){
        width: 92%; 
        background-color: brown;
    }

    @media (max-width: 379px){
        width: 88%; 
        background-color: cornflowerblue;
    }

    @media (max-width: 372px){
        width: 92%; 
        background-color: burlywood;
    }
`;

// Container com Grid usando grid-template-areas

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  /* background-color: aqua; */
  max-width: 82%;
  
  grid-gap: 8px;
  overflow: hidden;
  /* background-color: black; */
  @media (max-width: 1359px){
        max-width: 100%; 
       
    }

  @media (max-width: 1024px){
    max-width: 100%;
  }

  @media (max-width: 850px){
    grid-template-columns: auto;
    max-width: 95%;
    padding: 5px;
    
  }

  @media (max-width: 452px){
    max-width: 100%;
  }

  @media (max-width: 320px){

  }
`;

// Estilo para os Itens

// Estilos do componente GridCreatePost
export const GridCreatePost = styled.div`
    grid-row: 1 / 3;
    grid-column: 1;

    max-width: 16.063rem;
    max-height: 26.875rem;

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

    @media (max-width: 1024px){
        max-width: 13rem;

        img {
            width: 70%;
        }
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

    @media (max-width: 481px){
        min-width: 24.7rem;
    }

    @media (max-width: 430px) {
        min-width: 23.14rem;
        min-height: 10rem;
        
        img{
            width:50%;
        }
    }

    @media (max-width: 395px){
        min-width: 19rem;
        
        img{
            width: 50%;
        }
    }
`;

export const CreatePostTitle = styled.h2`
    width: 178px;

    font-size: 2.1rem;
    text-align: left;
    line-height: 1;
    
    span{
        color: hsl(256, 67%, 59%);
    }
    @media (max-width: 1024px){
        font-size: 1.8rem;
    }

    @media (max-width: 850px){
        width: 430px;

        font-size: 2rem;
        margin-left: 2rem;
        
    }

    @media (max-width: 425px) {
        width: 250px;
        font-size: 1.3rem;
    }

    @media (max-width: 395px){
        width: 230px;
        font-size: 1.3rem;
    }
`;

// Estilos do componente GridSocialMedia
export const GridSocialMedia = styled.div`
    grid-column: 2 / 4; 
    grid-row: 1;

    width: 490px;
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

    p{
        margin-top: .1rem;
    }

    @media (max-width: 1024px){
        /* max-width: 400px; */
    }
    
    @media (max-width: 850px){
        grid-column: 1; 
        grid-row: 1;

        max-width: 89%;
       
    }

    @media (max-width: 768px){

    }

    @media (max-width: 650px){
        /* background-color:rgb(206, 23, 23); */
        max-width: 62%;
        line-height: 1;
    }

    @media (max-width: 481px) {
        max-width: 67%;
        height: 290px;
        /* margin-left: .5rem; */

        p{
          font-size: 1.3rem;
        }

    }

    @media (max-width: 430px) {
        max-width: 62%;
        height: 270px;
        /* margin-left: .5rem; */

        p{
          font-size: 1.3rem;
        }

    }

    @media (max-width: 395px){
        max-width: 50%;
        height: 223px;
        /* margin-left: .8rem; */
        p{
          font-size: 1rem;  
        }
    }
`;
export const SocialMediaTitle = styled.h2`
    max-width: 360px;
    font-size: 1.7rem;
    font-weight: 500;
    margin-top: 10px;

    span{
        color: hsl(39, 100%, 71%);
    }

    @media (max-width: 650px){
        font-size: 3.1rem;
    }

    @media (max-width: 481px){
        font-size: 1.7rem;
    }

    @media (max-width: 430px) {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 395px){
        font-size: 1.3rem;
        margin-bottom: 2.5rem;
    }

        

`;
export const SocialMediaStarIcon = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: -2rem;
    
    
    svg{
        width: 30px;
        height: 30px;
    }
    
    @media (max-width: 425px) {
        svg{
        width: 23px;
        height: 23px;
    }
    }
    @media (max-width: 320px) {
        svg{
        width: 20px;
        height: 20px;
    }
}
`;

// Estilos do componente GridSchedulePosts
export const GridSchedulePosts = styled.div`
    grid-column: 4; 
    grid-row: 1 / 3; 

    overflow: hidden;
    max-width: 14.5rem;
    
    background-color:hsl(254, 88%, 90%);
    border-radius: .5rem; 
    

    img{
        width: 326px;
        height: 317px;
        margin-left: 30px;
    }

    @media (max-width: 1024px){
        width: 234px;
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

    @media (max-width: 481px){
        min-width: 24.7rem;
    }

    @media (max-width: 430px) {
        min-width: 23.14rem;

        img{
        width: 276px;
        height: 257px;
        margin-left: 0;
        }
    }

    @media (max-width: 395px) {
        min-width: 19rem;
        

        img{
        width: 256px;
        height: 257px;
        margin-left: 0;
        }
    }
`;

export const SchedulePostsTitle = styled.h2`
    max-width: 178px;
    /* background-color: #ffffff; */
    text-align: left;
    margin: 3rem 0 1rem 2rem;

    @media (max-width: 850px){
        min-width: 75%;
        
        font-size: 1.8rem;
        text-align: center;
        
        margin: 3rem 0 1rem 0;
    }

    @media (max-width: 485px) {
        max-width: 270px;
        font-size: 1.3rem;
    }

    @media (max-width: 320px) {
        max-width: 250px;
        font-size: 1.2rem;
    }
`;

export const SchedulePostsParagraph = styled.p`
    max-width: 187px;
    max-width: 177px;
    height: 83px;

    text-align: left;
    line-height: 1;

    margin: 1rem 0 2rem 2rem;
    /* background-color: #ffffff; */

    @media (max-width: 850px){
        min-width: 75%;
        
        margin: 1rem 0 2rem 1rem;

        text-align: center;
        font-size: 1.6rem;
    }

    @media (max-width: 485px){
        max-width: 270px;
        font-size: 1rem;
        margin: 1rem 0 0 0;
    }

    @media (max-width: 320px) {
        max-width: 250px;
        font-size: 1rem;
        /* margin-top: 1rem; */
        margin: 1rem 0 0 0;
        
    }
`;

// Estilos do componente GridAiContent
export const GridAiContent = styled.div`
    grid-column: 1;
    grid-row: 2 / 5;

    width: 257px;
    height: 440px;
    background-color: hsl(39, 100%, 71%);
    
    border-radius: .5rem;
    margin-top: 4.5rem;
    overflow: hidden;

    img{
        width: 82%;
    }

    @media (max-width: 1024px){
        max-width: 13rem;
        
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

    @media (max-width: 481px){
        min-width: 24.7rem;

        img{
            width: 75%;
        }
    }

    @media (max-width: 430px) {
        min-width: 23.14rem;
        margin-top: .1rem;



        img{
            width: 72%;
        }
    }

    @media (max-width: 395px) {
        
        min-width: 19rem;
        height: 355px;

        img{
        width: 72%;
    }

    }
`;

export const AiContentTitle = styled.h2`
    max-width: 158px;
    font-size: 2rem;
    text-align: left;
    line-height: 1;
    margin: 1.5rem 0 2.5rem 1.3rem;
    background-color: aquamarine;
   
    @media (max-width: 1024px){
        font-size: 1.7rem; 
    }

    @media (max-width: 850px){
        max-width: 388px;
        font-size: 2rem;
        margin-left: 1.5rem;
    }

    @media (max-width: 481px){
        font-size: 1.9rem;
        max-width: 328px;
    }

    @media (max-width: 330px){
        font-size: 1.4rem;
        max-width: 228px;
    }
`;

// Estilos do componente GridMultiplePlatforms
export const GridMultiplePlatforms = styled.div`
    grid-row: 2;
    width: 16.188rem;
    height: 15.813rem;
    background-color:hsl(0, 0%, 100%);
    border-radius: .5rem;
    overflow: hidden;

    img{
        max-width: 338px;
        margin: 1.1rem 0 0 1.1rem;
    }

    @media (max-width: 1024px){
        /* max-width: 12.5rem; */
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
        
    }

    @media (max-width: 481px){
        min-width: 24.7rem;
        height: 10.55rem;
    }

    @media (max-width: 430px) {
        min-width: 23.14rem;
        height: 10.25rem;

        img{
            min-width: 30%;
        }
    }

    @media (max-width: 395px) {
        min-width: 19rem;
        height: 8.25rem;
        

        img{
            max-width: 258px;
            
        }
    }
`;

export const MultiplePlatformsParagraph = styled.p`
    font-size: 1.497rem;
    font-weight: 500;
    max-width: 186px;
    /* height: 116px; */
    text-align: left;
    line-height: 1;
    margin-left: 1.4rem;
    background-color:rgb(83, 216, 176);

    @media (max-width: 850px){
        min-width: 95%;
        margin: 0;
        font-size: 2.797rem;
    }

    @media (max-width: 768px){
        font-size: 2.482rem;
        margin-left: 1.4rem;
    }
    @media (max-width: 481px) {
        font-size: 1.7rem;
    }

    @media (max-width: 430px) {
        min-width: 80%; 
        font-size: 1.3rem;
        margin-left: 0;
        
    }

    @media (max-width: 395px) {
        font-size: 1.2rem;
    }

    
`;

// Estilos do componente GridConsistentSchedule
export const GridConsistentSchedule = styled.div`
    grid-row: 2; 
    width: 259px;
    max-height: 253px;
    font-weight: 500;
    overflow: hidden;
    background-color:hsl(39, 100%, 71%);
    border-radius: .5rem;
    line-height: 1;

    img{
        max-width: 208px;
        margin: .9rem 0 0 .1rem;
    }

    @media (max-width: 1024px){
        /* max-width: 12.5rem; */


        img{
            min-width: 100px;
            min-height: 100px; 
            
        }
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 3;

        min-width: 31.85rem;
        min-height: 239px;

        img{
            min-width: 250px;
            
            margin: -20px 0 0 -45%;
        }
    }

    @media (max-width: 481px){
        min-width: 24.7rem;
        max-height: 11rem;

        img{
            min-width: 100px;
            margin: 5px 0 0 -34%;
        }
    }

    @media (max-width: 430px) {
        
        min-width: 23.14rem;
        max-height: 11rem;


        img{
            min-width: 100px;
            margin: 5px 0 0 -29%;
        }
        
    }

    @media (max-width: 395px) {
        min-width: 19rem;
        
        img{
            min-width: 100px;
            min-height: 100px;
            margin-left: -.7rem; 
            margin-top: .3rem;
        }
    }
    
`;

export const ConsistentScheduleParagraph = styled.p`
    font-size: 1.497rem;
    font-weight: 500;
    text-align: left;
    line-height: 1;
    
    max-width: 186px;
    margin-left: 1.4rem;

    background-color: aqua;

    @media (max-width: 850px){
        
        min-width: 61%;
        font-size: 1.7rem;
        
    }

    @media (max-width: 481px){
        font-size: 1.4rem;
    }

    @media (max-width: 430px) {
        min-width: 81%;
        font-size: 1.4rem;
    }
    @media (max-width: 320px) {
        margin-top: 1.7rem;
        font-size: 1.3rem;
    }
`;

// Estilos do componente GridAudienceGrowth

export const GridAudienceGrowth = styled.div`
    grid-row: 3; 
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

    @media (max-width: 481px){
        min-width: 24.7rem;
    }

    @media (max-width: 430px) {
       min-width: 23.14rem;
        height: 213px;
        align-items: start;
        
        img{
            margin-left: 1rem;
        }
    }


    @media (max-width: 395px) {
        
        min-width: 19rem;
        height: 213px;
       

        img{
            width: 158px;
        }
        
    }
`;

export const AudienceGrowthParagraph = styled.p`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    margin-left: 1.1rem;
    text-align: left;
    font-size: 1.18rem;


    span{
        font-size: 3rem;
        
    }

    @media (max-width: 850px){
        margin-left: 1rem;
    }

    @media (max-width: 425px) {
        min-width: 23.94rem;

        margin-left: 1rem;
    }

    @media (max-width: 320px) {
        font-size: 1rem;

        span{
        font-size: 3.2rem;
        
    }
    }
`;

// Estilos do componente GridGrowFollowers

export const GridGrowFollowers = styled.div`
    grid-column: 3 / 5;
    grid-row: 3;
    width: 503px;
    height: 253px;
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: hsl(256, 67%, 59%);
    border-radius: .5rem;

    color: hsl(0, 0%, 100%);
    font-size: 2.2rem;
    text-align: left;
    line-height: 1;
    
   img{
        width: 222px;
        height: 198px;
        margin-left: 1.2rem;
    }

    @media (max-width: 1024px){
        max-width: 470px;
        

        img{
            width: 210px;
        }

        p{
            font-size: 1.7rem;
        }
    }

    @media (max-width: 850px){
        grid-column: 1;
        grid-row: 5;

        display: flex;
        flex-direction: column;

        max-width: 31.94rem;
        height: 23.188rem;
     

        img{
            margin-top: 1rem;
        }

        p{
            font-size: 2rem;
            text-align: center;
            max-width: 13.375rem;
            
            margin-top: 1rem;
        }

       
    }

    @media (max-width: 481px){
        max-width: 24.7rem;
    }

    @media (max-width: 430px){
        max-width: 23.14rem;
    }

    @media (max-width: 395px) {
        max-width: 19rem;
        
        
    }
        
`;