import { useLocation } from "preact-iso"
import { useEffect } from "preact/hooks"
import { PATHS } from "@types"

const staticTitlesByPath = new Map<string, string>([
    [PATHS.HOME, "Home"],
    [PATHS.POKEDEX, "Pokédex"],
    [PATHS.BERRIES, "Berries"],
    [PATHS.ABOUT, "About"],
    [PATHS.FIND_POKEMON, "Find Pokémon"]
])

/**
 * - Use in layout to automatically update document title
 * of static paths.
 *
 * - Use inside dynamic paths pages to update document
 * title with a custom text.
 *
 * @function
 * @param {string} [title] - The custom title to set (optional)
 */
export const useDocumentTitle = (title?: string) => {
    const { path } = useLocation()

    useEffect(() => {
        const newPath = staticTitlesByPath.get(path as PATHS)
        if(!!newPath) document.title = newPath
    }, [path])

    useEffect(() => {
        if(!!title) document.title = title
    }, [title])
}
