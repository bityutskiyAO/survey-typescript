import { IApiResults } from '../../../interfaces'

export const calcWrightAnswers = (questions: Array<IApiResults>, mappedAnswers: Array<string>): number => {
    let wrightAnswers = 0
    questions.forEach((question, ind) => {
        if (question.correct_answer === mappedAnswers[ind]) {
            wrightAnswers += 1
        }
    })
    return wrightAnswers
}
