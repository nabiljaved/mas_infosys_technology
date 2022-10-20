function cookiesPolicyPrompt(){
    let webCookie = Cookies.get("masinfosys");
    if(webCookie != 'yes'){
        document.getElementById("alertCookiePolicy").style.display = 'block'
    }
    document.getElementById("btnAcceptCookiePolicy").addEventListener('click', function(){
      Cookies.set('masinfosys', 'yes', { expires: 30 });
      document.getElementById("alertCookiePolicy").style.display = 'none'
    })
    document.getElementById("btnDeclineCookiePolicy").addEventListener('click', function(){
      document.getElementById("alertCookiePolicy").style.display = 'none'
      
    })
    Cookies.remove('googtrans')
  }
 
  
cookiesPolicyPrompt()



