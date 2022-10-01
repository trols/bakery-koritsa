import React from "react";
import { useState } from "react";
import { dataContact } from './dataContact';

function Contact(){

    const[contact,setContact]=useState(dataContact);
    const[showText,setShowText]=useState(false);
    const showTextClick=(element)=>{
        element.showMore=!element.showMore 
        setShowText(!showText)
    }

    return(
        <div className="page-contact">
             <div className='social-share'>

<div className="top-icon">
    <a href="https://www.vk.com/share.php?url=" target="_blank=" className='social-share-icon'>
  <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iI2ZmZjVlNCI+PC9wYXRoPjxnIGZpbGw9IiNjMjQ5MTQiPjxwYXRoIGQ9Ik0xNjMuOTg0MDgsMTI2LjE0MDVjLTYuNDM5MjUsLTExLjU4ODUgLTIzLjAyNjUsLTI1LjUxMzMzIC0yOS44NzQyNSwtMzEuNTcyNzVjLTEuODc0MDgsLTEuNjU5MDggLTIuMDc0NzUsLTQuNTI5MzMgLTAuMzY5MDgsLTYuMzY0YzEzLjA2ODQyLC0xNC4wNDMwOCAyMy41MjEsLTMwLjE3ODgzIDI3LjExODY3LC0zOS45MjkwOGMxLjU4NzQyLC00LjMwNzE3IC0xLjY5ODUsLTguODU4IC02LjMyODE3LC04Ljg1OGgtMTMuNDQ4MjVjLTQuNDMyNTgsMCAtNy4wMjY5MiwxLjU5MSAtOC4yNjMxNyw0LjEyNDQyYy0xMC44NjEwOCwyMi4yNTYwOCAtMjAuMTc3NzUsMzEuODg4MDggLTI2LjY5OTQyLDM3LjUxNzVjLTMuNjUxNDIsMy4xNTMzMyAtOS4zNDUzMywwLjU0MTA4IC05LjM0NTMzLC00LjI1N2MwLC05LjI0NSAwLC0yMS4xOTU0MiAwLC0yOS42N2MwLC00LjExMDA4IC0zLjM2MTE3LC03LjQzNTQyIC03LjUwNzA4LC03LjQzNTQybC0yNC41NjczMywtMC4yNzk1Yy0zLjA5MjQyLDAgLTQuODU5LDMuNTAwOTIgLTMuMDAyODMsNS45NTU1bDQuMDU2MzMsNS44MjI5MmMxLjUyNjUsMi4wMTc0MiAyLjM1MDY3LDQuNDcyIDIuMzUwNjcsNi45OTEwOGwtMC4wMjE1LDI2LjIyMjgzYzAsNC41NjE1OCAtNS41MjkwOCw2Ljc5MDQyIC04LjgxMTQyLDMuNTk0MDhjLTExLjEwNDc1LC0xMC44MTQ1IC0yMC43NDAzMywtMzIuODk4NTggLTI0LjIwOSwtNDMuNDU4NjdjLTEuMDAzMzMsLTMuMDU2NTggLTMuODY2NDIsLTUuMTIwNTggLTcuMTEyOTIsLTUuMTI3NzVsLTEzLjI0NzU4LC0wLjAzMjI1Yy00Ljk3MDA4LDAgLTguNjAzNTgsNC43MTIwOCAtNy4yNTI2Nyw5LjQ1NjQyYzEyLjEwNDUsNDIuNDg3NTggMzYuOTQwNTgsODIuOTA3NTggODEuMjAxOTIsODcuMjljNC4zNjA5MiwwLjQzIDguMTIzNDIsLTMuMDgxNjcgOC4xMjM0MiwtNy40MjgyNXYtMTMuNzgxNWMwLC0zLjk1MjQyIDMuMDk5NTgsLTcuMzQ5NDIgNy4wODQyNSwtNy40NDk3NWMwLjEzOTc1LC0wLjAwMzU4IDAuMjc5NSwtMC4wMDM1OCAwLjQxOTI1LC0wLjAwMzU4YzExLjcwNjc1LDAgMjQuODE4MTcsMTcuMDM4NzUgMjkuNDA0ODMsMjUuMDA4MDhjMS4zMTg2NywyLjI5MzMzIDMuNzg0LDMuNjkwODMgNi40NSwzLjY5MDgzaDE3LjgxOTkyYzUuMTk5NDIsMCA4LjUzNTUsLTUuNTE0NzUgNi4wMzA3NSwtMTAuMDI2MTd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" width='25px' height='25px'/>
 </a>
<a href="https://api.whatsapp.com/" target="_blank" className='social-share-icon' >
  <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iI2ZmZjVlNCI+PC9wYXRoPjxnIGZpbGw9IiNjMjQ5MTQiPjxwYXRoIGQ9Ik04Niw2Ljg4Yy00My42NTUyLDAgLTc5LjEyLDM1LjQ2NDggLTc5LjEyLDc5LjEyYzAsMTQuMDMyMDkgMy44NDgyOSwyNy4xMjc0MyAxMC4yNjYyNSwzOC41NTg5bC0xMC4xMzg1OSwzNi4xOTM5MWMtMC4zMjk2MSwxLjE3ODYyIC0wLjAwODI4LDIuNDQzNjEgMC44NDM4NywzLjMyMjA0YzAuODUyMTUsMC44Nzg0MyAyLjEwNjgsMS4yMzgwMyAzLjI5NDg4LDAuOTQ0MzZsMzcuNzM5MjIsLTkuMzUyNWMxMS4wODk1LDUuOTIwMTYgMjMuNjcyODksOS40NTMyOCAzNy4xMTQzNyw5LjQ1MzI4YzQzLjY1NTIsMCA3OS4xMiwtMzUuNDY0OCA3OS4xMiwtNzkuMTJjMCwtNDMuNjU1MiAtMzUuNDY0OCwtNzkuMTIgLTc5LjEyLC03OS4xMnpNODYsMTMuNzZjMzkuOTM2OCwwIDcyLjI0LDMyLjMwMzIgNzIuMjQsNzIuMjRjMCwzOS45MzY4IC0zMi4zMDMyLDcyLjI0IC03Mi4yNCw3Mi4yNGMtMTIuODAzNTksMCAtMjQuNzk1MSwtMy4zMzgwNiAtMzUuMjE5NjksLTkuMTcxMWMtMC43NjI0NCwtMC40MjYwMyAtMS42NTgzNywtMC41NDYxMyAtMi41MDYxLC0wLjMzNTk0bC0zMy4wNDk1Myw4LjE5MDE2bDguODYyMDMsLTMxLjYxODQ0YzAuMjU2MjQsLTAuOTAyOTIgMC4xMzI0NiwtMS44NzEzNCAtMC4zNDI2NiwtMi42ODA3OGMtNi4zMzUzLC0xMC43NDI3NSAtOS45ODQwNiwtMjMuMjQxOTQgLTkuOTg0MDYsLTM2LjYyMzljMCwtMzkuOTM2OCAzMi4zMDMyLC03Mi4yNCA3Mi4yNCwtNzIuMjR6TTU3LjI1MDQ3LDQ0LjcyYy0yLjIwNTE3LDAgLTUuMzU0NDcsMC44MjA0MSAtNy45NDE1NiwzLjYwNzk3Yy0xLjU1MzksMS42NzQzMiAtOC4wMjg5LDcuOTgzMTUgLTguMDI4OSwxOS4wNzQ1M2MwLDExLjU2MzYzIDguMDE5OTksMjEuNTQxNjIgOC45ODk2OSwyMi44MjM2aDAuMDA2NzJ2MC4wMDY3MmMtMC4wOTE5OSwtMC4xMjA4OCAxLjIzMDgyLDEuNzk0NzIgMi45OTY1Niw0LjA5MTcyYzEuNzY1NzUsMi4yOTY5OSA0LjIzNDksNS4zMTM4MyA3LjMzNjg4LDguNTc5ODRjNi4yMDM5NCw2LjUzMjAzIDE0LjkyNjY1LDE0LjA4MTE1IDI1Ljc1Mjk3LDE4LjY5ODI4YzQuOTg1NjYsMi4xMjMwNiA4LjkxODkyLDMuNDA0OTQgMTEuODk4OSw0LjM0MDMxYzUuNTIyNTUsMS43MzQxIDEwLjU1MjYxLDEuNDcwNSAxNC4zMzExLDAuOTEzNzVjMi44MjgyMywtMC40MTY1IDUuOTM4ODUsLTEuNzc0NDkgOS4wMTY1NiwtMy43MjIxOWMzLjA3NzcyLC0xLjk0NzcgNi4wOTQwNiwtNC4zNjk0OSA3LjQyNDIyLC04LjA0OTA2YzAuOTUyOSwtMi42Mzc5MSAxLjQzNzMyLC01LjA3NTY1IDEuNjEyNSwtNy4wODE1NmMwLjA4NzU4LC0xLjAwMjk2IDAuMDk4NzEsLTEuODg4MTUgMC4wMzM1OSwtMi43MDc2NWMtMC4wNjUyNiwtMC44MTk1IDAuMDA0NDcsLTEuNDQ3MjUgLTAuNzU5MjIsLTIuNzAwOTRjLTEuNjAxNTYsLTIuNjI5NTkgLTMuNDE1MzIsLTIuNjk4MjIgLTUuMzA3ODEsLTMuNjM0ODVjLTEuMDUxNSwtMC41MjA0MSAtNC4wNDUyNiwtMS45ODIzIC03LjA0Nzk3LC0zLjQxMzEyYy0yLjk5OTMzLC0xLjQyOTIyIC01LjU5NjQsLTIuNjk1MDMgLTcuMTk1NzgsLTMuMjY1MzFjLTEuMDEwNDgsLTAuMzYzNTUgLTIuMjQ0MzUsLTAuODg2OSAtNC4wMjQ1MywtMC42ODUzMWMtMS43ODAxOCwwLjIwMTU4IC0zLjUzODM5LDEuNDg2MDEgLTQuNTYyMDMsMy4wMDMyOGMtMC45NzAyNywxLjQzODE2IC00Ljg3NjIxLDYuMDQ4NzIgLTYuMDY3MDMsNy40MDQwNmMtMC4wMTU4MiwtMC4wMDk2MyAwLjA4NzUxLDAuMDM3OTcgLTAuMzgyOTcsLTAuMTk0ODVjLTEuNDcyNzcsLTAuNzI4ODkgLTMuMjczOTYsLTEuMzQ4NjYgLTUuOTM5MzgsLTIuNzU0NjljLTIuNjY1NDEsLTEuNDA2MDMgLTUuOTk5NjEsLTMuNDgyMjcgLTkuNjQ4MTIsLTYuNjk4NnYtMC4wMDY3MmMtNS40MzA0MywtNC43ODA3NSAtOS4yMzQyMywtMTAuNzgzMDEgLTEwLjQzNDIyLC0xMi43OTkyMmMwLjA4MDg0LC0wLjA5NjE4IC0wLjAwOTYxLDAuMDIwMyAwLjE2MTI1LC0wLjE0NzgxbDAuMDA2NzIsLTAuMDA2NzJjMS4yMjY0MSwtMS4yMDc5NyAyLjMxMzMxLC0yLjY1MDcyIDMuMjMxNzIsLTMuNzA4NzVjMS4zMDIxNywtMS41MDAxNCAxLjg3NjgzLC0yLjgyMjU4IDIuNDk5MzcsLTQuMDU4MTJjMS4yNDA3MiwtMi40NjI0NCAwLjU0OTg4LC01LjE3MjEyIC0wLjE2Nzk3LC02LjU5Nzgxdi0wLjAwNjcyYzAuMDQ5NTcsMC4wOTg2MiAtMC4zODgzMSwtMC44Njc1MiAtMC44NiwtMS45ODIwM2MtMC40NzMwMywtMS4xMTc2OSAtMS4wNzYsLTIuNTY2NyAtMS43MiwtNC4xMTE4OGMtMS4yODgsLTMuMDkwMzUgLTIuNzI1OTUsLTYuNTU2NDYgLTMuNTgxMDksLTguNTg2NTZ2LTAuMDA2NzJjLTEuMDA3MzksLTIuMzkxMjQgLTIuMzcwMzEsLTQuMTEzOTEgLTQuMTUyMTksLTQuOTQ1Yy0xLjc4MTg4LC0wLjgzMTA5IC0zLjM1NjE2LC0wLjU5NDgxIC0zLjQxOTg0LC0wLjU5Nzk3aC0wLjAwNjcyYy0xLjI3MTU4LC0wLjA1ODY2IC0yLjY2Njk0LC0wLjA3MzkgLTQuMDUxNCwtMC4wNzM5ek01Ny4yNTA0Nyw1MS42YzEuMzI2MjYsMCAyLjYzMzc5LDAuMDE2MTcgMy43Mjg5LDAuMDY3MTljMS4xMjY1OCwwLjA1NjE0IDEuMDU2NTEsMC4wNjA3NSAwLjgzOTg1LC0wLjA0MDMxYy0wLjIyMDEzLC0wLjEwMjY1IDAuMDc4NTQsLTAuMTM1OTggMC43MTg5MSwxLjM4NDA2YzAuODM3MzMsMS45ODc4MiAyLjI4MjM4LDUuNDY2NDggMy41NzQzNyw4LjU2NjQxYzAuNjQ2LDEuNTQ5OTYgMS4yNTA1OCwzLjAwNDU4IDEuNzMzNDQsNC4xNDU0N2MwLjQ4Mjg2LDEuMTQwODkgMC43NDQ0OSwxLjc3Nzg4IDEuMDQ4MTMsMi4zODUxNXYwLjAwNjcybDAuMDA2NzIsMC4wMDY3MmMwLjI5NzcsMC41ODczOCAwLjI3MTM3LDAuMjExMzIgMC4xNjc5NywwLjQxNjU2Yy0wLjcyNTk0LDEuNDQwNzcgLTAuODI0NDQsMS43OTQ1MyAtMS41NTg3NSwyLjY0MDQ3Yy0xLjExODA3LDEuMjg4MDUgLTIuMjU4NTIsMi43MjQ0NyAtMi44NjIxOSwzLjMxOTA2Yy0wLjUyODE0LDAuNTE4ODIgLTEuNDgxMDksMS4zMjcwOSAtMi4wNzYxLDIuOTA5MjJjLTAuNTk1OTIsMS41ODQ1NSAtMC4zMTc3OSwzLjc1ODYgMC42MzgyOCw1LjM4MTcyYzEuMjcyOTEsMi4xNjA5OSA1LjQ2NzU2LDguOTg4MzggMTEuOTg2MjUsMTQuNzI3NWM0LjEwNTI0LDMuNjE4OTYgNy45Mjk4NSw2LjAxNDA3IDEwLjk4NTE1LDcuNjI1NzhjMy4wNTUzMSwxLjYxMTcxIDUuNTQzNzksMi41NTMwMSA2LjEwMDYzLDIuODI4NmMxLjMyMjI2LDAuNjU0NCAyLjc2NzQyLDEuMTYyNTUgNC40NDc4MSwwLjk2MDc4YzEuNjgwMzksLTAuMjAxNzYgMy4xMjkxNiwtMS4yMjEzMyA0LjA1MTQsLTIuMjY0MjJsMC4wMDY3MiwtMC4wMDY3MmMxLjIyNzQsLTEuMzkxNTIgNC44NzQ1NSwtNS41NTYwNSA2LjYyNDY5LC04LjEyMjk3YzAuMDc0MTcsMC4wMjYxNCAwLjA0OTg4LDAuMDA1ODUgMC42MzE1NiwwLjIxNXYwLjAwNjcyaDAuMDA2NzJjMC4yNjU1NywwLjA5NDU3IDMuNTkxODEsMS41ODMzNyA2LjU1NzUsMi45OTY1NmMyLjk2NTY5LDEuNDEzMTkgNS45NzU4MSwyLjg4MjAyIDYuOTUzOTEsMy4zNjYxYzEuNDExNTUsMC42OTg2IDIuMDc4NTIsMS4xNTMzOSAyLjI1MDc4LDEuMTU1NjJjMC4wMTE2NCwwLjMwMjY3IDAuMDIzNDEsMC42MzA2NSAtMC4wMjAxNiwxLjEyODc1Yy0wLjEyMDY0LDEuMzgxNjMgLTAuNDg5OTUsMy4yOTQwNCAtMS4yMjk1Myw1LjM0MTQxYy0wLjM2MjMxLDEuMDAyMjYgLTIuMjQ5MzcsMy4wNjk0MSAtNC42MjkyMiw0LjU3NTQ3Yy0yLjM3OTg0LDEuNTA2MDYgLTUuMjc2NSwyLjU2OTgzIC02LjM0OTIyLDIuNzI3ODFjLTMuMjI1MzYsMC40NzUyNSAtNy4wNTQ4NSwwLjY0ODc1IC0xMS4yNjA2MywtMC42NzE4OGMtMi45MTYxOCwtMC45MTUzNSAtNi41NTIzNiwtMi4xMDAyMiAtMTEuMjYwNjIsLTQuMTA1MTVjLTkuNTQ4OCwtNC4wNzIzMSAtMTcuNjY0NTIsLTExLjAwMTk5IC0yMy40NjE4OCwtMTcuMTA1OTRjLTIuODk4NjcsLTMuMDUxOTcgLTUuMjIxMDYsLTUuODkzMDMgLTYuODczMjgsLTguMDQyMzRjLTEuNjQ5MTQsLTIuMTQ1MyAtMi4zNjkyNiwtMy4yNjE2OSAtMi45Njk2OSwtNC4wNTE0MWwtMC4wMDY3MiwtMC4wMDY3MmMtMS4wNjU4MSwtMS40MDk0NiAtNy41OTIxOSwtMTAuNDg3NDYgLTcuNTkyMTksLTE4LjY2NDY5YzAsLTguNjU0MjIgNC4wMTk2MywtMTIuMDQ3OTYgNi4xOTQ2OSwtMTQuMzkxNTZjMS4xNDE4NywtMS4yMzAzNSAyLjM5MDI0LC0xLjQxMDk0IDIuODk1NzgsLTEuNDEwOTR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" width="25" height="25"/>
     </a>

    <a href="https://t.me/share" target="_blank" className='social-share-icon'>
  <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iI2ZmZjVlNCI+PC9wYXRoPjxnIGZpbGw9IiNjMjQ5MTQiPjxwYXRoIGQ9Ik0xNTIuNjU2NzIsMjAuNTkyOTdjLTEuNjc1NDUsMC4wNzM1IC0zLjMwNjMxLDAuNTM5ODEgLTQuNzc3MDMsMS4xMjg3NWMtMS40NTU3LDAuNTg1IC05LjgzNjMzLDQuMTYyMDEgLTIyLjIxMjE5LDkuNDUzMjhjLTEyLjM3NTg2LDUuMjkxMjcgLTI4LjQ2MzU1LDEyLjE4MTYyIC00NC40MTA5NCwxOS4wMTQwNmMtMzEuODk0NzgsMTMuNjY0ODkgLTYzLjIzNjg4LDI3LjExMDE1IC02My4yMzY4OCwyNy4xMTAxNWwwLjIyODQ0LC0wLjA4NzM1YzAsMCAtMS44OTE2NiwwLjYzMjMxIC0zLjgwOTUzLDEuOTY4NmMtMC45NTg5NCwwLjY2ODE0IC0xLjk5MDYsMS41MzA3MiAtMi44MzUzMSwyLjc4ODI4Yy0wLjg0NDcxLDEuMjU3NTYgLTEuNDYyMjUsMy4wMzk4IC0xLjIyOTUzLDQuOTI0ODVjMC44MTc0Miw2LjYyMTEyIDcuNjc5NTMsOC40OTkyMiA3LjY3OTUzLDguNDk5MjJsMC4wMjY4OCwwLjAxMzQ0bDMwLjYyNDA2LDEwLjQ4MTI1YzAuNzgwNzksMi42MDQ3MSA5LjI4ODQsMzEuMDAwMTYgMTEuMTU5ODUsMzcuMDEzNmMxLjAzMzU2LDMuMzI0NjUgMi4wMDA5NCw1LjI0MjQ5IDMuMDEsNi41NTA3OGMwLjUwNDk1LDAuNjU0NyAxLjAzNDEzLDEuMTYxMzUgMS42MTkyMiwxLjUzMTg4YzAuMjMyNDgsMC4xNDcyIDAuNDc2OTcsMC4yNTc2NiAwLjcxODksMC4zNTYxYzAuMDA1MTYsMC4wMDIyOSAwLjAwODI4LC0wLjAwMjI3IDAuMDEzNDQsMGMwLjAyOTczLDAuMDEzMTEgMC4wNTc2OSwwLjAxNDI5IDAuMDg3MzQsMC4wMjY4N2wtMC4wODA2MiwtMC4wMjAxNWMwLjA1NjIxLDAuMDIyNyAwLjExMTY5LDAuMDYwOTEgMC4xNjc5NywwLjA4MDYyYzAuMTA5MTgsMC4wMzgyNyAwLjE3NjA4LDAuMDM2OTQgMC4zMTU3OCwwLjA2NzE5YzMuNTA3MjMsMS4yMjQ1NyA2LjQwOTY5LC0xLjA0ODEyIDYuNDA5NjksLTEuMDQ4MTJsMC4xMjA5NCwtMC4wOTQwNmwxOC44MTI1LC0xNy40NDg1OWwzMC41MywyMy44MDQ1M2wwLjM4Mjk3LDAuMTc0NjljNS4zNDM4OCwyLjM3MjczIDEwLjE3NjYxLDEuMDQ4OTcgMTIuODUyOTcsLTEuMTI4NzVjMi42NzYzNiwtMi4xNzc3MyAzLjcyODkxLC00Ljk4NTMxIDMuNzI4OTEsLTQuOTg1MzFsMC4xMTQyMiwtMC4yOTU2MmwyMi40MzM5LC0xMTYuOTI2NDFjMC41NzQwNCwtMi42MTU5IDAuNjU1NiwtNC44NzcwNiAwLjExNDIyLC02LjkyMDMxYy0wLjU0MTM4LC0yLjA0MzI1IC0xLjg1NjcxLC0zLjgxOTQzIC0zLjUwNzE5LC00LjgwMzkxYy0xLjY1MDQ3LC0wLjk4NDQ4IC0zLjM3NzA1LC0xLjMwMzA0IC01LjA1MjUsLTEuMjI5NTN6TTE1Mi44MzgxMywyNy41ODcxOWMwLjY4MDQ0LC0wLjAzMTUxIDEuMTg0NzgsMC4wNDYyNyAxLjM0Mzc1LDAuMTQxMDljMC4xNTg5NywwLjA5NDgyIDAuMjMwMzQsMC4wODIzNCAwLjM4Mjk3LDAuNjU4NDRjMC4xNTI2MywwLjU3NjEgMC4yMzUyOCwxLjc4OTUxIC0wLjE4MTQxLDMuNjg4NTlsLTAuMDEzNDQsMC4wNDAzMWwtMjIuMzA2MjUsMTE2LjI0NzgxYy0wLjA1MjgsMC4xMTcwMyAtMC41MTc2MywxLjE5MjM5IC0xLjU3ODksMi4wNTU5NGMtMS4wODI2NiwwLjg4MDk1IC0yLjI4NjgsMS41Njg2MSAtNS40ODI1LDAuMjI4NDRsLTMzLjM4NTQ3LC0yNi4wMzUxNmwtMC45NDA2MiwtMC43MzkwNmwtMC4wMjAxNSwwLjAyMDE1bC05Ljk4NDA2LC03LjQ5MTRsNTYuMTA4MjgsLTY2LjAxMTcyYzAuODgwNzUsLTEuMDMzNTQgMS4wNzExNywtMi40ODg0NSAwLjQ4NjA2LC0zLjcxMzg0Yy0wLjU4NTExLC0xLjIyNTM5IC0xLjgzNjI2LC0xLjk5MTk3IC0zLjE5MzcyLC0xLjk1Njc5Yy0wLjY0OTMsMC4wMTY4NyAtMS4yODA1NywwLjIxNzE5IC0xLjgyMDc4LDAuNTc3ODFsLTgxLjE4OTM3LDU0LjEyNjI1bC0zMC42NzEwOSwtMTAuNTAxNDFjMCwwIC0zLjA0NTYzLC0xLjY5NDgzIC0zLjE5MTQxLC0yLjg3NTYyYy0wLjAwODA4LC0wLjA2NTQzIC0wLjA0NDA1LC0wLjAwNjIgMC4xMTQyMiwtMC4yNDE4OGMwLjE1ODI2LC0wLjIzNTYxIDAuNTU2MDgsLTAuNjMzNDIgMS4wNTQ4NCwtMC45ODA5NGMwLjk5NzUyLC0wLjY5NTAzIDIuMTM2NTYsLTEuMTE1MzEgMi4xMzY1NiwtMS4xMTUzMWwwLjExNDIyLC0wLjA0MDMxbDAuMTE0MjIsLTAuMDQ3MDNjMCwwIDMxLjM0MzczLC0xMy40NDU5NyA2My4yMzY4NywtMjcuMTEwMTZjMTUuOTQ2NTcsLTYuODMyMDkgMzIuMDMxNDMsLTEzLjcxNzM5IDQ0LjQwNDIyLC0xOS4wMDczNGMxMi4zNjk2MSwtNS4yODg2IDIxLjMwNzU3LC05LjA5NTI5IDIyLjA2NDM4LC05LjM5OTUzYzAuODYxNiwtMC4zNDUwMiAxLjcxODE1LC0wLjQ4NTgzIDIuMzk4NiwtMC41MTczNHpNMTE1LjYyOTY5LDY0LjY0NzgxbC00Mi41NDk4NCw1MC4wNjE0bC0wLjAyMDE2LDAuMDIwMTVjLTAuMDY2NDMsMC4wNzk5OCAtMC4xMjkyLDAuMTYyOTMgLTAuMTg4MTIsMC4yNDg2Yy0wLjA2NzUsMC4wOTMxIC0wLjEzMDI5LDAuMTg5NTIgLTAuMTg4MTMsMC4yODg5Yy0wLjIzOTA2LDAuNDA1NzQgLTAuMzkyMjcsMC44NTYyNCAtMC40NTAxNSwxLjMyMzZjLTAuMDAwMDMsMC4wMDg5NiAtMC4wMDAwMywwLjAxNzkyIDAsMC4wMjY4OGwtNS41NDI5NywyNC45MjY1NmMtMC4wOTIxNSwtMC4yNjkzMSAtMC4xNTY2OCwtMC4zNjc4NCAtMC4yNTUzMSwtMC42ODUzMXYtMC4wMDY3MmMtMS43NjA1NSwtNS42NTY5NSAtOS43ODcyNywtMzIuNDM2NDkgLTEwLjg5NzgxLC0zNi4xNDAxNXpNNzcuODgzNzUsMTIyLjkxMjgxbDcuNjQ1OTQsNS43Mzc4MWwtMTEuMjMzNzUsMTAuNDE0MDZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" width="25" height="25"/>
     </a>
     </div>
     </div>
<p className="head-contact">Контакты</p>
{contact.map((element=>{
    const{id,head,email,tel,showMore}=element;
    return<div key={id}>
       
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
      
        <input id='name-contact' placeholder="Ваше имя" type="text" required />
      
        <input id='name-contact' placeholder="Введите ваш Email" type="email"  name="email" required/>
      
        <textarea id='name-contact' placeholder="Напишите сообщение..." type="text" name="message" required></textarea>
      
        <button className='but-contact' name="submit" type="submit" id="contact-submit"> Отправить </button>
      </form>
  </div>

 </div>
        
    )
}
export default Contact;