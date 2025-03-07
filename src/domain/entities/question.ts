import { Entity } from '../../core/entities/entity'
import type { UniqueEntityID } from '../../core/entities/unique-entity-id'
import type { Optional } from '../../core/types/optional'
import type { Slug } from './value-objetcs/slug'

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const question = new Question({ ...props, createdAt: new Date() }, id)

    return question
  }
}
