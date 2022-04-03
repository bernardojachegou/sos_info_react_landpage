import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
} from './styles';
import { Button } from '../button/buttonElement';
import banner from '../../assets/imgs/banner.png';

function HeroSection() {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg src={banner} />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Você sabia que é possivel receber alertas da Defesa Civil
                    através de SMS?
                </HeroH1>
                <HeroBtnWrapper>
                    <Button
                        to="learn-sms"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                    >
                        Aprenda agora
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
