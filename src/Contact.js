import React from "react";
import { useState } from "react";
import { dataContact } from './dataContact';

function Contact(){

  
    const[showText,setShowText]=useState(false);
    const showTextClick=(element)=>{
        element.showMore=!element.showMore 
        setShowText(!showText)
    }

    return(
      <div>
        <div className="page-contact">
             <div className='social-share'>


     </div>
<p className="head-contact">Контакты</p>

{dataContact.map((element=>{
    const{id,head,email,tel,showMore}=element;
    return <div key={id}>
       
 <p className="par-foot">{head}</p>
 <p className="par-foot">{tel}</p>
 <p className="mail">{showMore ? email:email.substring(0,18)}
 <button className='more-less'onClick={()=>showTextClick(element)}>{showMore ? "...Свернуть": "...Развернуть"}</button>
 </p>
    </div>
}))}


          <div className="page-contact">  
     
    <form action="https://formspree.io/f/mpzbnday"  method="POST">
      

     
      
      <p className="par-contact">Форма обратной связи</p>
      
        <input id='name-contact' placeholder="Ваше имя..." type="text"  required />
      
        <input id='name-contact' placeholder="Введите ваш Email" type="email"  name="email"  required/>
      
        <textarea id='name-contact' placeholder="Напишите сообщение..." type="text" name="message" required></textarea>
      
        <button className='but-contact' name="submit" type="submit" id="contact-submit"> Отправить </button>
      </form>
  </div>
  </div>
 </div>
        
    )
}
export default Contact;