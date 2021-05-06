export interface IApiResults {
    category: string,
    // eslint-disable-next-line camelcase
    correct_answer: string
    difficulty: 'easy' | 'medium' | 'hard'
    // eslint-disable-next-line camelcase
    incorrect_answers: Array<string>
    question: string
    type: 'boolean' | 'multiple'
}

export interface ISurveyAnswerValue {
    [key: string]: boolean | string
}
