import React from 'react';
import { GoStarFill } from "react-icons/go";

import { GridContainer, GridItem1, GridItem2, GridItem3, GridItem4, GridItem5, GridItem6, GridItem7, GridItem8, ConteinerWrapper, GridItem2Title, StarIcon, GridItem1Text, GridItem4Titli, GridItem3Title, GridItem3Paragraph, GridItem5Paragraph, GridItem5Paragraph7, GridItem6Paragraph } from "./styles";

const ContentScheduler = () => {
  

  return (
    <ConteinerWrapper>
    <GridContainer>
      <GridItem1>
      <GridItem1Text>
        Create and schedule content <span>quicker.</span>
        </GridItem1Text>
      <img src="/images/illustration-create-post.webp" alt="Descrição da imagem" />
      </GridItem1>
      <GridItem2>
        <GridItem2Title>
          Social Media <span>10x</span> Faster with AI
          
        </GridItem2Title>
        <StarIcon>
        <GoStarFill color="hsl(39, 100%, 71%)" size={35}/>
        <GoStarFill color="hsl(39, 100%, 71%)" size={35}/>
        <GoStarFill color="hsl(39, 100%, 71%)" size={35}/>
        <GoStarFill color="hsl(39, 100%, 71%)" size={35}/>
        <GoStarFill color="hsl(39, 100%, 71%)" size={35}/>
        </StarIcon>

        Over 4,000 5-star reviews
      </GridItem2>
      <GridItem3>
        
        <GridItem3Title>
          Schedule to social media. 
        </GridItem3Title> 
        <img src="/images/illustration-schedule-posts.webp" alt="illustration-schedule-posts" />
        <GridItem3Paragraph>
        Optimize post timings to publish content at the perfect time for your audience.
        </GridItem3Paragraph>
      </GridItem3>
      <GridItem4>
      <GridItem4Titli>
        Write your content using AI.
      </GridItem4Titli>
      <img src="/images/illustration-ai-content.webp" alt="illustration-ai-content" />
      </GridItem4>
       
      <GridItem5>
        <img src="/images/illustration-multiple-platforms.webp" alt="illustration-multiple-platforms" />
        <GridItem5Paragraph>
          Manage multiple accounts and platforms.
        </GridItem5Paragraph>
      </GridItem5>

      <GridItem6>
        <GridItem6Paragraph>
          Maintain a consistent posting schedule.
        </GridItem6Paragraph>
        <img src="/images/illustration-consistent-schedule.webp" alt="illustration-consistent-schedule" />
      </GridItem6>

      <GridItem7>
      <GridItem5Paragraph7>
        <span>&gt;56% </span>
        faster audience growth
      </GridItem5Paragraph7>
      <img src="/images/illustration-audience-growth.webp" alt="illustration-audience-growth" />
      </GridItem7>

      <GridItem8>
      <img src="/images/illustration-grow-followers.webp" alt="illustration-grow-followers" />
      <p>Grow followers with non-stop content.</p>
      </GridItem8>
    </GridContainer>
    </ConteinerWrapper>

    // <ConteinerWrapper>
	  //   <FastContentScheduler />
    //   <FastContentScheduler2 />
    //     <AiBoosted />
    //     <ChedulerSocial />
    // </ConteinerWrapper>
    
  );
};


export default ContentScheduler;
