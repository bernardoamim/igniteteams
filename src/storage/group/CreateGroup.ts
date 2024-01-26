import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import { getAllGroups } from './GetAllGroups'

export async function createGroup(name: string) {
  try {
    const groups = await getAllGroups()

    const groupAlreadyExists = groups.includes(name)

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome')
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, name]),
    )
  } catch (error) {
    throw new Error(error)
  }
}
