import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState,useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup,setPickup] = useState('');
  const [destination,setDesination]=useState('');
  const [PanelOpen,setPanelOpen]= useState(false);
  const panelRef=useRef(null);
  const panelCloseRef = useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault();
  }

   useGSAP(function(){
    if(PanelOpen){
      gsap.to(panelRef.current,{
       height:'70%',
       padding:24
     })
     gsap.to(panelCloseRef.current,{
      opacity:1
     })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
       })
    }
     
   },[PanelOpen])

  return (
    <div>
       <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
       <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <img className='h-full w-full object-cover' src="https://www.uberpeople.net/attachments/20180725_222331-jpg.246575/" alt="" />
        </div>
        <div  className=' flex flex-col justify-end h-screen absolute bottom-0 w-full '>
          <div className='h-[30%] p-5 bg-white relative'>
            <h5 ref={panelCloseRef} onClick={()=>{
              setPanelOpen(false)
            }}
            className='absolute opacity-0 top-2 right-3 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='text-3xl font-semibold'>
            Find a trip
          </h4>
          <form action="" onSubmit={(e)=>{
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>

            <input
            onClick={()=>{
              setPanelOpen(true);
            }} 
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text"  placeholder='Add a pick up location'/>
            <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Add a drop location' />
          </form>
          </div>
          <div ref={panelRef} className=' bg-white h-0'>
                <LocationSearchPanel/>
          </div>
        </div>
    </div>
  )
}

export default Home