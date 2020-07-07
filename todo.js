//checkk off specific todo by clciing

$("li").click(function(){
    $(this).toggleClass("completed");
    
});
//click on Xto delete todo
$("span").click(function(event){
    console.log("clicked o the span");
    event.stopPropagation();
})