import styled from '@emotion/styled'
import tw from 'twin.macro'

export const ContainerBox = styled.div`
  ${tw`
    w-full
    h-screen
    overflow-x-hidden
    overflow-y-auto
    flex
    flex-col
    items-start
    justify-start
    min-h-screen
  `}
  height: fit-content;
  margin: 80px auto 0%;
`