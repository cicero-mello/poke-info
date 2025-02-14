import { useCallback, useLayoutEffect, useState } from "preact/hooks"
import { EncounterPlaceData, EncounterPlaceProps } from "./types"
import { useQueryClient } from "@tanstack/react-query"
import * as api from "@api"

export const useEncounterPlaceData = (
    encounterPlace: EncounterPlaceProps
): EncounterPlaceData | undefined => {
    const queryClient = useQueryClient()
    const [
        encounterPlaceData,
        setEncounterPlaceData
    ] = useState<EncounterPlaceData>()

    const fetchArea = useCallback(async (areaId: number) => (
        await queryClient.fetchQuery({
            queryKey: ["getLocationArea", areaId],
            queryFn: () => api.getLocationArea({
                idOrName: areaId
            })
        })
    ), [])

    const fetchMethod = useCallback(async (methodId: number) => (
        await queryClient.fetchQuery({
            queryKey: ["getEncounterMethod", methodId],
            queryFn: () => api.getEncounterMethod({
                idOrName: methodId
            })
        })
    ), [])

    const fetchCondition = useCallback(async (conditionId: number) => (
        await queryClient.fetchQuery({
            queryKey: ["getEncounterConditionValue", conditionId],
            queryFn: () => api.getEncounterConditionValue({
                idOrName: conditionId
            })
        })
    ), [])

    const updateEncounterPlace = async (encounter: EncounterPlaceProps) => {
        const area = await fetchArea(encounter.areaId)
        const method = await fetchMethod(encounter.method.id)

        const conditions = await Promise.all(
            encounter.method.conditionIds.map(async (conditionId) => {
                const { name } = await fetchCondition(conditionId)
                return name
            })
        )

        setEncounterPlaceData({
            areaName: area.name,
            method: {
                name: method.name,
                chance: encounter.method.chance,
                maxLevel: encounter.method.maxLevel,
                minLevel: encounter.method.minLevel,
                conditions: conditions
            }
        })
    }

    useLayoutEffect(() => {
        if(!encounterPlaceData) {
            updateEncounterPlace(encounterPlace)
            return
        }
        if(!!encounterPlaceData){
            return () => setEncounterPlaceData(undefined)
        }
    }, [encounterPlace])

    return encounterPlaceData
}
