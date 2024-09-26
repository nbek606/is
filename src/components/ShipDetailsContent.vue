<script lang="ts" setup>
    import { onMounted, reactive, ref, Ref, computed } from "vue";
    import { useRoute } from 'vue-router'
    import { useShipStore } from '@/store/ship'

    const { params } = useRoute()
    const { getShipDetails } = useShipStore()

    let ship: Ref<{} | null> = ref({})

    onMounted(async () => {
        ship.value = await getShipDetails(params.id)
    })
</script>
<template lang="">
    <v-card 
        class="ship__details pa-4"
        v-if="ship"
    >
        <p 
            v-for="(value, key) in ship"
            :key="key"
        >
            <strong>{{ key }}</strong>: {{ value }}
        </p>
    </v-card>
</template>

<style lang="scss" scoped>
    .ship__details {
        width: 800px;
        margin: 0 auto;
        margin-top: 50px;
    }
</style>