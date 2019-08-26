// function that builds a grid in the "container"
const bit_value = 50;
function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            $("#grid-container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(900/x);
    $(".grid").height(900/x);
};

$(document).ready(function() {
    createGrid(bit_value);
    $(".grid").hover(function() {
        $(this).css("background-color", "black");
    });
});
