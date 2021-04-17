import styled from 'styled-components';

interface IContainerProps {
    backgroundColor: string
}

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
`;