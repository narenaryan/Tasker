function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Action object for holding enumerated values
var actions = {
    1: "todo",
    2: "doing",
    3: "done",
    4: "approoved",
    5: "disapprooved"
}

// Change labels to respective code
$(".label-success").each(function() {
    action = $(this).text();
    $(this).text(actions[action]);
});

$(".dropdown-menu a").click(function() {
    spanText = $(this).text()
    spanElem = $(this).parent().parent().parent().parent().find("span.label-success");
    spanElem.text(spanText);
    assignmentID = $(spanElem).attr("assignment");
    status = $(this).attr("status");
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        type: "POST",
        url: window.location.origin + "/assign/",
        data: {
            csrfmiddlewaretoken: csrftoken,
            assignmentID: assignmentID,
            status: status
        },
        success: function(data) {
            $.notify(data.message, "info")
        }
    });

});
