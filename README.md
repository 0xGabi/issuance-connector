# The Graph Connector for Issuance

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
