import styled from "styled-components"
import { useState, useEffect } from "react"

function SearchBar({ transferedListForBar, transferedSetDataBar }) {
    const [filtered, setFilterd] = useState(transferedListForBar)
    const [result, setResult] = useState("")
    useEffect(() => {
        transferedSetDataBar(transferedListForBar)
        setFilterd(transferedListForBar)

        const results = filtered.filter((res) => res.name.toLowerCase().includes(result))
        transferedSetDataBar(results)
    }, [result])

    const onChange = (e) => {
        setResult(e.target.value)
    }

    return (
        <SearchBarStyled>
            <label htmlFor="header-search">
                <AccessibilityLabel>Search for exercises</AccessibilityLabel>
            </label>
            <input type="text" id="header-search" placeholder="Search.." value={result} onChange={onChange} />
        </SearchBarStyled>
    )
}

export default SearchBar

const AccessibilityLabel = styled.label`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const SearchBarStyled = styled.div``
