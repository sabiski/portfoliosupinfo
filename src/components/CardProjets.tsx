
import projet1 from '../assets/projet1.jpg'
import projet2 from "../assets/projet2.png"
import projet3 from "../assets/projet3.png"

function CardProjets(){
    const tableauImage =[
        {
            titre:"chez Gaby",

            img:projet1,
            des:"Application de restauration de fast food"
        }
        ,
        {
            titre:"Yuri",

            img:projet2,
            des:"Application de tourisme gabonais "
        }
            ,
            {
                titre:"Guilambu",
    
                img:projet3,
                des:"application e-commerce "
            }
        
    ]
    return (
    
   
   <main>
<h3 className="  m-4 p-4    border-b-black text-black font-bold   text-black font-mono rounded-md border-white   shadow-md flex items-center justify-center">Mes projets</h3>

     <div className=' flex justify-center   gap-4 mt-4'>

    
    {
        tableauImage.map(image=>(
            <div className=' bg-slate-50 rounded-lg shadow-md p-3 '>
                <h1>{image.titre}</h1>
                <img src={image.img} className=' w-28 h-22 '></img>
                <p>{image.des}</p>
            </div>
        ))
    }
    </div>

   </main>
    )
}

export default CardProjets