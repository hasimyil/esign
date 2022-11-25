import { api } from '@/Services/api'
import fetchNotification from './fetchNotification'

export const notificationApi = api.injectEndpoints({
  endpoints: build => ({
    fetchNotifications: fetchNotification(build),
  }),
  overrideExisting: true,
})

export const { useLazyFetchNotificationsQuery } = notificationApi
