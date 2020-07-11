import IssuanceConnectorTheGraph from '../connector'

export default class CoreEntity {
  protected _connector: IssuanceConnectorTheGraph

  constructor(connector: IssuanceConnectorTheGraph) {
    this._connector = connector
  }
}
