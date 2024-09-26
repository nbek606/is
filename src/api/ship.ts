import { $api } from "@/plugins/api"

const baseUrl = '/starships'

export async function getShips (page: number = 1) {
    return await $api.get(`${baseUrl}?page=${page}`)
}

export async function getShipById (shipId: string | string[]) {
    return await $api.get(`${baseUrl}/${shipId}`)
}
