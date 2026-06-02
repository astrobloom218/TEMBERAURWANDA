import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const fallbackImage =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85'

window.addEventListener(
  'error',
  (event) => {
    if (event.target?.tagName === 'IMG' && event.target.src !== fallbackImage) {
      event.target.src = fallbackImage
    }
  },
  true,
)

createApp(App).use(router).mount('#app')
