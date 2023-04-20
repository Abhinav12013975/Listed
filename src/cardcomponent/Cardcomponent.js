import React from 'react'
import Datacomponent from '../datacomponent/Datacomponent'
import Chart from '../chart/Chart'
import './Cardcomponent.css'
import Dataanalysis from '../dataanalysis/Dataanalysis'
function Cardcomponent() {
  // const[data, setData] = useState({})
  // useEffect(()=>{
  //   const api = async () =>{
      
  //   }
  // })

  return (
    <div className="_Cardcomponent">
       <Datacomponent/>
       <Chart/>
       <Dataanalysis/>
    </div>
  )
}

export default Cardcomponent
