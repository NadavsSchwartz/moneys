import styled from "styled-components";

export const DiscoverContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const DiscoverWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const DiscoverCard = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 278px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const DiscoverIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const DiscoverH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DiscoverH2 = styled.h1`
  font-size: 1rem;

  margin-bottom: 10px;
`;

export const DiscoverP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
