import React from 'react';
import './start.css';

const App1 =()=>{

    let initialState=0;
    const [mynum, updatednum] = React.useState(initialState)

    React.useEffect(() => {
        document.title=`Project(${mynum})`
    })
    return (
        <>
            <div class="Center">
                <center>
                    <p class="para">{mynum}</p>
                    <button class="button1" onClick={()=> updatednum(mynum+1)}>Incr</button>
                    <button class="button1" onClick={()=> mynum>0?updatednum(mynum-1):updatednum(0)}>Decr </button>
                </center>
            </div>
        </>
    )

}




export default App1
