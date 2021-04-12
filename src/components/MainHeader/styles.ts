import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MainHeader;

    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.font}

`;
