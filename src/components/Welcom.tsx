
import sabi from "../assets/sabi.png"
function Welcom(){

    return (
       <main className="  w-5/6  h-56  flex justify-center items-center   m-28">
       
        <div className=" bg-white rounded-md    shadow-lg p-8 border-2 shadow-sm flex justify-center items-center  gap-4">
            
          <div>
            <h1 className=" text-2xl pt-2 font-bold">Qui je suis ?</h1>
            <p className=" font-semibold  text-gray-400">Je suis Loundou-sabi ulrich junior Développeur full stack junior web/mobile certifié SIMPLON .En effet, je suis née le 11 mars 1994 a lambarene (Gabon)dans la province du moyen Ogooué ,j'ai fais mon primaire à Libreville , en suite mon lycée dans la province du haut Ogooué, après l'obtention de mon Bac de série scientifique je suis allé à l'université des sciences et technique de masuku ,c'est dans cette université que je suis tombé amoureux de l'informatique en particulier de la programmation.C'est dans cet élan que j'ai participé au concours de l'école 241 ou il avait plus de mille participant pour juste vingt place , par la grâce de Dieu j'ai eu ce concours, j'ai ainsi pu obtenir après neufs mois de formation accélère les bases de la programmation. En tant que jeune garçon, j'aime beaucoup la musique et le sport.</p>
          </div>
          <div className=" block justify-end ">
          <img src={sabi} style={{
            width:"700px",
            borderRadius:"50%"
          }}></img>
            {/* <button className=" bg-purple-500   text-white  font-bold rounded-md  ">Contactez-moi</button> */}
          </div>
         
        </div>
      
       
       </main>
    )
}

export default Welcom