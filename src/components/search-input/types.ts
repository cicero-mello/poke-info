export interface SearchInputProps {
    onSearch: (value: string) => Promise<void | { notFound?: boolean }>
}
