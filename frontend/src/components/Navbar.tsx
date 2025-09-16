import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const navItems = [
    {
        "label":"Home",
        "href":"/"
    },{
        "label":"Features",
        "href":"/features"
    },{
        "label":"Pricing",
        "href":"/pricing"
    },{
        "label":"Services",
        "href":"/services"
    }
]
const Navbar = () => {

  const navigate = useNavigate()
  return (
    <nav className="flex max-w-[70%] mx-auto items-center justify-between py-4">
      <div className="logo font-semibold text-2xl ">Inlance.ai</div>
      <div className="nav-items  sm:hidden lg:flex flex-row gap-6">{
        navItems.map((item)=>{
            return(
                <a className="font-medium text-lg" href={item.href}>{item.label}</a>
            )
        })
        }</div>
      <div className="buttons flex flex-row gap-2">
        <Button variant={"ghost"} onClick={()=>navigate('/login')} className="px-4 text-lg">Login</Button>
        <Button onClick={()=>navigate('/register')} className="px-4 text-lg">Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar
