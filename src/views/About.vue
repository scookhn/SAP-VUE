<template>
  <div class="about" >
    <div v-if="!isLoading">
      <h3>
        {{ proditem.matnr }}
      </h3>
      <p>
        <b>Centro: </b>{{proditem.werks}}
      </p>
      <p>
      <b>Cantidad Teorica: </b>{{proditem.vsolm}}
      </p>
      <p>
        <b>Real Desde: </b>{{proditem.vistm}}
      </p>
      <p>
        <b>Diferencia Desde: </b>{{proditem.vdifm}}
      </p>
        <router-link to="/">
          Return
        </router-link>
      </p>
    </div>
    <div v-else>
      Is Loading
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProductionService from '../services/CharacterService'

export default defineComponent({
  name: 'About',
  setup () {
    const service = new ProductionService()
    const proditem = service.getProductionItem()
    const isLoading = ref<boolean>(true)
    const { id } = useRoute().params

    onMounted(async () => {
      await service.fetchById(id)
      isLoading.value = false
    })

    return {
      ProductionService,
      isLoading
    }
  }
})
</script>
