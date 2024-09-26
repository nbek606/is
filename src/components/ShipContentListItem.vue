<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import { routesName } from '@/router/routeUtils'

    interface IProps {
        name: string,
        model: string
        MGLT: string,
        url: string
    }

    const props = defineProps<IProps>()
    const router = useRouter()

    function sendToDetail() {
        const id: string = props.url.split('/')
                                    .reverse()[1]

        router.push({ name: routesName.shipDetails, params: { id: id } })                     
    }
</script>
<template>
    <VBanner 
        :stacked="false"
    >
        <div class="ship__item">
            <div class="ship__item-content">
                <p>
                    <strong>Name</strong>:
                    {{ name }}
                </p>
                <p>
                    <strong>Model</strong>:
                    {{ model }}
                </p>
                <p>
                    <strong>MLGT</strong>:
                    {{ MGLT }}
                </p>
            </div>
            <VBtn 
                size="x-small"
                @click="sendToDetail()"
            >
                More details
            </VBtn>
        </div>
    </VBanner>
</template>
<style lang="scss" scoped>
    .ship__item {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>