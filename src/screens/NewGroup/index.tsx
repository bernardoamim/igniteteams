import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { createGroup } from '@storage/group/CreateGroup'
import { AppError } from '@utils/AppError'
import { useState } from 'react'
import { Alert } from 'react-native'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
      if (!group.trim().length) {
        return Alert.alert('Nova Turma', 'Informe o nome da turma.')
      }

      await createGroup(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Turma', error.message)
      }

      Alert.alert('Nova Turma', 'Não foi possível criar a turma.')
      console.log(error)
    }
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
