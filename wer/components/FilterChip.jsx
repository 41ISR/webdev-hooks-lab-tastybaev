import './css.css'
function FilterChip ({checked, onChange, children }) {
    return (
      <div className='filter-chip'>
        <input type='checkbox' id='filterCheckbox' checked={checked} onChange={onChange}/>
        <label hrmlFor='filterCheckbox'>{children}</label>
      </div>
    )
}

export default FilterChip;