import { useEffect } from "react"
import { useRef, useState } from "react";
import Menu, {
  MenuItem
} from "./Menu.jsx";



const App=()=>{
  const [position, setPosition] = useState({})

  const clickHandle=(e)=>{
    const{top,width,height}=e.target.getBoundingClientRect()
    const left=e.target.offsetLeft
    setPosition({
      left,
      top,
      width,
      height
    })
  }

  const ref=useRef()

  useEffect(()=>{
    const el =ref.current.querySelector(".active")
    const {
      top,
      width,
      height
    } = el.getBoundingClientRect()
    const left = el.offsetLeft
    setPosition({
      left,
      top,
      width,
      height
    })
  },[])

  return(
    <div>
      <Menu>
        <MenuItem>Hakkımda</MenuItem>
        <MenuItem>İletişim</MenuItem>
        <MenuItem className="active">Blog</MenuItem>
        <MenuItem>Makaleler</MenuItem>
        <MenuItem>Dersler</MenuItem>
      </Menu>
      <nav className = "menu" ref = {ref} >
        {Object.values(position).length>0 && (
        <div className = "divider" style = {
          {
            "--left": position.left + "px",
            "--top": position.top + "px",
            "--width": position.width + "px",
            "--height": position.height + "px"
          }
        }
        />)}
      </nav>
    </div>
  )
}

export default App;








