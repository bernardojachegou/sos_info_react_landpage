import { useState } from 'react';
import AlertSection from '../../components/alertSection';
import Footer from '../../components/footer';
import HeroSection from '../../components/heroSection';
import InfoSection from '../../components/infoSection';
import Navbar from '../../components/navbar';
import RiskSection from '../../components/riskSection';
import Sidebar from '../../components/sideBar';
import './styles';

export function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log('is open!');
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <AlertSection />
            <HeroSection />
            <InfoSection />
            <RiskSection />
            <Footer />
        </>
    );
}
