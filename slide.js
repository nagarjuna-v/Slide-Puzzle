var cunt;
var time;
var moves =0;
function shuffle() {
    let array = [1,2,3,4,5,6,7,8,9];
    array.sort((a,b)=>{
        return 0.5 - Math.random()
    });

    $('#puzzle').html('');
    for (var i = 0; i < array.length; i++ ) {
        $('#puzzle').append("<div id='title"+array[i]+"' class='title'></div>");
    }
    cunt = 0;
    clearInterval(time);
    $("#timer").html('');
    time = setInterval(function() {
        cunt = cunt + 1;
        $("#timer").html(cunt);
    },1000);
   
}

$('.selector').sortable({
    connectWith: ".selector" },
   {
    update: function (event, ui) {
        count = 0;
        moves = moves + 1;
        $("#moves").html(moves);
        $("#puzzle > div").each((index, elem)=>{
            if('title'+(index+1) == elem.id){
                count = count + 1;
            }
            if( count == 9){
                clearInterval(time);
                $("#timer").html('');
                $("#moves").html('');
                alert("WOW! Completed");

            }
        });
    }
   });