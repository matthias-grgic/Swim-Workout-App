import styled from "styled-components"
import { useState, useEffect } from "react"
import search from "../images/search.svg"

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

const SearchBarStyled = styled.div`
    input[type="text"] {
        background-color: transparent;
        background-image: url(${search});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: right center;
        border: none;
        border-bottom: 1px solid var(--secondary-txt-color);
        font-size: 1rem;
        display: inline-block;
        margin: 0px 0;
        outline: none;
        padding: 10px 40px 10px 15px;
        width: 100%;
    }
`
