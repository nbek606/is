<script lang="ts" setup>    
    import type { IShip } from '@/types/ship'
    import ShipListItem from '@/components/ShipContentListItem.vue'

    interface IProps {
        list: IShip[] | null
    }

    const props = defineProps<IProps>()

</script>
<template>
    <div class="ship__list">
        <ShipListItem 
            v-for="item in list"
            :key="item.url"
            :name="item.name"
            :model="item.model"
            :MGLT="item.MGLT"
            :url="item.url"
        />
    </div>
</template>
<style lang="">
    
</style>