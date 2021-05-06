import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { IApiResults, ISurveyAnswerValue } from '../../interfaces'
import SurveyQuestion from '../survey-question/survey-question'
import { StyledWrapper } from '../../styled-components'
import SurveyResults from '../survey-results/survey-results'
import { useAppDispatch } from '../../utils'
import { addAnswer } from '../../__data__/reducers/survey'

interface ISurveyProps {
    questions: Array<IApiResults>,
    answers: Array<ISurveyAnswerValue>
}

const SurveyWrapper = styled(StyledWrapper)`
  width: 800px;
  max-width: 1200px;
`

const Survey: FC<ISurveyProps> = (props) => {
    const { questions, answers } = props
    const [currentQuestionNumber, setQuestionNumber] = useState<number>(0)
    const dispatch = useAppDispatch()
    // const [answers, setAnswers] = useState<Array<ISurveyAnswerValue>>([])

    useEffect(() => {
        setQuestionNumber(0)
    }, [questions])

    const handleSendAnswer = useCallback((answer: ISurveyAnswerValue) => {
        dispatch(addAnswer(answer))
        setQuestionNumber((prevState) => (prevState !== questions.length ?
            prevState + 1 : prevState))
    }, [currentQuestionNumber])

    return (
        <SurveyWrapper>
            {currentQuestionNumber !== questions.length ?
                (
                    <SurveyQuestion
                        onClick={handleSendAnswer}
                        currentQuestionNumber={currentQuestionNumber + 1}
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
