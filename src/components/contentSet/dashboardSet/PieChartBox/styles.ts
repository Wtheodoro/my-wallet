import styled, { keyframes } from 'styled-components';

interface IIndicatorProps {
    backgroundColor: string
}

const animate = keyframes`
    0% {
        transform: translateX(+100px);
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
    width: 48%;
    height: 16.5rem;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.font};
    border-radius: 7px;
    margin: 0.6rem 0;
    display: flex;

    animation: ${animate} .8s ease;

    @media(max-width: 540px) {
        display: flex;
        width: 100%;
    }
`;

export const LeftSide = styled.aside`
    padding: 1.8rem 0 1.8rem 1.2rem;

    > h2 {
        margin-bottom: 1.5rem;
    }

    @media(max-width: 1345px) {
        padding: 0 .9rem .3rem;
        margin-bottom: .5rem;

        > h2 {
            margin-top: 1rem;
            margin-bottom: .5rem;
        }
    }

    @media(max-width: 768px) {
        padding: 1rem;
        margin-bottom: .5rem;
    }
`;

export const IndicatorContainer = styled.ul`
    list-style: none;
    height: 80%;
    padding-right: 1rem 0;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    @media(max-width: 1345px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Indicator = styled.li<IIndicatorProps>`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    > div {
        background-color: ${props => props.backgroundColor};
        width: 3.2rem;
        height: 2.5rem;
        border-radius: 5px;
        font-size: 1.2rem;
        line-height: 2.5rem;
        text-align: center;
    }

    > span {
        margin-left: 0.3rem;
    }

    @media(max-width: 768px) {
        font-size: .9rem;
        margin: .2rem 0;

        > span {
            margin-left: .5rem;
        }
    }
`;

export const RightSide = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px) {
        height: 100%;
    }
`;
