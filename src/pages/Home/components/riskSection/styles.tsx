import styled from 'styled-components';

export const HeroContainer = styled.div`
    margin: 0 auto;
    background-color: '#fff';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 860px;
    max-width: 1100px;
`;

export const HeroBg = styled.div``;

export const HeroContent = styled.div`
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 420px) {
        padding: 0;
    }
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const HeroH1 = styled.h1`
    color: black;
    font-size: 48px;
    text-align: center;
    width: 450px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
        max-width: 400px;
    }
    @media screen and (max-width: 480px) {
        max-width: 300px;
        font-size: 32px;
    }
`;
