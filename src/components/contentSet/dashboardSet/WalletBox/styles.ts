import styled from 'styled-components';

interface IContainerProps {
    backgroundColor: string
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.backgroundColor}
`;
