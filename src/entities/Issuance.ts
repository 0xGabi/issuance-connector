import CoreEntity from './CoreEntity'
import Policy from './Policy'
import IssuanceConnectorTheGraph from '../connector'

export default class Issuance extends CoreEntity {
  constructor(subgraphUrl: string, verbose = false) {
    super(new IssuanceConnectorTheGraph(subgraphUrl, verbose))
  }

  async policy({ first = 1000, skip = 0 } = {}): Promise<Policy[]> {
    return this._connector.policies(first, skip)
  }

  onPolicy(callback: Function): { unsubscribe: Function } {
    return this._connector.onPolicies(callback)
  }
}
