import React from 'react';
import { GoStarFill } from "react-icons/go";

import { 
  GridContainer, 
  GridCreatePost, 
  GridSocialMedia, 
  GridSchedulePosts, 
  GridAiContent, 
  GridMultiplePlatforms, 
  GridConsistentSchedule, 
  GridAudienceGrowth, 
  GridGrowFollowers, 
  ConteinerWrapper, 
  SocialMediaTitle, 
  SocialMediaStarIcon, 
  CreatePostTitle, 
  AiContentTitle, 
  SchedulePostsTitle, 
  SchedulePostsParagraph, 
  MultiplePlatformsParagraph, 
  AudienceGrowthParagraph, 
  ConsistentScheduleParagraph 
} from "./styles";

const ContentScheduler = () => {
  

  return (
    <ConteinerWrapper>
      <GridContainer>

        <GridCreatePost>
          <CreatePostTitle>
            Create and schedule content <span>quicker.</span>
          </CreatePostTitle>
            <img src="/images/illustration-create-post.webp" alt="illustration-create-post" />
        </GridCreatePost>

        <GridSocialMedia>
          <SocialMediaTitle>
            <h1>Social Media <span>10x</span> Faster with AI</h1>
            
          </SocialMediaTitle>
            <SocialMediaStarIcon>
              <GoStarFill color="hsl(39, 100%, 71%)" />
              <GoStarFill color="hsl(39, 100%, 71%)" />
              <GoStarFill color="hsl(39, 100%, 71%)" />
              <GoStarFill color="hsl(39, 100%, 71%)" />
              <GoStarFill color="hsl(39, 100%, 71%)" />
            </SocialMediaStarIcon>

            <p>Over 4,000 5-star reviews</p>
        </GridSocialMedia>

        <GridSchedulePosts>
          <SchedulePostsTitle>
            Schedule to social media. 
          </SchedulePostsTitle> 
            <img src="/images/illustration-schedule-posts.webp" alt="illustration-schedule-posts" />
          <SchedulePostsParagraph>
            Optimize post timings to publish content at the perfect time for your audience.
          </SchedulePostsParagraph>
        </GridSchedulePosts>

        <GridAiContent>
          <AiContentTitle>
            Write your content using AI.
          </AiContentTitle>
            <img src="/images/illustration-ai-content.webp" alt="illustration-ai-content" />
        </GridAiContent>
       
        <GridMultiplePlatforms>
            <img src="/images/illustration-multiple-platforms.webp" alt="illustration-multiple-platforms" />
          <MultiplePlatformsParagraph>
            Manage multiple accounts and platforms.
          </MultiplePlatformsParagraph>
        </GridMultiplePlatforms>

        <GridConsistentSchedule>
          <ConsistentScheduleParagraph>
            Maintain a consistent posting schedule.
          </ConsistentScheduleParagraph>
            <img src="/images/illustration-consistent-schedule.webp" alt="illustration-consistent-schedule" />
        </GridConsistentSchedule>

        <GridAudienceGrowth>
          <AudienceGrowthParagraph>
            <span>&gt;56% </span>
            faster audience growth
          </AudienceGrowthParagraph>
            <img src="/images/illustration-audience-growth.webp" alt="illustration-audience-growth" />
        </GridAudienceGrowth>

        <GridGrowFollowers>
          <img src="/images/illustration-grow-followers.webp" alt="illustration-grow-followers" />
          <p>Grow followers with non-stop content.</p>
        </GridGrowFollowers>

    </GridContainer>
  </ConteinerWrapper>    
  );
};


export default ContentScheduler;
