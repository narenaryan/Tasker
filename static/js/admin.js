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

$('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
});

$("#saveButton").on("click", function() {
    var studentIDs = [],
        studentNames = [];
    $("#students").find("option:selected").each(function(index) {
        studentIDs.push($(this).attr("value"));
        studentNames.push($(this).text());
    });
    // Create panel with saved task
    var spanHTML = "";
    for (var student of studentNames) {
        spanHTML += '<span class="label label-success">' + student + '</span>'
    }
    panelHTML = '<div class="col-md-4"><div class="panel panel-primary">' +
        '<div class="panel-heading">' +
        '<h3 class="panel-title">' + $("#taskName").val() + '</h3>' +
        '</div><div class="panel-body">' + $("#focusedInput").val() + '<br />' + spanHTML + '</div>' +
        '</div></div>';

    $(".attachData .row").append(panelHTML);
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        type: "POST",
        url: window.location.origin + "/task/",
        data: {
            name: $("#taskName").val(),
            description: $("#focusedInput").val(),
            csrfmiddlewaretoken: csrftoken,
            students: studentIDs
        },
        success: function(data) {
            $.notify(data.message, "info")
        }
    });
    // Reset modal
    $("#taskName").val("");
    $("#focusedInput").val("");
    $(".selectpicker").selectpicker("deselectAll")
    $("#myModal").modal("toggle");

});
