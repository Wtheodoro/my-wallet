import styled, { keyframes } from 'styled-components';

interface IContainerProps {
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

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 10rem;
    margin: 0.6rem 0;
    color: ${props => props.theme.colors.font};
    background-color: ${props => props.backgroundColor};
    border-radius: 5px;
    padding: .7rem 1.4rem;
    position: relative;
    overflow: hidden;

    animation: ${animate} .8s ease;

    > img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: -25px;
        opacity: .3;
    }

    > span {
        font-size: 1.3rem;
        font-weight: 500;
    }

    > small {
        font-size: 0.9rem;
        position: absolute;
        bottom: 0.6rem;
    }

    @media(max-width: 768px) {
        > span {
            font-size: 0.8rem;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 1.4rem;

            > strong {
            display: inline-block;
            width: 100%;
            }
        }   
    }

    @media(max-width: 540px) {
        width: 100%;

        > h1 {
            display: flex;
            font-size: 1.4rem;

            strong {
            display: flex;
            width: auto;
            font-size: 1.4rem;
            margin-right: .5rem;
            }
        } 
    }
`;
