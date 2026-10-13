import './css.css'

function Input ({value, onChange, placeholder}) {
    return (
    <Input
    className="input"
    type="text"
    value={value}
    placeholder={{placeholder}}
    onChange={(e) => onChange(e.target.value)}
    />
    )
}

export default Input