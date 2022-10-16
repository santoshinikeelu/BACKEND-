const currentdate=new Date()

    console.log(currentdate)


const date=new Date()
const month= date.getMonth()

    console.log(date,month)

    




    
 
    const name="Lithium"
     const week='W3D5'
   const topic='Todays Node js Topic -- How to create Module and Export it.'


function getbatchinfo(){
    console.log(name,week,topic )
}





module.exports.todaydate = currentdate
module.exports.month =month
module.exports.info=getbatchinfo() 