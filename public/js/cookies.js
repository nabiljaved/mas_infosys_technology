function cookiesPolicyPrompt(){
    let webCookie = Cookies.get("masinfosys");
    if(webCookie != 'yes'){
        document.getElementById("alertCookiePolicy").style.display = 'block'
    }
    document.getElementById("btnAcceptCookiePolicy").addEventListener('click', function(){
      console.log("working")
      Cookies.set('masinfosys', 'yes', { expires: 30 });
      document.getElementById("alertCookiePolicy").style.display = 'block'
    })
    document.getElementById("btnDeclineCookiePolicy").click('click', function(){
        
    })
  }
 
  
cookiesPolicyPrompt()


//   const alertdiv = document.getElementById("alertCookiePolicy").style.display = 'block'
//   reset.addEventListener('click', function(){
//     console.log('btn: reset');
//     Cookies.remove('acceptedCookiesPolicy');
//     alertCookiePolicy.style.display = 'block'
//   })
