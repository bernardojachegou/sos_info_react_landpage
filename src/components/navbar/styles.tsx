import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: #0c2259;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 2px solid #ff6600;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    padding: 0 16px;
`;

export const NavLogo = styled.img`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 820px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    font-size: 1rem;
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid black;
    }
    &:hover {
        color: red;
    }
`;
