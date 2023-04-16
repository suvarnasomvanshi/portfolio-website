import React from "react";
import "./Page4.css";
import {FaGraduationCap} from "react-icons/fa"
import {CiHeart} from 'react-icons/ci'


function Page4() {

return (
    <>
    <div className="contain">

      <div className="Page4">
        <div className="edu">Education</div>

        <div className="di1">
            
          <span><FaGraduationCap style={{fontsize:"50px",color:"red",marginLeft:"2vw",marginTop:"2vh"}}/></span>
           <span style={{marginTop:"2vh"}}>
            Front-End Developement
            <br/>
           <span style={{fontSize:"2vh"}}>FunctionUp</span>
            </span> 
         
        </div>


            
        <div className="di2">


        <span><FaGraduationCap style={{fontsize:"50px",color:"red",marginLeft:"2vw",marginTop:"2vh"}}/></span>
             <span>
                    <span style={{fontSize:"2vh"}}>2020-2022</span><br/>
                      <span style={{marginTop:"2vh"}}>
                          Msc Mathematics <br/>
                         <span style={{fontSize:"2vh"}}>S.P.H.J science collage</span>
                      </span> 
             </span>
        </div>
        <br/>

        <div className="di3">
            <span><FaGraduationCap style={{fontsize:"50px",color:"red",marginLeft:"2vw",marginTop:"2vh"}}/></span>
                 <span>
                    <span style={{fontSize:"2vh"}}>2017-2020 </span><br/>
                    <span style={{marginTop:"2vh"}}>
                             Bsc Mathematics <br/>
                       <span style={{fontSize:"2vh"}}>S.P.H.J science collage</span>
                    </span>
                </span>
           
         </div>

    </div>
           <div className="cont">
                <img className="imgcont"  src="https://png.pngtree.com/png-clipart/20220414/ourmid/pngtree-young-girl-study-with-book-and-pen-png-image_4543088.png"/>

           </div>
    </div>
    </>
  );
}
export default Page4;
