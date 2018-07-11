import { check } from 'k6'

const standard = (res) => check(res, {
  'is status 200': r => r.status === 200,
  'has no error': r => !r.error,
})

const hasBody = (res) => check(res, {
  'has body': r => r.body.length > 1,
})

export default { hasBody, standard }
