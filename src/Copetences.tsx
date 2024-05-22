import NavBar from "./components/NavBar"


function Competences(){
    return <div>
       <NavBar></NavBar>
<h3 className="  m-4 p-4    border-b-black text-black font-bold  text-black font-mono rounded-md border-white   shadow-md flex items-center justify-center">Mes Comptences:</h3>
      

      <div className="flex justify-center">
                <h3 className=" bg-black p-2 text-white font-mono rounded-md border-white">Langages de programmation et leurs Frameworks</h3>
            </div>
       <main className="  h-40 flex justify-center items-center   gap-3" >
      
     
    <div className=" bg-white rounded-md  border-2 p-1 shadow-sm max-w-sm  w-full">
        <p className=" p-1">Langage Dart / Framework Flutter</p>
    </div>
    <div className=" bg-white rounded-md border-2  p-1 shadow-sm max-w-sm  w-full">
        <p className=" p-1">Langage Javascript / Framework React js</p>
    </div>
    <div className=" bg-white rounded-md border-2  p-1 shadow-sm max-w-sm  w-full">
        <p className=" p-1">Langage Python / Framework Django</p>
    </div>
    
       </main>
       <div className="flex justify-center">
                <h3 className=" mb-7 bg-black p-2 text-white font-mono rounded-md border-white">Base de données et Maquettage</h3>
            </div>
       <section className="  flex justify-center items-center gap-3">
          
            <div className=" bg-white rounded-md border-2  p-1 shadow-sm max-w-sm  w-full">
        <p className=" p-1">Firebase </p>
    </div>
            <div className=" bg-white rounded-md border-2  p-1 shadow-sm max-w-sm  w-full">
        <p className=" p-1">Figma</p>
    </div>

       </section>
       <section className="  flex justify-center items-center gap-3 mb-2">
          
            <div className=" bg-white rounded-md border-2  p-1 shadow-sm max-w-sm  w-full">
        <p className=" p-1">Mysql</p>
    </div>
            <div className=" bg-white rounded-md border-2  p-1 shadow-sm max-w-sm  w-full">
        <p className=" p-1">Adobe xd</p>
    </div>
       </section>
    </div>
}

export default Competences