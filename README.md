# The Graph Connector for Issuance

[![codecov](https://codecov.io/gh/0xGabi/issuance-connector/branch/master/graph/badge.svg)](https://codecov.io/gh/0xGabi/issuance-connector)

## Usage

```js
const org = await connect(
  <org-address>,
  'thegraph',
  { chainId: <chain-id> }
)

const issuanceConnector = new Issuance(
  (await org.app('issuance')).address,
  <subgraph-url>
)

const policies = await issuanceConnector.policies()
```
