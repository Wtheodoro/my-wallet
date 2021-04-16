import styled from 'styled-components';

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

    > header img {
        width: 2.2rem;
        margin-left: 0.5rem;
    }

    > header p {
        font-size: 1.2rem;
    }
`;
