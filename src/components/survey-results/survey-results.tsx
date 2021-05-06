import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { Done } from '@styled-icons/material/Done'
import { Cross } from '@styled-icons/entypo/Cross'

import { IApiResults, ISurveyAnswerValue } from '../../interfaces'
import { RowWrapper, Wrapper, TitleH5, Nameplate, TitleH4 } from '../../styled-components'
import { SurveyButton } from '../survey-question/survey-question'
import { useAppDispatch } from '../../utils'
import { fetchSurvey, clearAnswers } from '../../__data__/reducers/survey'

import { calcWrightAnswers } from './utils'

interface IResultProps {
    answers: Array<ISurveyAnswerValue>,
    questions: Array<IApiResults>
}

const SuccessIcon = styled(Done)`
  color: green;
`

const ErrorIcon = styled(Cross)`
  color: red
`

const SurveyResults: FC<IResultProps> = ({ answers, questions }) => {
    const dispatch = useAppDispatch()
    
    const mappedAnswers = useMemo(() => (
        answers.map((answer) => {
            const answerEntries = Object.entries(answer)
            return answerEntries.reduce((acc, [key, value], ind) => (
                `${acc}${value ? key : ''}${(ind + 1) !== answerEntries.length ? ', ' : ''}`
            ), '')
        })
    ), [answers])

    const handleNewSurveyClick = () => {
        dispatch(clearAnswers())
        dispatch(fetchSurvey())
    }

    return (
        <Wrapper
            align="flex-start"
        >
            <TitleH4>
                {`Right Answers: ${calcWrightAnswers(questions, mappedAnswers)} / ${questions.length}`}
            </TitleH4>
            {questions.map((question, ind) => (
                <>
                    <RowWrapper
                        align="flex-start"
                        justify="space-between"
                        mt={32}
                    >
                        <TitleH4
                            color="black"
                            dangerouslySetInnerHTML={{ __html: question.question }}
                        />
                        <Nameplate
                            variant={question.difficulty}
                        >
                            {question.difficulty}
                        </Nameplate>
                    </RowWrapper>
                    <RowWrapper
                        mt={8}
                        mb={16}
                        justify="flex-start"
                    >
                        <TitleH5
                            color="green"
                        >
                            {'Answer: '}
                        </TitleH5>
                        <TitleH5
                            color="black"
                        >
                            {mappedAnswers[ind]}
                        </TitleH5>
                        {question.correct_answer === mappedAnswers[ind] ?
                            <SuccessIcon size={28} /> :
                            <ErrorIcon size={28} />}
                    </RowWrapper>
                </>
            ))}
            <SurveyButton
                onClick={handleNewSurveyClick}
            >
                New Survey
            </SurveyButton>
        </Wrapper>
    )
}

export default SurveyResults
