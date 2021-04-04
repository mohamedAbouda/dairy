const apiId = 'v73akokc68'
const region = 'us-east-1'
const devPort = '3050'

export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`
export const devapiEndpoint = `http://localhost:${devPort}/dev`
export const subDirectory = 'diaries'

export const authConfig = {
  domain: 'dev-wo6ji-32.us.auth0.com',
  clientId: 'g4V6pfESaZCZ0DNeQwQnD8eisYFAlvOs',
  callbackUrl: 'http://localhost:3000/callback'
}
