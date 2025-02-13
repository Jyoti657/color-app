
export default function DisplayColor({color}){
    return(
        <>
         <div className="main">
        <div className="color" 
        style={{ backgroundColor: color }}>
            {color}
        </div>
      </div>
        </>
    )

} 