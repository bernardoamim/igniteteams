import logoImg from '@assets/logo.png'

import { BackButton, BackIcon, Container, Logo } from './styles'

type HeaderProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => console.log('Hello')}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
