import { HeroContainer, HeroBg, HeroContent, HeroH1 } from './styles';
import CarouselComponent from '../../../../components/carousel';

const RiskAreasSection = () => {
    return (
        <HeroContainer id="risk-section">
            <HeroBg>
                <CarouselComponent />
            </HeroBg>
            <HeroContent>
                <HeroH1>Áreas de risco</HeroH1>
            </HeroContent>
        </HeroContainer>
    );
};

export default RiskAreasSection;
