import { Link } from "react-router-dom"


function NavBar(){
    return (
        <div className="w-full h-20  bg-black shadow-white">
            {/* mon menu  */}
            <header>
                <h1 className=" text-opacity-40 font-bold   p-4  m-4  shadow-md absolute bg-white rounded-sm">Ls</h1>
                <nav className=" p-10" >
                  <ul className=" flex justify-end  gap-3 px-5   text-slate-300">
                  <li  className=" font-bold"><Link to="/">Accueil</Link></li>  
                  <li className=" font-bold"><Link to="/competences">Compétences</Link></li>  
                  <li className=" font-bold"><Link to="/projets">Projets</Link></li>  
                  <li className=" font-bold"><Link to="/formations">Formations</Link></li>  
                  <li className=" font-bold"><Link to="/contact">Contacts</Link></li>  
                  </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar