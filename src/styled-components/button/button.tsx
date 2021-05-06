import styled from 'styled-components'

const Button = styled.button`
    padding: 8px 16px;
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    
    &.bigBtn {
      width: 10rem;
      height: 5rem;
      font-size: 3rem;
    }
`

export default Button
