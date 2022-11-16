import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
} from "./FooterElements";

import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkTitle><LocalLaundryServiceIcon />LaundrEasy</FooterLinkTitle>
          <SocialMedia>

            <SocialMediaWrap>
              <WebsiteRights>LaundrEasy &copy; {new Date().getFullYear()} &nbsp; All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;