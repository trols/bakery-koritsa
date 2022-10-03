import React from "react";
import { useState } from 'react';
import { dataAboutUs } from './dataAbotUs'

function About(){
    const[about,setAbout]=useState(0);
    const{foto,text}= dataAboutUs[about];

    const previousItem = () => {
        setAbout ((item => {
          item -- ;
          if (item < 0 ) {
            item = dataAboutUs.length -1;
          }
          return item;
        }))
        
      }
    
      const nextItem = () => {
    
        setAbout (( item => {
            item ++;
            if (item > dataAboutUs.length -1 ) {
              item = 0;
            }
            return item;
        }))
      }
    return(
        <div>
            <div className="about-us">
                <h1><span>Добро пожаловать!</span></h1>
                </div>

          

          <div className="about-us">
                <h1>Сеть булочных <span> Kорица</span><img src="https://img.icons8.com/color/344/wheat.png" width="40px" alt="foto-about"/>для всей семьи</h1>
                </div>

                    <div className="about-us" id="text"><p>{ text }</p></div>

                    

            <div className='about-us'>
                

                <img className="about-us" src={ foto } width="380px" alt="about"/></div>
                <div className='about-us'>
                <button onClick={previousItem} className='buttonLeftRight'>
                <img src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik0yLjY1MzkxLDg2YzAsLTQ2LjAyMzQ0IDM3LjMyMjY2LC04My4zNDYwOSA4My4zNDYwOSwtODMuMzQ2MDljNDYuMDIzNDQsMCA4My4zNDYwOSwzNy4zMjI2NiA4My4zNDYwOSw4My4zNDYwOWMwLDQ2LjAyMzQ0IC0zNy4zMjI2Niw4My4zNDYwOSAtODMuMzQ2MDksODMuMzQ2MDljLTQ2LjAyMzQ0LDAgLTgzLjM0NjA5LC0zNy4zMjI2NiAtODMuMzQ2MDksLTgzLjM0NjA5eiIgZmlsbD0iI2U2N2UyMiI+PC9wYXRoPjxwYXRoIGQ9Ik03Ny43MzU5NCw4Ni45MDcwM2MxMC4zMTMyOCwtMTAuMzEzMjggMjAuNjI2NTYsLTIwLjYyNjU2IDMwLjkzOTg0LC0zMC45Mzk4NGM5LjAwMzEyLC05LjAwMzEzIC01LjAwNTQ3LC0yMi45MTA5NCAtMTQuMDQyMTksLTEzLjg3NDIyYy0xMi42MzEyNSwxMi42MzEyNSAtMjUuMjYyNSwyNS4yNjI1IC0zNy44OTM3NSwzNy44OTM3NWMtMy44Mjk2OSwzLjgyOTY5IC0zLjY5NTMxLDEwLjE3ODkxIDAuMDY3MTksMTMuOTQxNDFjMTIuNjMxMjUsMTIuNjMxMjUgMjUuMjYyNSwyNS4yNjI1IDM3Ljg5Mzc1LDM3Ljg5Mzc1YzkuMDAzMTMsOS4wMDMxMyAyMi45MTA5NCwtNS4wMDU0NyAxMy44NzQyMiwtMTQuMDQyMTljLTEwLjI3OTY5LC0xMC4zMTMyOCAtMjAuNTU5MzgsLTIwLjU5Mjk3IC0zMC44MzkwNiwtMzAuODcyNjZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=' width='35px' alt="foto-about"/>
                </button>
<button onClick={nextItem} className='buttonLeftRight'>
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik0yLjY1MzkxLDg2YzAsLTQ2LjAyMzQ0IDM3LjMyMjY2LC04My4zNDYwOSA4My4zNDYwOSwtODMuMzQ2MDljNDYuMDIzNDQsMCA4My4zNDYwOSwzNy4zMjI2NiA4My4zNDYwOSw4My4zNDYwOWMwLDQ2LjAyMzQ0IC0zNy4zMjI2Niw4My4zNDYwOSAtODMuMzQ2MDksODMuMzQ2MDljLTQ2LjAyMzQ0LDAgLTgzLjM0NjA5LC0zNy4zMjI2NiAtODMuMzQ2MDksLTgzLjM0NjA5eiIgZmlsbD0iI2U2N2UyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjAuMDY0MDYsNzkuODg1OTRjLTEyLjYzMTI1LC0xMi42MzEyNSAtMjUuMjYyNSwtMjUuMjYyNSAtMzcuODkzNzUsLTM3Ljg5Mzc1Yy05LjAwMzEzLC05LjAwMzEzIC0yMi45MTA5NCw1LjAwNTQ3IC0xMy44NzQyMiwxNC4wNDIxOWMxMC4yNzk2OSwxMC4yNzk2OSAyMC41OTI5NywyMC41NTkzNyAzMC44NzI2NiwzMC44NzI2NmMtMTAuMzEzMjgsMTAuMzEzMjggLTIwLjYyNjU2LDIwLjYyNjU2IC0zMC45Mzk4NCwzMC45Mzk4NGMtOS4wMDMxMyw5LjAwMzEyIDUuMDA1NDcsMjIuOTEwOTQgMTQuMDQyMTksMTMuODc0MjJjMTIuNjMxMjUsLTEyLjYzMTI1IDI1LjI2MjUsLTI1LjI2MjUgMzcuODkzNzUsLTM3Ljg5Mzc1YzMuNzYyNSwtMy43OTYwOSAzLjY2MTcyLC0xMC4xNzg5MSAtMC4xMDA3OCwtMTMuOTQxNDF6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" width='35px' alt="foto-about"/>
                    </button>
            </div>
 <div className="about-us">    
            <p>В наших булочных Вы можете попробовать свежую выпечку и десерты.</p>
            <p> Выпить ароматный чай или заварной кофе!</p>
            <p>Взять с собой хлеб с хрустящей корочкой!</p>
            <p>Заказать нашу продукцию к завтраку в нашем <span>ИНТЕРНЕТ-МАГАЗИНЕ</span></p>
            </div>
           </div>
    )
}
export default About;