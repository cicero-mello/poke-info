import { useCallback, useLayoutEffect, useState } from "preact/hooks"
import { useQueryClient } from "@tanstack/react-query"
import { EncounterPlaces } from "./types"
import * as api from "@api"

export const useEncounterPlaces = (
    encounters: api.Encounter[]
): EncounterPlaces[] => {
    const queryClient = useQueryClient()
    const [
        encounterPlaces,
        setEncounterPlaces
    ] = useState<EncounterPlaces[]>([])

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

    const updateEncounterPlaces = async (encounters: api.Encounter[]) => {
        const encounterPlaces: EncounterPlaces[] = await Promise.all(encounters.map(async (encounter) => {
            const area = await fetchArea(encounter.areaId)
            const methods = await Promise.all((encounter.methods.map(async (method) => {
                const methodQuery = await fetchMethod(method.id)

                const conditions = await Promise.all(method.conditionIds.map(async (conditionId) => {
                    const conditionQuery = await fetchCondition(conditionId)
                    return conditionQuery.name
                }))
                return {
                    name: methodQuery.name,
                    chance: method.chance,
                    maxLevel: method.maxLevel,
                    minLevel: method.minLevel,
                    conditions: conditions
                }
            })))
            return {
                areaName: area.name,
                methods: methods
            }
        }))

        setEncounterPlaces(encounterPlaces)
    }

    useLayoutEffect(() => {
        if(encounterPlaces.length === 0) {
            updateEncounterPlaces(encounters)
            return
        }
        if(encounterPlaces.length > 0){
            return () => setEncounterPlaces([])
        }
    }, [encounters])

    return encounterPlaces
}
