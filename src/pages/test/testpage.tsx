import tw from 'tailwind-styled-components'

const Title = tw.h1`
  underline
`

export default function TestPage() {
  return (
    <Title>
      Test Page
    </Title>
  )
}