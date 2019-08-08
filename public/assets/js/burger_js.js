// Function for all buttons
$(function() {
    // Devoured Button
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("devour");

        // Sets devoured to true
        var newDevourStatus = {
            devoured: newDevour
        };

        // PUT request to api
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourStatus
        }).then(
            function(){
                console.log("changed devoured to", newDevour);
                // Reloads page to get updated list
                location.reload();
            }
        );
    });

    // Submit Button
    $(".add-burger").on("submit", function(event) {
        event.preventDefault();

        // Creates new burger
        var newBurger = {
            burger_name: $("#burgerAdd").val().trim(),
        };

        // POST request to api
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("new burger created");
                // Reloads page to get updated list
                location.reload();
            }
        );
    });
});