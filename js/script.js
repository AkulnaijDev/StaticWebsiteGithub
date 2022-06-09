$(document).ready(function () {


    // $( "#buttonTestApi" ).on( "click", function() {
    //     console.log( "ciao" );
    //   });

    var url = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=9'
    $('#buttonTestApi').click(function () {
        $.getJSON(url, function (data) {
            $('#content').empty();
            $.each(data.items, function (entryIndex, entry) {
                var html = '<div class="result">';
                html += '<h3>' + entry.id + '</h3>';
                html += '<div class="title">' + entry.volumeInfo.title + '</div>';
                html += '<div class="author">' + entry.volumeInfo.authors + '</div>';
                $('#content').append(html);
            });
        });
        return false;
    });

});