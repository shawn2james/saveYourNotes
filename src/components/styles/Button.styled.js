import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
    font-size: ${props => props.theme.fontSizes[props.size]};
    padding: ${props => props.theme.padding[props.size]};
    font-weight: 600;
    border-radius: 20px;
    border: none;
    text-align: center;
`

export default StyledButton;