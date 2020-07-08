//checkk off specific todo by clciing

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    
});
//click on X to delete todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //add new todo
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + todoText +  "</li>")
    }
})


