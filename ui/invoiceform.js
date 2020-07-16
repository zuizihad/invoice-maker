$(document).ready(function() {
    // Initiating Materialize Features
    lazyLoad();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.collapsible').collapsible();

    $(".tab").on('click', function(e) {
        $('#contents').hide();
        lazyLoad();
    });

    /*
     * Find the closest html table
     * Get the content of first tr of the tbody
     * addTBody with the reference of the tbody and first tr
     */
    $(".tblButtonAdder").on('click', function(e) {
        var closestTableTBody = $("#exp0" + this.id + "TBody");
        var closestTableTBodyBaseContent = closestTableTBody.find('tr:first').html();
        var tBodyContent = "<tr> " + closestTableTBodyBaseContent + " </tr>";
        var requestedTableLength = (closestTableTBody.html().match(/<tr>/g) || []).length;

        addTBody(closestTableTBody, tBodyContent, requestedTableLength);
    });



    /* Tables to JSON */
    $("#exp01Form").submit(function(e) {
        e.preventDefault();
        var data = Array();

        $("#exp01Table tbody tr").each(function(i, v) {
            data[i] = Array();
            $(this).children('td').each(function(ii, vv) {
                data[i][ii] = $(this).text();
            });
        });
        // Array of arrays to Array of objects
        var objs = data.map(function(x) {
            return {
                distance: x[0],
                averageTime: x[1],
                averageTimeSquare: x[2],
                result: x[3]
            };
        });
        showSweetAlert(objs);
    });

    $("#exp02Form").submit(function(e) {
        e.preventDefault();
        var data = Array();

        $("#exp02Table tbody tr").each(function(i, v) {
            data[i] = Array();
            $(this).children('td').each(function(ii, vv) {
                if (ii == 0) {
                    var valueOfSelectedAirPressure = $("input[name='group" + (i + 1) + "']:checked").val();
                    data[i][ii] = valueOfSelectedAirPressure;
                } else {
                    data[i][ii] = $(this).text();
                }
            });
        });
        var objs = data.map(function(x) {
            return {
                pressure: x[0],
                aCM: x[1],
                bCM: x[2],
                cCM: x[3],
                length: x[4],
                difference: x[5],
                totalPressure: x[6],
                result: x[7]
            };
        });
        showSweetAlert(objs);
    });

});

function lazyLoad() {
    $('.progress').show(function(e) {
        $('#contents').hide();
    }).delay(1500).fadeOut(function(ex) {
        $('#contents').fadeIn();
    });
}

function addTBody(tbodyID, tBodyContent, tBodyLength) {
    var tbody = '';

    if (tBodyContent.includes('type="radio"')) {
        tBodyContent = tBodyContent.replace(/name="group1"/g, 'name="group' + (tBodyLength + 1) + '"');
        console.log(tBodyContent);
    } else {
        tBodyContent = tBodyContent.replace(/[0-9]/g, '');
        console.log(tBodyContent);
    }

    tbody += tBodyContent;
    tbodyID.append(tbody);
}

function showSweetAlert(data) {
    Swal.fire({
        title: 'JSON api',
        html: '<pre style="text-align: left;"><code>' +
            JSON.stringify(data, undefined, 2) +
            '</code></pre>',
        type: 'success',
        confirmButtonText: 'Sudo'
    });
}