import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background-color: ${({ lightBgColor }: any) =>
        lightBgColor ? '#f6f6f6' : '#f6f6f6'};
    @media screen and (max-width: 820px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }: any) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};
    @media screen and (max-width: 820px) {
        grid-template-areas: 'col1' 'col2';
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #0c2259;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: bold;
    color: #000;
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const Subtitle = styled.p`
    font-family: 'Roboto';
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 2;
    color: #000;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 12px;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

export const ButtonLink = styled.a`
    border-radius: 12px;
    background-color: #0c2259;
    white-space: nowrap;
    padding: ${({ big }: any) => (big ? '14px 48px' : '12px 30px')};
    color: white;
    font-size: ${({ fontBig }: any) => (fontBig ? '32px' : '24px')};
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #ff6600;
    }
`;
