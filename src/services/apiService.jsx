import { BASE_URL, API_KEY } from './constants'
import { toast } from 'react-toastify'

export default class NewFetchApiImage {
  constructor() {
    this.url = BASE_URL
    this.key = API_KEY
    this.page = 1
  }

  async fetchApiImage(searchQuery) {
    return await fetch(
      `${this.url}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
    ).then((response) => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(
        new Error(
          toast.error(`☠️ Error, nothing found`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }),
        ),
      )
    })
  }

  incrementPage() {
    this.page += 1
  }
}
