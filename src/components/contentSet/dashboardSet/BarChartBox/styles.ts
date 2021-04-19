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
    min-height: 16rem;
    margin: .6rem 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.font};
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    
    animation: ${animate} .8s ease;

    @media(max-width: 540px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }
`;

export const LeftSide = styled.aside`
    flex: 1;
    padding: 1.8rem 1.3rem;

    > h2 {
        margin-bottom: .6rem;
        padding-left: 1rem;
    }
`;
export const RightSide = styled.main`
    flex: 1;
    min-height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
`;

export const IndicatorContainer = styled.ul`
    list-style: none;
    height: 90%;
    padding-right: 1rem;
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

    @media(max-width: 540px) {
        width: 100%;
        height: auto;
        display: flex;
    }
`;

export const Indicator = styled.li<IIndicatorProps>`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding-left: 1rem;


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

    @media(max-width: 540px) {
        > div {
            width: 2rem;
            height: 2rem;
            font-size: .7rem;
            line-height: 2rem;
        }
    }
`;