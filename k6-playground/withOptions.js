import { check, sleep } from 'k6'
import http from 'k6/http'

export const options = {
  stages: [
    { duration: '10s', target: 1 },
    { duration: '10s', target: 5 },
    { duration: '10s', target: 0 },
  ]
}

export default () => {
  const res = http.get('http://test.loadimpact.com/')
  sleep(1)
  check(res, {
    'is status 200': r => r.status === 200,
    'has body': r => r.body.length > 1,
    'has no error': r => !r.error,
  })
}