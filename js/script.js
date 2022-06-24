$(document).ready(function () {


    // $( "#buttonTestApi" ).on( "click", function() {
    //     console.log( "ciao" );
    //   });

    var url = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=9'

    // $('#buttonTestApi').click(function () {
    //     $.getJSON(url, function (data) {
    //         $('#content').empty();
    //         $.each(data.items, function (entryIndex, entry) {
    //             var html = '<div class="result">';
    //             html += '<h3>' + entry.id + '</h3>';
    //             html += '<div class="title">' + entry.volumeInfo.title + '</div>';
    //             html += '<div class="author">' + entry.volumeInfo.authors + '</div>';
    //             $('#content').append(html);
    //         });
    //     });
    //     return false;
    // });

    $('#buttonTestApi').click(function () {
        var obj ={
            "Id":"69420",
            "Type":"tipo londra da github"
          }
        $.ajax({
            url: 'https://6agt3j9fv8.execute-api.eu-west-2.amazonaws.com/dev/items',
            type: 'PUT',
            data: JSON.stringify(obj),
            dataType: 'json',
            xhrFields: {
                withCredentials: true
             },
            crossDomain: true,
            success: function(data) {
                console.log("Lambda calling successful: " + JSON.stringify(data));
            },
            error: function(e) {
                console.log("Lambda calling failed: " + JSON.stringify(e));
            }
            ,beforeSend: function (xhr) {
                xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            }
        });

        //GET ALL ITEMS
        // $.ajax({
        //     url: 'https://6agt3j9fv8.execute-api.eu-west-2.amazonaws.com/dev/items',
        //     type: 'GET',

        //     success: function (data) {
        //         console.log(JSON.stringify(data));
        //     },
        //     error: function (e) {
        //         console.log(data);
        //     }
        // });

        //GET SPECIFIC ITEMS
        // $.ajax({
        //     url: 'https://6agt3j9fv8.execute-api.eu-west-2.amazonaws.com/dev/items/ILNUMERODELL'IDCHEVUOI',
        //     type: 'GET',

        //     success: function (data) {
        //         console.log(JSON.stringify(data));
        //     },
        //     error: function (e) {
        //         console.log(data);
        //     }
        // });
    });
   

});