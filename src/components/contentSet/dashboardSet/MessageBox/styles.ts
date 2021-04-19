import styled, { keyframes } from 'styled-components';

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
    width: 48%;
    height: 16.5rem;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.font};
    border-radius: 7px;
    margin: 0.6rem 0;
    padding: 1.8rem 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: ${animate} .8s ease;

    > header img {
        width: 2.2rem;
        margin-left: 0.5rem;
    }

    > header p {
        font-size: 1.2rem;
    }

    @media(max-width: 768px) {

        > header h1 {
            font-size: 1.5rem;

            img {
                height: 1.3rem;
                width: 1.3rem;
            }
        }

        > header p,
        > footer span {
            font-size: .9rem;
        }
    }

    @media(max-width: 540px) {
        width: 100%;
        height: auto;

        > header p {
            margin-bottom: 1rem;
        }
    }
`;
