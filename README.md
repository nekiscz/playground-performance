# Playground for performance tests

## [k6](https://k6.io/)

**Pros**
- you can use JS syntax to create complex tests
- made to work with grafana
- docker native
- active Slack

**Cons**
- syntax isn't same as Node.js JS
  - `import` statement needs to include suffix
  - no npm module installation, k6 modules are in global installation/docker image
- no final result check, results can be saved to `InfluxDB` database

## [Artillery](https://artillery.io/)

**Pros**
- npm native
- can export JSON with results

**Cons**
- Gitter
- `yml` syntax of tests in not as readable as code
- config and scenarios ave to by in one file
- results have to be checked by custom script/app