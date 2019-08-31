// function that builds a grid in the "container"
const bit_value = 32;
function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            $("#grid-container").append("<div class='grid'></div>");
        };
    };;
    $(".grid").width(900/x);
    $(".grid").height(900/x)
};

function get_color() {

}

$(document).ready(function() {
    createGrid(bit_value);
    $(".grid").mousedown(function() {
        $(this).css("background-color", "black");
    });
});
