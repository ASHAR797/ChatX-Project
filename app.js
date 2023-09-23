// show icon in sec 1
let btn_main = () =>{
    send_text()
}
let show_icon = () =>{
    let icon =  document.getElementById("icon")
    let span_send =  document.getElementById("send_span")
    icon.style.display = "block"
    icon.style.padding = "0px 1px"
    icon.style.fontSize = "20px"
    icon.style.borderRadius = "50%"
    span_send.style.display = "none"
    input.setAttribute("placeholder","Type a Message")

}
// send text in sec two
let send_text = () =>{
    let input = document.getElementById("input")
    let second_div = document.getElementsByClassName("friend")[0]
    var new_div = document.createElement("span")
    if(input.value == ""){
        input.setAttribute("placeholder","Type some text")
    }
    else{
        second_div.append(new_div)
        new_div.addEventListener("click",function(){
        setTimeout(function(){
            new_div.style.display = "none"
            new_div.style.transition = "3s ease all" 
        },1000)
        })
        setTimeout(function(){

            new_div.style.color  = "black"
            new_div.style.padding = "10px"
            new_div.style.margin = "4.5px"
            new_div.style.borderRadius = "5.5px"
            new_div.style.width = "fit-content"
            new_div.style.backgroundColor = "#E4FFC8"
            let time = new Date()
            let realtime = time.getHours() +" : "+ time.getMinutes()
            if(time.getHours < 12)
            new_div.innerHTML = input.value +"  &nbsp  &nbsp  &nbsp "+realtime+" &nbsp PM "
        else
        new_div.innerHTML = input.value +"  &nbsp  &nbsp  &nbsp "+realtime+" &nbsp AM "
            input.value = ""
        } , 500)
        const sound = new Audio('WhatsApp Sending Message Sound Effect.mp3');
        sound.play();
    }
}
