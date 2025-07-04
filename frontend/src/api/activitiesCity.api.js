import axios from 'axios'

export function fetchActivitiesCity({ signal } = {}) {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}activities_city.json`, { signal }).then(r => r.data)
}