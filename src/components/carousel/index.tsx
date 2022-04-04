import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import carouselImg1 from '../../assets/imgs/risk-area1.png';
import carouselImg2 from '../../assets/imgs/risk-area2.png';

const CarouselComponent = () => {
    return (
        <Carousel
            showArrows={false}
            showThumbs={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
        >
            <div>
                <img src={carouselImg1} alt="" />
                <p className="legend">Área de risco em Volta Redonda</p>
            </div>
            <div>
                <img src={carouselImg2} alt="" />
                <p className="legend">Área de risco em Volta Redonda</p>
            </div>
        </Carousel>
    );
};

export default CarouselComponent;
