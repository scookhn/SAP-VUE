import { Ref, ref } from 'vue'
import productionItem from '../interfaces/Production'

class ProductionService {
  private productionItem: Ref<Production>
  private prouctionItems: Ref<Array<Production>>

  constructor () {
    this.productionItem = ref<productionItem>({})
    this.productionItems = ref<Array<Production>>([])
  }

  getProductionItem (): Ref<Production> {
    return this.productionItem
  }

  getProductionItems (): Ref<Array<Production>> {
    return this.productionItems
  }

  async fetchAll (): Promise<void> {
    try {
      const url = 'sapsvqas.granjasmarinas.hn:8000/sap/opu/odata/sap/zwms_masters_dashboard_srv?sap-client=200'
      const response = await fetch(url)
      const json = await response.json()

      this.production.value = await json.results
    } catch (error) {
      console.log(error)
    }
  }

  async fetchById (id: any): Promise<void> {
    try {
      const url = `sapsvqas.granjasmarinas.hn:8000/sap/opu/odata/sap/zwms_masters_dashboard_srv?sap-client=200${matnr}`
      const response = await fetch(url)
      const json = await response.json()

      this.production.value = await json
    } catch (error) {
      console.log(error)
    }
  }
}

export default ProductionService
