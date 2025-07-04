import { watch } from 'vue'

export function useStoreSync(data, loading, error, store, setDataFn = 'setData') {
  watch([data, loading, error], ([newData, isLoading, err]) => {
    store.loading = isLoading
    store.error = err

    if (newData && typeof store[setDataFn] === 'function') {
      store[setDataFn](newData)
    }
  }, { immediate: true })
}