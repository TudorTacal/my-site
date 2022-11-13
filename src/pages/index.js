import React from "react";
import SEO from "../components/seo";
import {
  HomePageBody,
  HomePageContainer,
  HomePageTitle,
  HomePageFooter,
  GridContainer,
  StyledLink,
} from '../presentational';

const HomePage = () => {
  return (
    <GridContainer>
      <SEO title="Tudor Tacal" />
      <HomePageContainer>
        <HomePageTitle>
          I'm Tudor Tacal
        </HomePageTitle>
        <HomePageBody>
          Senior Front End developer at {" "}
          <StyledLink href="https://blockfi.com" target="_blank">
            BlockFi
          </StyledLink>
          {" "} & certified Scrum Master.
          <br />
          <br />
          CODING is my passion - I use React and NodeJS to build high performance web applications.
          Agile, Lean - also proud father of a little dragon girl.
          <br />
        </HomePageBody>
        <HomePageFooter>
          Copyright © 2018 Tudor Tacal
        </HomePageFooter>
      </HomePageContainer>
    </GridContainer>
  )
}

export default HomePage
