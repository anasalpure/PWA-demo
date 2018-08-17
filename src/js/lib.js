
import jQuery from './jquery' ;

(function(){
    "use strict";
    const VK_SPACE = 32;
    let elms  ;
    //get all element with tabindex="0"
    elms= document.querySelectorAll( "[tabindex='0']");
    elms.forEach( element => {
        element.addEventListener ('click',ckickOnLink);
        element.addEventListener ('keydown',ckickOnLink);
       
        //add some style
        element.classList.add('focusable');


       
       let ancher= element.querySelector("a");
       if(ancher){
            // privent focus on inner anchers
            ancher.setAttribute('tabindex','-1')
            //add ARIA accessablitys to parrent of ancher
            element.setAttribute('aria-label',ancher.innerText); 
       }

            

       
    });




function ckickOnLink (event){
    // event.stopPropergation();

    // IF keyCode is defined and Not equal 32 =space putton
    if(event.keyCode!==undefined & event.keyCode!= VK_SPACE ){
       return;
    }
    event.preventDefault();

    let target= event.currentTarget;
    //console.log(target);
    let href=target.querySelector("a").getAttribute('href');
    location=href;
     

}



//navbar toggler actions
//add listener to check box in toggler
jQuery('.toggler').find('input').on('change',function(event){

    let checked=event.target.checked;
    if(checked)
        jQuery('.navbar .collapse').fadeIn();
    else
        jQuery('.navbar .collapse').fadeOut();
        
  
  });



}
)();