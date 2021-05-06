import styled from 'styled-components'

interface IWrapper {
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between',
    align?: 'flex-start' | 'flex-end' | 'center',
    mt?: number,
    mb?: number,
    mr?: number,
    ml?: number,
}

const Wrapper = styled.div<IWrapper>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    padding: 32px;
    max-width: 1000px;
    margin-bottom: ${(props) => props.mb || 0}px;
    margin-top: ${(props) => props.mt || 0}px;
    margin-right: ${(props) => props.mr || 0}px;
    margin-left: ${(props) => props.ml || 0}px;
`

const RowWrapper = styled(Wrapper)`
  flex-direction: row;
  width: 100%;
  padding: 0;
`
const StyledWrapper = styled(Wrapper)`
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
`

export {
    Wrapper,
    RowWrapper,
    StyledWrapper
}
