import styled, { css } from 'styled-components';

interface IContainerProps {
    menuIsOpen: Boolean
}

interface IThemeToggleFooterProps {
    menuIsOpen: Boolean
}

export const Container = styled.div<IContainerProps>`
    grid-area: Aside;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 1.2rem;
    border-right: 1px solid ${props => props.theme.colors.gray};
    position: relative;

    @media(max-width: 768px) {
        padding: 0 1.5rem;
        position: fixed;
        z-index: 2;
        height: ${props => props.menuIsOpen ?  '100vh' : '70px'};
        width: ${props => props.menuIsOpen && '45vw'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;

`;

export const LogoImg = styled.img`
    height: 3rem;
    width: 3rem;

    @media(max-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color : ${props => props.theme.colors.font};
    margin-left: 0.6rem;

    @media(max-width: 768px) {
        display: none;
    }
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

export const ToggleMenu = styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 5px;
    font-size: 2.2rem;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.font};
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    display: none;

    @media(max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 3rem;

    @media(max-width: 768px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;