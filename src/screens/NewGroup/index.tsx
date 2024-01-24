import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Cria uma turma e adicione pessoas."
        />
        <Input placeholder="Nome da Turma" />
        <Button title="Criar" />
      </Content>
    </Container>
  )
}
