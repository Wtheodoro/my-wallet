import styled, { keyframes } from 'styled-components';

interface IIndicatorProps {
    backgroundColor: string
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }

    50% {
        opacity: .5;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 21.3rem;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.font};
    margin: 0.6rem 0;
    padding: 1.5rem 1.3rem 4rem;
    border-radius: 7px;

    > h2 {
        margin-bottom: 1.3rem;
    }

    animation: ${animate} .8s ease;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 1.3rem;
        padding-left: 1rem;
    }

    @media(max-width: 768px) {
        flex-direction: column;

        > h2 {
            margin-bottom: .6rem;
        }
    }
`;
export const IndicatorContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 1rem;
`;
export const Indicator = styled.li<IIndicatorProps>`
    display: flex;
    align-items: center;
    margin: 0 0 .5rem 1rem;

    > div {
        background-color: ${props => props.backgroundColor};
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
        font-size: 1.2rem;
        line-height: 2.5rem;
        text-align: center;
    }

    > span {
        margin-left: 0.3rem;
    }

    @media(max-width: 768px) {

        > div {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;
