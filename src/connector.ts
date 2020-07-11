import { GraphQLWrapper } from '@aragon/connect-thegraph'

import Policy from './entities/Policy'
import { parsePolicies } from './parsers'
import * as queries from './queries'

export default class IssuanceConnectorTheGraph extends GraphQLWrapper {
  async policies(first: number, skip: number): Promise<Policy[]> {
    return this.performQueryWithParser(
      queries.ALL_POLICIES('query'),
      { first, skip },
      parsePolicies
    )
  }

  onPolicies(callback: Function): { unsubscribe: Function } {
    return this.subscribeToQueryWithParser(
      queries.ALL_POLICIES('subscription'),
      { first: 1000, skip: 0 },
      callback,
      parsePolicies
    )
  }
}
