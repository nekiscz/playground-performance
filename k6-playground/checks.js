import { check } from 'k6'
import http from 'k6/http'

export default () => {
  const res = http.get('http://test.loadimpact.com/')
  check(res, {
    'is status 200': r => r.status === 200,
    'has body': r => r.body.length > 1,
    'has no error': r => !r.error,
  })

  console.log(res.error)
}