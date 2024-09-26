<script lang="ts" setup>
    import ShipContentList from '@/components/ShipContentList.vue'
    import type { IShip } from '@/types/ship'

    import { onMounted, ref, Ref, toRefs, computed } from 'vue'
    import { useShipStore } from '@/store/ship'

    const { getShipsList } = useShipStore()
    const { pageNumber, nextPage, prevPage } = toRefs(useShipStore())

    const shipsList: Ref<IShip[] | null> = ref(null)
    const searchText: Ref<string> = ref('')

    onMounted(async () => {
        shipsList.value = await getShipsList() 
    })  

    async function sendPrevPage () {
        shipsList.value = await getShipsList(pageNumber.value - 1) 
    }

    async function sendNextPage () {
        shipsList.value = await getShipsList(pageNumber.value + 1) 
    }
    
    const searchResultList = computed(() => {
        const text = searchText.value.toLocaleLowerCase()

        if (!searchText.value || !shipsList.value) {
            return shipsList.value
        }

        return shipsList.value.filter((item) => {
            const name = item.name.toLocaleLowerCase()
            if (name.includes(text)) return item
        })
    })
</script>
<template>
    <v-card
        class="ship__content"
        v-if="shipsList"
    >
        <VTextField
            v-model="searchText"
            label="Search by name"
            hide-details
        />

        <ShipContentList 
            :list="searchResultList" 
        />
  
        <div 
            class="pa-4"
        >
            <VBtn
                class="mr-1"
                @click="sendPrevPage"
                :disabled="!prevPage"
            >
                Prev
            </VBtn>
            <VBtn 
                @click="sendNextPage"
                :disabled="!nextPage"
            >
                Next
            </VBtn>
        </div>
    </v-card>    
</template>

<style lang="scss" scoped>
    .ship__content {
        width: 800px;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 100px;
    }
</style>