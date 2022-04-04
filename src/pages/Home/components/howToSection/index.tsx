import {
    BtnWrap,
    Heading,
    TextWrapper,
    TopLine,
    Subtitle,
    InfoWrapper,
    InfoRow,
    InfoContainer,
    Column1,
    Column2,
    ImgWrap,
    Img,
    ButtonLink,
} from './styles';
import cellphone from '../../../../assets/imgs/cellphone.jpeg';

const HowToSection = () => {
    return (
        <>
            <InfoContainer id="learn-sms">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Informação nunca é demais!</TopLine>
                                <Heading>Como receber alertas?</Heading>
                                <Subtitle>
                                    Você poderá receber no seu celular alertas e
                                    informações da Defesa Civil do Rio de
                                    Janeiro sobre risco de mau tempo na sua
                                    região como deslizamento, inundação,
                                    alagamento, enxurrada, granizo e vendaval.{' '}
                                </Subtitle>
                                <Subtitle>
                                    Basta enviar SMS com o CEP da sua região
                                    para o número 40199.
                                </Subtitle>
                                <BtnWrap>
                                    <ButtonLink
                                        href="https://www.defesacivil.rj.gov.br/index.php/para-o-cidadao/receba-alertas-sms"
                                        target="_blank"
                                    >
                                        Saiba mais
                                    </ButtonLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img
                                    src={cellphone}
                                    alt="imagem de uma pessoa utilizando um aparelho celular"
                                />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default HowToSection;
