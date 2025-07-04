import axios from 'axios'

export async function fetchLodgementsCity({ signal, page = 1, location = '' } = {}) {
	await new Promise(resolve => setTimeout(resolve, 3000))

	const params = new URLSearchParams()
	params.set('page', page)

	if (location) {
		params.set('location', location)
	}

	const url = `${import.meta.env.VITE_API_BASE_URL}lodgements/city?${params}`

	return axios.get(url, { signal }).then(r => r.data)
}