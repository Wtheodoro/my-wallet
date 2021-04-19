import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    margin: .5rem 0;
    padding: .6rem;
    border-radius: 5px;
    font-weight: bold;
    color: ${props => props.theme.colors.font};
    background-color: ${props => props.theme.colors.warning};
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
`;
