import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Content;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.font};
    padding: 1.6rem;

    /* total viewl heig minus main header height */
    height: calc(100vh - 70px);
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
`;
