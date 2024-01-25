import { Button } from '@components/Button'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={!groups.length && { flex: 1 }}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre sua primeira turma." />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
