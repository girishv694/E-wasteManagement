import '../css/appointment.css'
import { Link } from 'react-router-dom'
import { Div } from './Container'
import { useState, useEffect } from 'react'
import axios from 'axios'
export const Appointment = () => {
  const [d, setD] = useState([])
  const [time,setTime]=useState([])
  let n = localStorage.getItem('testObject')
  
  const [obj,setObj]=useState({
    num:n,
    time:"",
    date:"",
    day:"",
    month:""
  })
  useEffect(() => {
  
    let a = []
    let t=[]
    for (let i = 1; i < 6; i++) {
      let sub=[]
      const d = new Date();
      let t1 = d.getDay();
      let t2=d.getDate();
      let t3=d.getMonth()

     sub.push(t1+i)
     sub.push(t2+i)
    
     sub.push(false)
     sub.push(t3)
     a.push(sub)
    }

    setD(a)
    gettime()
  
    return () => {}
  }, [])
  
  async function  gettime(){
    let res= await axios.get('http://localhost:4000/Time')

    setTime(res.data)
  }

  const hovereffect=(el)=>{
   let res= d.map((elm)=>{
      if(elm!==el){
        elm[2]=false;
      }
      else{
        elm[2]=true
      }
      return elm;
     
    })
    setD(res)
  }

  const hovereffecttime=(el)=>{
    let res= time.map((elm)=>{
       if(elm!==el){
         elm.status=false;
       }
       else{
         elm.status=true
       }
       return elm;
      
     })
     setTime(res)
   }

   async function getdata(){
     let res = await axios.post('http://localhost:3002/appointment',obj)
  //   console.log(res.data._id);
     localStorage.setItem("appointment_id",JSON.stringify(res.data._id))
   }
   
  return (
    <>
      <Div>
        <div className='container_mainp5'>
          <div className='Container_p5'>
            <div className='header_p20'>
              <Link to='/bargain' id='#'>
                <h2 className='back_p20'>
                  <img src='Images/backarrow1.svg' alt='' id='arrow' />
                </h2>
              </Link>
              <h1>Appointment</h1>
            </div>
            <div className='block_p20'>
              <div className='header_text_p20'>
                <h6>Please select your proferable pickup date</h6>
              </div>
              <div className='block_cl_p20'>
                <div className='A_p20'>
                 {d.map((e) => {
                return  <>
                <button id={e[2]?"hovers":null} onClick={()=>{
                  
                  hovereffect(e)
                  obj.date=e[1]
                  obj.day=e[0]%7===0?"Sunday"
                  :e[0]%7===1?"Monday":e[0]%7===2?"Tuesday":e[0]%7===3?"Wednesday":e[0]%7===4?"Thursday":e[0]%7===5?"Friday":e[0]%7===6?"Saturday":null
               obj.month=e[3]
                }}> {e[0]%7===0?"Sunday"
                :e[0]%7===1?"Monday":e[0]%7===2?"Tuesday":e[0]%7===3?"Wednesday":e[0]%7===4?"Thursday":e[0]%7===5?"Friday":e[0]%7===6?"Saturday":null}
                <br />
                <h6>{e[1]}</h6>
                </button>
               
                  </>

                  })} 
                </div>
              </div>
              <div className='tag_p20'>
                Your availibility on that day
                {/* <h1>Your availabilty on that day</h1> */}
              </div>
              <div className='time_p20'>
                {
                  time.map((el)=>{
                return <>
                    <button id={el.status? "hovers":null} onClick={()=>{
                      hovereffecttime(el)
                      obj.time=el.t
                    }} >{el.t}</button>
                    </>
                  })
                }
              </div>
              <div className='CONT_p20'>
                {/* <Link to='/pickupconfirmation' onClick={getdata}> */}
                  <button className='but_p20' onClick={getdata}>Continue</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  )
}
