import { ref, onMounted, onUnmounted } from 'vue'

export function useApiData(fetchFn, initialOptions = {}) {
	const data = ref(null)
	const error = ref(null)
	const loading = ref(false)
	let controller = null

	let options = { ...initialOptions }

	const load = async (overrideOptions = {}) => {
		loading.value = true
		error.value = null

		controller = new AbortController()

		const finalOptions = { signal: controller.signal, ...options, ...overrideOptions }

		try {
			data.value = await fetchFn(finalOptions)
		} catch (e) {
			if (!(e.code === 'ERR_CANCELED' || e.name === 'CanceledError')) {
				error.value = e
			}
		}
		loading.value = false

		options = { ...options, ...overrideOptions }
	}

	onMounted(() => load())
	onUnmounted(() => controller && controller.abort())

	return { data, error, loading, load }
}