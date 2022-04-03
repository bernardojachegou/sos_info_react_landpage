import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './styles';
import logo from '../../assets/imgs/logo.png';

const Navbar = ({ toggle }: any) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo src={logo}></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="alert-section"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Alertas
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Você sabia?
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="learn-sms"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                SMS
                            </NavLinks>
                        </NavItem>
                        <NavItem></NavItem>
                        <NavItem>
                            <NavLinks
                                to="risk-section"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                Áreas de risco
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="contact"
                                smooth={true}
                                duration={1000}
                                offset={-80}
                            >
                                Links úteis
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
