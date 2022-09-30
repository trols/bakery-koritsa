import React from "react";
import Count from './Count'
function Products({anyWordProducts}){
    return(
        <div className='products'>
            {anyWordProducts.map((element=>{
                const{id,name,price,image}=element;

                
            
                return(
                    
                    <div key={id} className='product-card'>
<div >

<img src={image} width="100%" height="auto" alt="pictures"/>
                    <h3>{name}</h3>
                    
                    <div className="sum">
                    <div><Count/></div>
                     <img className="basket" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNjdlMjIiPjxwYXRoIGQ9Ik02OC44LDEwLjMyYy0wLjkxMzc1LDAgLTEuNzg3MTksMC4zNjI4MSAtMi40MzIxOSwxLjAwNzgxbC01Ljg3MjE5LDUuODcyMTloLTI4LjIwNTMxYy02LjM4MjgxLDAgLTExLjk3MjgxLDQuNDM0MzggLTEzLjQxMDYzLDEwLjY2OTM4bC03Ljg2MDk0LDM0LjA1MDYyaC00LjEzODc1Yy0zLjc4OTM3LDAgLTYuODgsMy4wOTA2MyAtNi44OCw2Ljg4djEwLjMyYzAsMy43ODkzOCAzLjA5MDYzLDYuODggNi44OCw2Ljg4aDE1OC4yNGMzLjc4OTM4LDAgNi44OCwtMy4wOTA2MiA2Ljg4LC02Ljg4di0xMC4zMmMwLC0zLjc4OTM3IC0zLjA5MDYyLC02Ljg4IC02Ljg4LC02Ljg4aC00LjEzODc1bC03Ljg2MDk0LC0zNC4wNTA2MmMtMS40Mzc4MSwtNi4yMzUgLTcuMDI3ODEsLTEwLjY2OTM4IC0xMy40MTA2MywtMTAuNjY5MzhoLTI4LjIwNTMxbC01Ljg3MjE5LC01Ljg3MjE5Yy0wLjY0NSwtMC42NDUgLTEuNTE4NDQsLTEuMDA3ODEgLTIuNDMyMTksLTEuMDA3ODF6TTcwLjIyNDM4LDE3LjJoMzEuNTUxMjVsNS44NzIxOSw1Ljg3MjE5YzAuNjQ1LDAuNjQ1IDEuNTE4NDQsMS4wMDc4MSAyLjQzMjE5LDEuMDA3ODFoMjkuNjI5NjljMy4yMjUsMCA1Ljk3OTY5LDIuMTkwMzEgNi43MDUzMSw1LjMzNDY5bDcuNDk4MTMsMzIuNTA1MzFoLTEzNS44MjYyNWw3LjQ5ODEyLC0zMi41MDUzMWMwLjcyNTYzLC0zLjEzMDk0IDMuNDgwMzEsLTUuMzM0NjkgNi43MDUzMSwtNS4zMzQ2OWgyOS42Mjk2OWMwLjkxMzc1LDAgMS43ODcxOSwtMC4zNjI4MSAyLjQzMjE5LC0xLjAwNzgxek05LjUyNzE5LDkyLjg4bDE3LjQwMTU2LDYwLjM0NzgxYzAuODMzMTMsMi45MDI1IDMuOTc3NSw1LjAxMjE5IDcuNDcxMjUsNS4wMTIxOWgxMDMuMmMzLjQ5Mzc1LDAgNi42MzgxMywtMi4xMDk2OSA3LjQ3MTI1LC01LjAxMjE5bDE3LjQwMTU2LC02MC4zNDc4MXpNNTguNDgsMTAzLjJjMS44OTQ2OSwwIDMuNDQsMS41NDUzMSAzLjQ0LDMuNDR2MzcuODRjMCwxLjg5NDY5IC0xLjU0NTMxLDMuNDQgLTMuNDQsMy40NGMtMS44OTQ2OSwwIC0zLjQ0LC0xLjU0NTMxIC0zLjQ0LC0zLjQ0di0zNy44NGMwLC0xLjg5NDY5IDEuNTQ1MzEsLTMuNDQgMy40NCwtMy40NHpNODYsMTAzLjJjMS44OTQ2OSwwIDMuNDQsMS41NDUzMSAzLjQ0LDMuNDR2MzcuODRjMCwxLjg5NDY5IC0xLjU0NTMxLDMuNDQgLTMuNDQsMy40NGMtMS44OTQ2OSwwIC0zLjQ0LC0xLjU0NTMxIC0zLjQ0LC0zLjQ0di0zNy44NGMwLC0xLjg5NDY5IDEuNTQ1MzEsLTMuNDQgMy40NCwtMy40NHpNMTEzLjUyLDEwMy4yYzEuODk0NjksMCAzLjQ0LDEuNTQ1MzEgMy40NCwzLjQ0djM3Ljg0YzAsMS44OTQ2OSAtMS41NDUzMSwzLjQ0IC0zLjQ0LDMuNDRjLTEuODk0NjksMCAtMy40NCwtMS41NDUzMSAtMy40NCwtMy40NHYtMzcuODRjMCwtMS44OTQ2OSAxLjU0NTMxLC0zLjQ0IDMuNDQsLTMuNDR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" width='24px'/>
                    </div>

                    <h4>{price}</h4>
                     </div>
                        </div>
                    
                )
            }))}
        </div>
    )
}
export default Products;