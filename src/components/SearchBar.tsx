
interface SearchBarProps {
    onChange: (value: string) => void
}

export const SearchBar = ({onChange}: SearchBarProps) => {
    return (
        <div>
            <input type="text" onChange={(e) => onChange(e.target.value)} placeholder="search"/>
        </div>
    )
}