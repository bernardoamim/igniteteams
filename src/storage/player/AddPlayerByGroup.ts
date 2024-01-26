import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import { getPlayersByGroup } from './GetPlayersByGroup'
import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function addPlayerByGroup(
  player: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await getPlayersByGroup(group)

    const playerAlreadyExists = storedPlayers.find(
      (p) => p.name === player.name,
    )

    if (playerAlreadyExists) {
      throw new AppError('Esta pessoa já foi adicionada anteriormente.')
    }

    const storage = JSON.stringify([...storedPlayers, player])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw new Error(error)
  }
}
