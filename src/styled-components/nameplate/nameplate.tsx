import styled from 'styled-components'

const colors: {[key: string]: string} = {
    easy: 'green',
    medium: '#FFBF00',
    hard: 'red'
}

const Nameplate = styled.p<{variant: string}>`
  border-radius: 4px;
  color: white;
  font-weight: bold;
  padding: 4px;
  margin: 0 0 0 16px;
  background-color: ${(props) => colors[props.variant]};
`

export default Nameplate
