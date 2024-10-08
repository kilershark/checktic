

// MODO OSCURO
/**
 *  Light Switch @version v0.1.4
 */
card = document.getElementById("card");
(function () {
    let lightSwitch = document.getElementById('lightSwitch');
    if (!lightSwitch) {
      return;
    }
  
    /**
     * @function darkmode
     * @summary: changes the theme to 'dark mode' and save settings to local stroage.
     * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
     */
    function darkMode() {
      document.querySelectorAll('.bg-light').forEach((element) => {
        element.className = element.className.replace(/-light/g, '-dark');
      });
  
      document.querySelectorAll('.link-dark').forEach((element) => {
        element.className = element.className.replace(/link-dark/, 'text-white');
      });
  
      document.body.classList.add('bg-dark');
   
      
      document.querySelectorAll('a').forEach((element)=>{
        element.style.textcolor ="FFFF"
      })

      if (document.body.classList.contains('text-dark')) {
        document.body.classList.replace('text-dark', 'text-light');
      } else {
        document.body.classList.add('text-light');
      }
  
      // Tables
      var tables = document.querySelectorAll('table');
      for (var i = 0; i < tables.length; i++) {
        // add table-dark class to each table
        tables[i].classList.add('table-dark');
      }
  
      // set light switch input to true
      if (!lightSwitch.checked) {
        lightSwitch.checked = true;
      }
      localStorage.setItem('lightSwitch', 'dark');
    }
  
    /**
     * @function lightmode
     * @summary: changes the theme to 'light mode' and save settings to local stroage.
     */
    function lightMode() {
      document.querySelectorAll('.bg-dark').forEach((element) => {
        element.className = element.className.replace(/-dark/g, '-light');
      });
  
      document.querySelectorAll('.text-white').forEach((element) => {
        element.className = element.className.replace(/text-white/, 'link-dark');
      });
  
      document.body.classList.add('bg-light');
  
      if (document.body.classList.contains('text-light')) {
        document.body.classList.replace('text-light', 'text-dark');
      } else {
        document.body.classList.add('text-dark');
      }
  
      // Tables
      var tables = document.querySelectorAll('table');
      for (var i = 0; i < tables.length; i++) {
        if (tables[i].classList.contains('table-dark')) {
          tables[i].classList.remove('table-dark');
        }
      }
  
      if (lightSwitch.checked) {
        lightSwitch.checked = false;
      }
      localStorage.setItem('lightSwitch', 'light');
    }
  
    /**
     * @function onToggleMode
     * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
     */
    function onToggleMode() {
      if (lightSwitch.checked) {
        darkMode();
      } else {
        lightMode();
      }
    }
  
    /**
     * @function getSystemDefaultTheme
     * @summary: get system default theme by media query
     */
    function getSystemDefaultTheme() {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkThemeMq.matches) {
        return 'dark';
      }
      return 'light';
    }
  
    function setup() {
      var settings = localStorage.getItem('lightSwitch');
      if (settings == null) {
        settings = getSystemDefaultTheme();
      }
  
      if (settings == 'dark') {
        lightSwitch.checked = true;
      }
  
      lightSwitch.addEventListener('change', onToggleMode);
      onToggleMode();
    }
  
    setup();
  })();


// Scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 0.1));
    }
}


///

buttonUp = document.getElementById("button-up");
nav_Bar = document.getElementById("mainNav")


window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll> 0 || scroll > 500){
        buttonUp.style.transform = "scale(1)";
        nav_Bar.style.background = "#75a0eb"
        nav_Bar.style.transform = "0";
       
    }if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
        
    }if (scroll < 10 ) {
        nav_Bar.style.background = "transparent"
       

    } 

}
