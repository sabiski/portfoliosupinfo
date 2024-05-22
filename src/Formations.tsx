import NavBar from "./components/NavBar"

function Formations(){
    return(
       <main className="bg-zinc-200">
        <NavBar></NavBar>
<h3 className="  m-4 p-4    border-b-black text-black font-bold  text-black font-mono rounded-md border-white   shadow-md flex items-center justify-center">Ma Formation</h3>

        <main className=" bg-slate-50 shadow-md rounded-md  flex-col  mb-4">
            <div className=" w-30 h-20 m-10">
                <h3 className="  text-center   text-zinc-400 font-medium ">Ecole241/Simplon</h3>
                <p>J'ai participé à la formation de l'école 241 en qualité de développeur web et mobile, cette formation a eu une durée de neufs mois , cette formation m'a parmi d'obtenir ma certification SIMPLON en tant que développeur full stack junior.</p>
            </div>
            <div className=" w-30 h-20 m-10">
                <h3 className="  text-center   text-zinc-400 font-medium ">Stage/ Cybert school international</h3>
                <p>J'ai fait un stage en qualité de développeur mobile au mobile dans la start-up cybert school international, j'avais pour rôle de faire la refonte de l'application mobile de la start-up ainsi que développer plusieurs autres fonctionnalités. </p>
            </div>
         
        </main>
       </main>
    )
}

export default Formations