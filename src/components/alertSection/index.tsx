import {
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
} from './styles';
import alert from '../../assets/imgs/alert.png';

const AlertSection = () => {
    return (
        <>
            <InfoContainer id="alert-section">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Informação nunca é demais!</TopLine>
                                <Heading>Últimos alertas:</Heading>
                                <Subtitle>Nenhum alerta encontrado.</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img
                                    src={alert}
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

export default AlertSection;
