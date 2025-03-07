import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer ', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    questionId: 'question_id',
    instructorId: 'instructor_id',
    content: 'This is an answer',
  })

  expect(answer.content).toEqual('This is an answer')
})
