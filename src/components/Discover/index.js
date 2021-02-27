import React from "react";

import {
  DiscoverContainer,
  DiscoverH1,
  DiscoverCard,
  DiscoverH2,
  DiscoverIcon,
  DiscoverP,
  DiscoverWrapper,
} from "./DiscoverElements";

const Discover = () => {
  return (
    <>
      <DiscoverContainer id="discover">
        <DiscoverH1>How Does Moneys Help you?</DiscoverH1>
        <DiscoverWrapper>
          <DiscoverCard>
            <DiscoverIcon src="/images/savings.svg" />
            <DiscoverH2>Reduce Expenses</DiscoverH2>
            <DiscoverP>Save money by finding your weakspots.</DiscoverP>
          </DiscoverCard>
          <DiscoverCard>
            <DiscoverIcon src="/images/investing.svg" />
            <DiscoverH2>No Fees</DiscoverH2>
            <DiscoverP>Moneys is and Always be free.</DiscoverP>
          </DiscoverCard>
          <DiscoverCard>
            <DiscoverIcon src="/images/signup.svg" />
            <DiscoverH2>Three simple steps</DiscoverH2>
            <DiscoverP>And 3 minutes of your time.</DiscoverP>
          </DiscoverCard>
        </DiscoverWrapper>
      </DiscoverContainer>
    </>
  );
};

export default Discover;
