import axios from 'axios'

const base = (import.meta as any).env?.VITE_API_URL || '/api'
export const api = axios.create({ baseURL: base })

export type Settings = { hero_title: string; logo_size: 'sm'|'md'|'lg' }
export type RequestEntry = { id: number; name: string; phone: string; service: string; country: string; notes?: string; status: string; created_at: string }

api.interceptors.request.use((config) => {
  const t = localStorage.getItem('fv_token')
  if (t) config.headers.Authorization = `Bearer ${t}`
  return config
})