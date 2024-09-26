import { defineStore } from "pinia";
import { getShips, getShipById } from "@/api/ship";
import { Ref, ref } from 'vue'
import { IShip } from "@/types/ship";

export const useShipStore = defineStore('ship',  () => {
    const pageNumber: Ref<number> = ref(1)
    const nextPage: Ref<string | null> = ref(null)
    const prevPage: Ref<string | null> = ref(null)
    
    async function getShipsList(page: number = pageNumber.value):Promise<IShip[] | null> {
        try {
            const { data } = await getShips(page)
            
            nextPage.value = data.next
            prevPage.value = data.previous
            pageNumber.value = page

            return data.results
        } catch (error) {
            return null
        }
    }

    async function getShipDetails(shipId: string | string[]):Promise<IShip | null>{
        try {
            const { data } = await getShipById(shipId)
            return data
        } catch (error) {
            return null
        }
    }

    return {
        getShipsList,
        getShipDetails,
        pageNumber,
        nextPage,
        prevPage
    }
})