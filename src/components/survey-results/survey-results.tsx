import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { Done } from '@styled-icons/material/Done'
import { Cross } from '@styled-icons/entypo/Cross'

import { IApiResults } from '../../interfaces'
import { IAnswerValue } from '../survey/survey'
import { RowWrapper, Wrapper, TitleH5, Nameplate, TitleH4 } from '../../styled-components'
import { SurveyButton } from '../survey-question/survey-question'
import { useAppDispatch } from '../../utils'
import { fetchSurvey } from '../../__data__/reducers/survey'

interface IResultProps {
    answers: Array<IAnswerValue>,
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
    const mappedAnswersToString = useMemo(() => answers.map((answer) => {
        const answerEntries = Object.entries(answer)
        return answerEntries
            .reduce((acc, [key, value], ind) => `${acc}${value && key}${(ind + 1) !== answerEntries.length ? ', ' : ''}`, '')
    }), [answers])
    
    const calcWrightAnswers = (): number => {
        let wrightAnswers = 0
        questions.forEach((question, ind) => {
            if (question.correct_answer === mappedAnswersToString[ind]) {
                wrightAnswers += 1
            }
        })
        return wrightAnswers
    }

    const handleNewSurveyClick = () => {
        dispatch(fetchSurvey())
    }

    return (
        <Wrapper
            align="flex-start"
        >
            <TitleH4
                color="green"
            >
                {`Right Answers: ${calcWrightAnswers()} / ${questions.length}`}
            </TitleH4>
            {questions.map((question, ind) => (
                <>
                    <RowWrapper
                        align="flex-start"
                        mt={16}
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
                            {mappedAnswersToString[ind]}
                        </TitleH5>
                        {question.correct_answer === mappedAnswersToString[ind] ?
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
