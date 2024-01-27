import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'
import { getAllGroups } from './GetAllGroups'

export async function deleteGroupByName(name: string) {
  try {
    const storedGroups = await getAllGroups()

    const filtered = storedGroups.filter((groupName) => groupName !== name)

    const groups = JSON.stringify(filtered)

    await AsyncStorage.setItem(GROUP_COLLECTION, groups)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${name}`)
  } catch (error) {
    throw new Error(error)
  }
}
