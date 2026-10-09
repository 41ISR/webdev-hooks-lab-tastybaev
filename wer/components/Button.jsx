function Button ({children, type="button",onClick}){
    return (
        <button type= {type} onClick={onClick} className="shelf-button">
            {children}
        </button>
    )
}
export default Button