$(document).ready(function () {
    $('body').on('click', '#Single', function () {
        $.ajax({
            url: '/html/options.html',
            type: 'GET',
            success: function (result) {
                const temp = $("<div>").html(result);
                const specific = temp.find("#Single-page").html();
                $("body").html(specific);
            },
            error: function () {
                alert("😔 Failed to load options.html (Single)");
            }
        });
    });

    $('body').on('click', '#Multi', function () {
        $.ajax({
            url: '/html/options.html',
            type: 'GET',
            success: function (result) {
                const temp = $("<div>").html(result);
                const specific = temp.find("#Multi-page").html();
                $("body").html(specific);
            },
            error: function () {
                alert("😔 Failed to load options.html (Multi)");
            }
        });
    });

    $('body').on('click', '#SUBMIT', function () {
        $.ajax({
            url: './html/game_for_single.html',
            type: 'GET',
            success: function (result) {
                $("body").html(result);

                // ✅ Dynamically load script after inserting page
                $.getScript('./javascript/single_player_logic.js')
                    .fail(() => alert("😔 Failed to load single_player_logic.js"));
            },
            error: function () {
                alert("😔 Failed to load single player game page");
            }
        });
    });

    $('body').on('click', '#First_x, #First_o', function () {
        $.ajax({
            url: './html/game_for_multi.html',
            type: 'GET',
            success: function (result) {
                $("body").html(result);

                // ✅ Dynamically load script after inserting page
                $.getScript('./javascript/multi_player_logic.js')
                    .fail(() => alert("😔 Failed to load multi_player_logic.js"));
            },
            error: function () {
                alert("😔 Failed to load multi player game page");
            }
        });
    });
});
