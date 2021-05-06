import React, {
    FC, useCallback, useEffect, useState
} from 'react'
import styled from 'styled-components'

import { IApiResults } from '../../interfaces'
import Button from '../../styled-components/button/button'
import Field from '../field/field'
import { RowWrapper, Wrapper, Nameplate, TitleH4, TitleH5 } from '../../styled-components'
import { IAnswerValue } from '../survey/survey'

interface ISurveyQuestionProps {
    question: IApiResults,
    onClick: (prop: IAnswerValue) => void,
    currentQuestionNumber: number,
    allQuestions: number
}

export const SurveyButton = styled(Button)`
  align-self: flex-end;
`

const SurveyQuestion: FC<ISurveyQuestionProps> = (props) => {
    const { question, currentQuestionNumber, allQuestions, onClick } = props
    const [value, setValue] = useState<IAnswerValue>({})
    const concatAnswers = [question.correct_answer, ...question.incorrect_answers]

    useEffect(() => {
        setValue({})
    }, [question])

    const handleCheckboxFieldOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setValue(({ ...value, [e.currentTarget.name]: e.currentTarget.checked }))
    }, [value])

    const handleRadioFieldOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setValue({ [e.currentTarget.name]: e.currentTarget.checked })
    }, [value])

    return (
        <>
            <RowWrapper
                align="flex-start"
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
            <Wrapper
                align="flex-start"
            >
                {concatAnswers.map((answer) => (
                    <Field
                        key={answer}
                        id={answer}
                        name={answer}
                        label={answer}
                        value={answer}
                        type={question.type === 'boolean' ? 'radio' : 'checkbox'}
                        checked={!!value[answer]}
                        onChange={question.type === 'boolean' ? handleRadioFieldOnChange : handleCheckboxFieldOnChange}
                    />
                ))}
            </Wrapper>
            <RowWrapper
                justify="space-between"
            >
                <TitleH5>
                    {`${currentQuestionNumber} / ${allQuestions}`}
                </TitleH5>
                <SurveyButton
                    onClick={() => onClick(value)}
                >
                    Next Question
                </SurveyButton>
            </RowWrapper>
        </>
    )
}

export default SurveyQuestion
