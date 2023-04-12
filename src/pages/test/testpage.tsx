import tw, { styled } from 'twin.macro'

export default function TestPage() {
  const Title = styled.h1`
    ${tw`italic`}

    &:hover {
      ${tw`text-red-500`}
    }
  `
  return (
    <Title>
      Test Page
    </Title>
  )
}