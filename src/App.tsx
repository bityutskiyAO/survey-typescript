import React, { FC } from 'react'
import styled from 'styled-components'

import { Survey } from './components'
import { TitleH1, Button } from './styled-components'
import { useAppDispatch, useAppSelector } from './utils'
import { fetchSurvey } from './__data__/reducers/survey'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 32px 0 32px 0;
`

const App: FC = () => {
    const {
        questions
    } = useAppSelector((state) => state.survey)
    const dispatch = useAppDispatch()

    const handleStartSurveyOnClick = () => {
        dispatch(fetchSurvey())
    }

    return (
        <Box>
            {questions && questions.length > 0 ? (
                <Survey
                    questions={questions}
                />
            ) : (
                <>
                    <TitleH1>
                        GoSurvey!
                    </TitleH1>
                    <Button
                        className="bigBtn"
                        onClick={handleStartSurveyOnClick}
                    >
                        Go!
                    </Button>
                </>
            )}
        </Box>
    )
}

export default App
