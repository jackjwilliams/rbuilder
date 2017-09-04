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
  all: () => req.get('/api/admin/npcs')
}

const Players = {
  all: () => req.get('/api/admin/players')
}

const Items = {
  all: () => req.get('/api/admin/items')
}

const Rooms = {
  all: () => req.get('/api/admin/rooms')
}

const Areas = {
  all: () => req.get('/api/admin/areas')
}

const Quests = {
  all: () => req.get('/api/admin/quests')
}

export default {
  Npcs,
  Players,
  Items,
  Rooms,
  Areas,
  Quests
}