import { api } from '@/Services/api'
import fetchFolders from './fetchFolders'

export const folderApi = api.injectEndpoints({
  endpoints: build => ({
    fetchFolders: fetchFolders(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchFoldersQuery } = folderApi
