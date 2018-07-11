import http from 'k6/http'
import { sleep } from 'k6'

import check from './checks/standard.js'
import opt from './options/user-testing_options.js'

export const options = opt

export default () => {
  const res = http.get('http://test.loadimpact.com/')
  check.standard(res)
  check.hasBody(res)
  sleep(1)
}
