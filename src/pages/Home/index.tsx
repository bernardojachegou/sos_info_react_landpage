import { useState } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sideBar';
import AlertSection from './components/alertSection';
import DidYouKnowSection from './components/didYouKnowSection';
import HowToSection from './components/howToSection';
import RiskAreasSection from './components/riskSection';
import Footer from '../../components/footer';

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
            <DidYouKnowSection />
            <HowToSection />
            <RiskAreasSection />
            <Footer />
        </>
    );
}
