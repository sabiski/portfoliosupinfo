import NavBar from "./components/NavBar"


function Contact(){
    return(<div className=" bg-zinc-200">
        <NavBar></NavBar>
<h3 className="  m-4 p-4    border-b-black text-black font-bold   text-black font-mono rounded-md    shadow-lg flex items-center justify-center border-white ">Contactez-moi</h3>
        <section className=" w-full  p-10 h-full flex justify-center  items-center">
            <form className=" ">
                <input type="text"  placeholder="Entrez votre Nom" className="  outline-none  w-64 rounded-md shadow-md   mb-7 text-center p-4" /><br></br>
                <input type="text"  placeholder="Entrez votre Prénom" className="  outline-none   w-64 rounded-md shadow-md   mb-7 text-center p-4" /><br></br>

                <textarea maxLength={200 } rows={10} cols={2}
                 placeholder="Entrez votre message ici..." className="  outline-none    w-64 h-20 rounded-md shadow-md  text-center p-4" ></textarea><br></br>
                <button type="submit" className="  p-3  rounded-md w-8/12  hover: bg-purple-100  text-white font-bold  bg-purple-400">Envoyez</button>
            </form>
        </section>

    </div>)
}

export default Contact