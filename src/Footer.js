import React from 'react'



function Footer(){
    

return(
    <div className="footer">
        
        <div className="down">
        <div>
            <p className="foot-logo">Корица<img src="https://img.icons8.com/color/344/wheat.png" width="40px" alt="man"/></p>
      </div>
        <div>
     <h6 id="bulka">Булочная</h6>
      </div>
        </div>

        <div>
        <div className='social-share'>
<div className="top-icon">

<a href="https://www.vk.com/share.php?url=" className="social-share-icon" target="_blank" rel="noreferrer">
<img src="https://img.icons8.com/metro/344/vk-com--v1.png" width="25px" height="25px" alt="icons"/>
</a>
<a href="https://api.whatsapp.com/" className="social-share-icon" target="_blank" rel="noreferrer">
<img src="https://img.icons8.com/ios-filled/344/telegram-app.png" width="25px" height="25px" alt="icons"/>
</a>
<a href="https://t.me/share" className="social-share-icon" target="_blank" rel="noreferrer">
<img src="https://img.icons8.com/ios-glyphs/344/whatsapp.png" width="25px" height="25px" alt="icons"/>
</a>


  </div>

     </div>
            <h5>Подписаться на рассылку</h5>
            
            <form>
             <input placeholder="Ваше имя ..." type="text"  name="username" required />
   <input  placeholder="Введите ваш E-mail" type="email" name="email" required/>
   <button className='btn-footer' name="submit" type="submit"> Отправить</button>
   <p className='right'>© 2022, Булочная «Корица». Все права защищены.</p>
</form>
</div>
            
   <div></div>
   </div>
            
            
            )
            
}
export default Footer;