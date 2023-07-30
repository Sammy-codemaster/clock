let yearElement = document.querySelector(".year");
let monthElement = document.querySelector(".month");
let dayElement = document.querySelector(".day");
let hourElement = document.querySelector(".hour");
let minElement = document.querySelector(".min");
let secElement = document.querySelector(".sec");




function activateTime() {
    let today=new Date();
    let year = today.getFullYear();
    let month =today.getMonth();
    let day = today.getDay();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();



    if (hour <10){
        hour="0"+hour;
    }

    if (min <10){
        min="0"+min;
    }

    if (sec <10){
        sec="0"+sec;
    }
    


    yearElement.innerHTML=year;
    monthElement.innerHTML=month;
    dayElement.innerHTML=day;
    hourElement.innerHTML=hour;
    minElement.innerHTML=min;
    secElement.innerHTML=sec;


   switch (day) {
    case  0:
        dayElement.innerHTML="sunday"
        
        break;

        case  1:
            dayElement.innerHTML="monday"
            
            break;

            case  3:
                dayElement.innerHTML="tuesday"
                
                break;

                case  4:
                    dayElement.innerHTML="thursday"
                    
                    break;

                    case  5:
                        dayElement.innerHTML="fryday"
                        
                        break;

                        case  6:
                            dayElement.innerHTML="saturday"
                            
                            break;
   
    default:
        break;
   }

   switch (month) {
    case 0:
        monthElement.innerHTML="january"
        
        break;

        case 1:
            monthElement.innerHTML="febuary"
            
            break;
            case 2:
                monthElement.innerHTML="march"
                
                break;

                case 3:
                    monthElement.innerHTML="april"
                    
                    break;

                    case 4:
                        monthElement.innerHTML="may"
                        
                        break;

                        case 5:
                            monthElement.innerHTML="june"
                            
                            break;

                            case 6:
                                monthElement.innerHTML="july"
                                
                                break;

                                case 7:
                                    monthElement.innerHTML="august"
                                    
                                    break;

                                    case 8:
                                        monthElement.innerHTML="sectember"
                                        
                                        break;

                                        case 9:
                                            monthElement.innerHTML="october"
                                            
                                            break;

                                            case 10:
                                                monthElement.innerHTML="november"
                                                
                                                break;

                                                case 11:
                                                    monthElement.innerHTML="december"
                                                    
                                                    break;
   
    default:
        break;
   }
}
setInterval(()=>{
    activateTime();
})
