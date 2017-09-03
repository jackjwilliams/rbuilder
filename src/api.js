import axios from 'axios';

const API_ROOT = "http://localhost:9001";

const u = (url) => `${API_ROOT}${url}`;

const req = {
  del:  url         => axios.delete(u(url)),
  get:  url         => axios.get(u(url)),
  put:  (url, body) => axios.put(u(url), body),
  post: (url, body) => axios.post(u(url), body)
}

const NPCS = {
  all: () => axios.get(u('/api/admin/npcs'))
}

export default {
  NPCS
}