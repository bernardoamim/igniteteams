import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { ListEmpty } from '@components/ListEmpty'
import { PlayerCard } from '@components/PlayerCard'
import { useRoute } from '@react-navigation/native'
import { getPlayersByGroup } from '@storage/player/GetPlayersByGroup'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { addPlayerByGroup } from '@storage/player/addPlayerByGroup'
import { AppError } from '@utils/AppError'
import { useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { AmountOfPlayers, Container, Form, ListHeader } from './styles'

type PlayersRouteParams = {
  group: string
}

export function Players() {
  const route = useRoute()
  const { group } = route.params as PlayersRouteParams

  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<string[]>(['Bernardo'])

  async function handleAddPlayer() {
    if (!newPlayerName.trim().length) {
      return Alert.alert(
        'Nova Pessoa',
        'Informe o nome da pessoa para adicionar.',
      )
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team,
    }

    try {
      await addPlayerByGroup(newPlayer, group)
      const players = await getPlayersByGroup(group)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova Pessoa', 'Não foi possível adicionar.')
      }
    }
  }

  function handleDeletePlayer() {}

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={handleDeletePlayer} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
