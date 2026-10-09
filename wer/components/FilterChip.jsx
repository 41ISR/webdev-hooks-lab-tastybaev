function FilterChip({label, isActive, onClick}) {
    return (
        <button
        type="button"
        onClick={onClick}
        className={`filter-chip ${isActive ? "active" : ""}` }
    >
        {button}
    </button>    
    )
}
export default FilterChip