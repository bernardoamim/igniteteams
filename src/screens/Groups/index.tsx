import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Container } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <GroupCard title="Turma do Paulinho" />
      <GroupCard title="Turma do Josi" />
      <GroupCard title="Turma do João" />
    </Container>
  )
}
