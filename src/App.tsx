import React, { FC } from 'react'

import { Survey } from './components'
import { TitleH1, Button, MainBox } from './styled-components'
import { useAppDispatch, useAppSelector } from './utils'
import { fetchSurvey } from './__data__/reducers/survey'

const App: FC = () => {
    const {
        questions,
        answers
    } = useAppSelector((state) => state.survey)
    const dispatch = useAppDispatch()

    const handleStartSurveyOnClick = () => {
        dispatch(fetchSurvey())
    }

    return (
        <MainBox>
            {questions && questions.length > 0 ? (
                <Survey
                    answers={answers}
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
        </MainBox>
    )
}

export default App
