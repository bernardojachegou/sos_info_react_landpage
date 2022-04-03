import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLink,
    FooterLinkWrapper,
} from './styles';

const Footer = () => {
    return (
        <FooterContainer id="contact">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLink
                            href="https://www.voltaredonda.rj.gov.br/"
                            target="_blank"
                        >
                            Prefeitura
                        </FooterLink>
                        <FooterLink
                            href="http://www.defesacivil.rj.gov.br/"
                            target="_blank"
                        >
                            Defesa Civil
                        </FooterLink>
                        <FooterLink
                            href="https://www.voltaredonda.rj.gov.br/horario-de-onibus/"
                            target="_blank"
                        >
                            Horários Ônibus
                        </FooterLink>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
