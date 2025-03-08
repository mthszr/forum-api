import type { Question } from '../../enterprise/entities/question'
import type { QuestionsRepository } from '../repositories/questions-repository.'
import { AnswerQuestionUseCase } from './answer-question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    return
  },
}

test('create a question ', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: 'author-id',
    title: 'This is a question',
    content: 'Question content',
  })

  expect(question.id).toBeTruthy()
})
