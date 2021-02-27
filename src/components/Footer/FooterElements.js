import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: fkex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  width: 180px;
  margin: 16px;

  @media screen and (max-width: 420px) {
    margin: 0;
    width: 100%;
    padding: 10px;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 0.5rem;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  justify-self: start;
  font-size: 1.5rem;
  text-decoration: none;
  align-items: center;
  display: flex;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-top: 20px;
`;
