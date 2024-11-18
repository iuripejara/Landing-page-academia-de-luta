export default function Botao({text,className,}) {
    return(
        <>
            <button
                className={className}
            >
                {text}
            </button>
        </>
    )
}