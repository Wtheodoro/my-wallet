import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Content;

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.font}
`;
