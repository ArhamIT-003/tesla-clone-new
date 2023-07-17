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
      <Section
        title="Lower Cost Solar Panels in America"
        description="Mone-back guarantee"
        backgroundImg="/solar-panel.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="/solar-roof.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="/accessories.jpg"
        leftBtn="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
