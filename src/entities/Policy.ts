import CoreEntity from './CoreEntity'
import IssuanceConnectorTheGraph from '../connector'

export interface PolicyData {
  id: string
  active: boolean
  beneficiary: string
  blockInflationRate: BigInt
}

export default class Cast extends CoreEntity implements PolicyData {
  readonly id!: string
  readonly active!: boolean
  readonly beneficiary!: string
  readonly blockInflationRate!: BigInt

  constructor(data: PolicyData, connector: IssuanceConnectorTheGraph) {
    super(connector)

    this.id = data.id
    this.active = data.active
    this.beneficiary = data.beneficiary
    this.blockInflationRate = data.blockInflationRate
  }
}
