var storage = firebase.storage();
var storageRef = storage.ref();

$('#List').find('tbody').html('');

var i = 0;

storageRef.child('sorts/').listAll().then(function(res) {
    res.items.forEach(function(ref) {
        console.log(ref.toString());
        i++;

        displayFile(i, ref);
    });
});

function displayFile(i, ref) {
    ref.getDownloadURL().then(function(url) {
        let new_html = '';

        new_html += '<tr>';
        new_html += '<td>';
        new_html += i;
        new_html += '</td>';
        new_html += '<td>';
        new_html += '<img src="' + url + '" width="100px" style="float:right">';
        new_html += '</td>';
        new_html += '</tr>';

        $('#List').find('tbody').append(new_html);
    });
}