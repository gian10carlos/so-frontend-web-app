export const EnvConfiguration = () => ({
  API_URL: process.env.REACT_APP_API_URL,
  JWT_SECRET: process.env.REACT_APP_JWT_SECRET,
  PORT: process.env.REACT_APP_PORT,
  API_RENIEC: process.env.REACT_APP_TOKEN_RENIEC,
})