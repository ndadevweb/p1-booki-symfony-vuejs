import axios from 'axios'

export function fetchLodgementsPopular({ signal } = {}) {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}lodgements_popular.json`, { signal }).then(r => r.data)
}