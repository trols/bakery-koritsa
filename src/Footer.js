import React from 'react'



function Footer(){
    

return(
    <div className="footer">
        
        <div className="down">
        <div>
            <p className="foot-logo">Корица</p>
      </div>
        <div>
     <h6 id="bulka">Булочная</h6>
      </div>
        </div>

        <div>
            <h5>Подписаться на рассылку</h5>
            
            <form>
             <input placeholder="Ваше имя ..." type="text"  name="username" required />
   <input  placeholder="Введите ваш E-mail" type="email" name="email" required/>
   <button className='btn-footer' name="submit" type="submit"> Отправить</button>
</form>
            </div>
            
            
   
   <div> <p className='right'>© 2022, Булочная «Корица». Все права защищены.</p></div>
   </div>
            
            
            )
            
}
export default Footer;