import React from "react";
function Buttons({filteredProd}){
    return(
        <div className="sixbuttons">
<button className="everybutton one" onClick={()=>filteredProd("white")}>Пшеничный хлеб</button>
<button className="everybutton two" onClick={()=>filteredProd("black")}>Ржаной хлеб</button>
<button className="everybutton three" onClick={()=>filteredProd("bake")}>Выпечка</button>
<button className="everybutton four" onClick={()=>filteredProd("cake")}>Пирожные</button>
<button className="everybutton five" onClick={()=>filteredProd("cookie")}>Печенье</button>
<button className="everybutton six" onClick={()=>filteredProd("drink")}>Напитки</button>

</div>
    )
}
export default Buttons;