import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

// eslint-disable-next-line react/prop-types
const NoticiasProvider=({children})=>{

    const [categoria, setCategoria] = useState("general");

    const handleChangeCategoria = e=>{
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext