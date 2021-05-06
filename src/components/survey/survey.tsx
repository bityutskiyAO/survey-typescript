import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { IApiResults } from '../../interfaces'
import SurveyQuestion from '../survey-question/survey-question'
import { StyledWrapper } from '../../styled-components'
import SurveyResults from '../survey-results/survey-results'

interface ISurveyProps {
    questions: Array<IApiResults>
}

export interface IAnswerValue {
    [key: string]: boolean | string
}

const SurveyWrapper = styled(StyledWrapper)`
  width: 800px;
  max-width: 1200px;
`

const Survey: FC<ISurveyProps> = (props) => {
    const { questions } = props
    const [currentQuestionNumber, setQuestionNumber] = useState<number>(1)
    const [answers, setAnswers] = useState<Array<IAnswerValue>>([])

    useEffect(() => {
        setQuestionNumber(0)
    }, [questions])

    const handleSendAnswer = useCallback((answer: IAnswerValue) => {
        setAnswers((prevState) => ([...prevState, answer]))
        setQuestionNumber((prevState) => (prevState !== questions.length ?
            prevState + 1 : prevState))
    }, [currentQuestionNumber])

    return (
        <SurveyWrapper>
            {currentQuestionNumber !== questions.length ?
                (
                    <SurveyQuestion
                        onClick={handleSendAnswer}
                        currentQuestionNumber={currentQuestionNumber}
                        allQuestions={questions.length}
                        question={questions[currentQuestionNumber]}
                    />
                ) : (
                    <SurveyResults
                        questions={questions}
                        answers={answers}
                    />
                )}
        </SurveyWrapper>
    )
}

export default Survey
