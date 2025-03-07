import { Slug } from './slug'

test('it should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Hello World')

  expect(slug.value).toEqual('hello-world')
})

test('it should convert spaces to hyphens', () => {
  const slug = Slug.createFromText('This is a new title')

  expect(slug.value).toEqual('this-is-a-new-title')
})

test('it should remove special characters', () => {
  const slug = Slug.createFromText('This is a @#$% title!')

  expect(slug.value).toEqual('this-is-a-title')
})

test('it should handle multiple spaces correctly', () => {
  const slug = Slug.createFromText('This   has   multiple    spaces')

  expect(slug.value).toEqual('this-has-multiple-spaces')
})

test('it should handle leading and trailing spaces', () => {
  const slug = Slug.createFromText('  Title with spaces  ')

  expect(slug.value).toEqual('title-with-spaces')
})

test('it should keep numbers in the slug', () => {
  const slug = Slug.createFromText('Article 123')

  expect(slug.value).toEqual('article-123')
})

test('it should handle empty strings', () => {
  const slug = Slug.createFromText('')

  expect(slug.value).toEqual('')
})
