import styled, { css } from 'styled-components'

const defaultStyles = css<{color ?: string}>`
  margin: 0;
  color: ${(props) => props.color || props.theme.colors.primary}
`

const TitleH1 = styled.h1`
  ${(props) => defaultStyles};
  margin: 16px;
  font-size: 80px;
`

const TitleH2 = styled.h2`
  ${(props) => defaultStyles};
  font-size: 56px;
`

const TitleH3 = styled.h3`
  ${(props) => defaultStyles};
  font-size: 40px;
`

const TitleH4 = styled.h4`
  ${(props) => defaultStyles};
  font-size: 24px;
`

const TitleH5 = styled.h5`
  ${(props) => defaultStyles};
  font-size: 16px;
`

export {
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH4,
    TitleH5
}
