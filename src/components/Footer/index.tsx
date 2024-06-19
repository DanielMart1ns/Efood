import { FooterContainer, SocialLinks, FooterDescription } from './style';
import logo from '../../assets/images/logo.svg';
import instagramLogo from '../../assets/images/instagram-logo.svg';
import facebookLogo from '../../assets/images/facebook-logo.svg';
import twitterLogo from '../../assets/images/twitter-logo.svg';

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="efood logo" />
    <div>
      <SocialLinks>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramLogo} alt="instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookLogo} alt="facebook logo" />
          </a>
        </li>
        <li>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <img src={twitterLogo} alt="twitter logo" />
          </a>
        </li>
      </SocialLinks>
      <FooterDescription>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterDescription>
    </div>
  </FooterContainer>
);

export default Footer;
