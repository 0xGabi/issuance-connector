import { IssuanceConnectorTheGraph, Policy } from '..'

const ISSUANCE_RINKEBY_SUBGRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/evalir/issuance-subgraph'

describe('when connecting to a issuance app', () => {
  let connector: IssuanceConnectorTheGraph

  beforeAll(() => {
    connector = new IssuanceConnectorTheGraph(ISSUANCE_RINKEBY_SUBGRAPH_URL)
  })

  describe('when querying for all the policies of a issuance app', () => {
    let policies: Policy[]

    beforeAll(async () => {
      policies = await connector.policies(1000, 0)
    })

    test('returns a list of policies', () => {
      expect(policies.length).toBeGreaterThan(0)
    })

    describe('when looking at a policy', () => {
      let policy: Policy

      beforeAll(() => {
        policy = policies[0]
      })

      test('should be active', () => {
        expect(policy.active).toBe(true)
      })

      test('should have beneficiary', () => {
        expect(policy.beneficiary).toBe(
          '0x474fa66e70e214671817ca479473d74fee207229'
        )
      })

      test('should have block inflation rate', () => {
        expect(policy.blockInflationRate).toBe('475321317210')
      })
    })
  })
})
