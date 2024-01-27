import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'

export async function getAllGroups() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
    console.log('STORAGE --> ', storage)
    const groups: string[] = storage ? JSON.parse(storage) : []
    console.log('GROUPS --> ', groups)
    return groups
  } catch (error) {
    throw new Error(error)
  }
}
