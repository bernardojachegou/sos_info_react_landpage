import { HeroContainer, HeroBg, HeroContent, HeroH1 } from './styles';
import CarouselComponent from '../../../../components/carousel';

const RiskAreasSection = () => {
    return (
        <HeroContainer id="risk-section">
            <HeroContent>
                <HeroH1>Áreas de risco</HeroH1>
            </HeroContent>
            <HeroBg>
                <CarouselComponent />
            </HeroBg>
        </HeroContainer>
    );
};

export default RiskAreasSection;
