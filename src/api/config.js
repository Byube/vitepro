export default {
    auth: {
      baseURL: process.env.VUE_APP_SERVER_URL,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      timeout: 15 * 1000,
    },
    file: {
      baseURL: process.env.VUE_APP_SERVER_URL,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  }
  