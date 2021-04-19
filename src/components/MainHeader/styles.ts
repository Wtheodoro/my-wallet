import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MainHeader;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.font};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 0.8rem;
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    @media(max-width: 768px) {
        justify-content: flex-end;    
    }
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.font};
`

export const Welcome = styled.h3``

export const UserName = styled.span``

export const ToggleContainer = styled.div`
    @media(max-width: 768px) {
        display: none;     
    }
`;

