import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleNew() {
    if (!group.length) return

    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Cria uma turma e adicione pessoas."
        />
        <Input
          placeholder="Nome da Turma"
          style={{ marginBottom: 12 }}
          onChangeText={setGroup}
        />
        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  )
}
