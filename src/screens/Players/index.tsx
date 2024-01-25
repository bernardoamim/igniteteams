import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { AmountOfPlayers, Container, Form, ListHeader } from './styles'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<string[]>([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <ListHeader>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <AmountOfPlayers>{players.length}</AmountOfPlayers>
      </ListHeader>
    </Container>
  )
}
