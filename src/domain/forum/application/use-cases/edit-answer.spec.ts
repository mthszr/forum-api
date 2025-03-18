import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { makeAnswer } from 'test/factories/make-answer'
import { makeAnswerAttachment } from 'test/factories/make-answer-attachment'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { EditAnswerUseCase } from './edit-answer'
import { NotAllowedError } from './errors/not-allowed-error'

let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: EditAnswerUseCase

describe('Edit Answer', () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentsRepository
    )
    sut = new EditAnswerUseCase(
      inMemoryAnswersRepository,
      inMemoryAnswerAttachmentsRepository
    )
  })

  it('should be able to edit a answer', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityID('author-id'),
      },
      new UniqueEntityID('answer-id')
    )

    await inMemoryAnswersRepository.create(newAnswer)

    inMemoryAnswerAttachmentsRepository.items.push(
      makeAnswerAttachment({
        answerId: newAnswer.id,
        attachmentId: new UniqueEntityID('attachment-1'),
      }),
      makeAnswerAttachment({
        answerId: newAnswer.id,
        attachmentId: new UniqueEntityID('attachment-2'),
      })
    )

    await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: 'author-id',
      content: 'new content',
      attachmentsIds: ['attachment-1', 'attachment-3'],
    })

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      props: {
        content: 'new content',
      },
    })

    expect(
      inMemoryAnswersRepository.items[0].attachments.currentItems
    ).toHaveLength(2)

    expect(inMemoryAnswersRepository.items[0].attachments.currentItems).toEqual(
      [
        expect.objectContaining({
          attachmentId: new UniqueEntityID('attachment-1'),
        }),
        expect.objectContaining({
          attachmentId: new UniqueEntityID('attachment-3'),
        }),
      ]
    )
  })

  it('should not be able to edit a answer from another user', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityID('author-id'),
      },
      new UniqueEntityID('answer-id')
    )

    await inMemoryAnswersRepository.create(newAnswer)

    const result = await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: 'not-author-id',
      content: 'new content',
      attachmentsIds: [],
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedError)
  })
})
