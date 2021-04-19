import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Aside;
    
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 1.2rem;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 3rem;
    width: 3rem;
`;

export const Title = styled.h3`
    color : ${props => props.theme.colors.font};
    margin-left: 0.6rem;
`;

export const Menu = styled.nav`
    display: flex;
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    color : ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 1.2rem;
        margin-right: 0.5rem;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 1rem;
    color : ${props => props.theme.colors.info};
    border: none;
    background: none;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 1.2rem;
        margin-right: 0.5rem;
    }
`;


