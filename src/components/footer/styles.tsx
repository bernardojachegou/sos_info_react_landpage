import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #0c2259;
`;

export const FooterWrap = styled.div`
    padding: 40px 24px;
    max-width: 820px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 820px) {
        padding-top: 16px;
    }
`;

export const FooterLinkTitleContainer = styled.div`
    margin: 16px;
    text-align: center;
    color: #fff;
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
`;

export const FooterLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 420px) {
        display: flex;
        flex-direction: column;
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;
    &:hover {
        color: #ff6600;
        transition: 0.3s ease-out;
    }
`;
