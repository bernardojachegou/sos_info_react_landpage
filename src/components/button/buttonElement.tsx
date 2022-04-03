import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 12px;
    background-color: #0c2259;
    white-space: nowrap;
    padding: ${({ big }: any) => (big ? '14px 48px' : '12px 30px')};
    color: white;
    font-size: ${({ fontBig }: any) => (fontBig ? '32px' : '24px')};
    outline: none;
    border: none;
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
