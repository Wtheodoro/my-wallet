import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.font}
`;

export const ToggleSwitch = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    })
)<ReactSwitchProps>`
    margin: 0 0.5rem;
`;

