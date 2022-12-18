import { useState,createContext,useContext } from "react";

const MenuContext = createContext()

const Menu=({children})=>{
    const [position, setPosition] = useState({});
    return (
      <MenuContext.Provider value={{setPosition, position }}>
        <nav className="menu">{children}</nav>
      </MenuContext.Provider>
    );
}

export const MenuItem=({children})=>{
    const {setPosition}=useContext(MenuContext)
    const clickHandle=(e)=>{
        const { top, width, height } = e.target.getBoundingClientRect();
        const left = e.target.offsetLeft;
        setPosition({
          left,
          top,
          width,
          height,
        });
    }

    return <button onClick={clickHandle}>{children}</button>;
}

export default Menu