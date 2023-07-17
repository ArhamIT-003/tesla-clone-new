import React from "react";
import Section from "./Section";
import { styled } from "styled-components";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImg="/model-s.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section 
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImg="/model-y.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section 
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImg="/model-x.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section 
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="/model-3.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
