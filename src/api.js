import axios from 'axios';

const API_ROOT = "http://localhost:9001";

const u = (url) => `${API_ROOT}${url}`;

const req = {
  del:  url         => axios.delete(u(url)),
  get:  url         => axios.get(u(url)),
  put:  (url, body) => axios.put(u(url), body),
  post: (url, body) => axios.post(u(url), body)
}

const Npcs = {
  count: () => req.get('/api/admin/npcs/count')
}

const Players = {
  count: () => req.get('/api/admin/players/count')
}

const Items = {
  count: () => req.get('/api/admin/items/count')
}

const Rooms = {
  count: () => req.get('/api/admin/rooms/count')
}

const Areas = {
  count: () => req.get('/api/admin/areas/count')
}

const Quests = {
  count: () => req.get('/api/admin/quests/count')
}

const Data = {
  count: (type) => req.get(`/api/admin/data/count?type=${type}`)
}

const Config = {
  get: () => req.get('/api/admin/config'),
  save: (config) => req.put('/api/admin/config', config)
}

export default {
  Npcs,
  Players,
  Items,
  Rooms,
  Areas,
  Quests,
  Data,
  Config
}