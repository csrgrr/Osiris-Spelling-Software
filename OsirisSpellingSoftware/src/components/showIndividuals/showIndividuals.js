'use strict'

const apiIndividualUrl = window.location.origin+'/api/Controller/spellingController.php';
function showData(id) {

    //loading
    $(".modal-body").html(`<img src="/src/assets/utils/spinner-table.gif" alt="loading">`);
    $.ajax({
        url: apiIndividualUrl+`?search=${id}`,
        type: 'GET',
        async: true,
        success: (spelling) => {

            //TABLE

            $(".modal-body").html("");


            let img = spelling[0].spelling.MdC.replace(/:/g, '_').replace(/\*/g, '-');
            let locution = "";
            console.log(spelling[0].spelling.is_locution)
            if(spelling[0].spelling.is_locution == 0)
                locution = "god";
            else
                locution = "wsir NN pn/tn";
            // Map position codes to position names
            const positionMap = {
                'H': 'Head',
                'F': 'Foot',
                'B': 'Back',
                'L': 'Top',
                'Fr': 'Front',
                'Bo': 'Bottom',
                'S': 'Side',
                'X': 'Others',
                'unknown': 'Fragments and unknowns'
            };

            // Get the position name based on the position code

            const position = positionMap[spelling[0].document.position] || '';

            $(".modal-body").append(`
                <br>
                <p><img width="50px" src="/src/assets/MdC/${img}.png" alt="${img}"><br><strong class="mdc-color">${spelling[0].spelling.MdC}</strong></p>
                <p><strong>Context:</strong> ${locution}</p>
                ${spelling[0].reference.vol ? `<p><strong>Vol.:</strong> ${spelling[0].reference.vol}</p>` : ''}
                ${spelling[0].reference.page ? `<p><strong>Page:</strong> ${spelling[0].reference.page}</p>` : ''}
                ${spelling[0].reference.section ? `<p><strong>Section:</strong> ${spelling[0].reference.section}</p>` : ''}
                ${spelling[0].reference.pyr_page ? `<p><strong>Pyr. page:</strong> ${spelling[0].reference.pyr_page}</p>` : ''}
                ${spelling[0].reference.pyr_sect ? `<p><strong>Pyr. sect.:</strong> ${spelling[0].reference.pyr_sect}</p>` : ''}
                <p><strong>Book:</strong> ${spelling[0].spell.book}</p>
                <p><strong>Spell:</strong> ${spelling[0].spell.spell}</p>
                <p><strong>Document:</strong> ${spelling[0].document.document}</p>
                <p><strong>Document type:</strong> ${spelling[0].document.type}</p>
                <p><strong>Position in document:</strong> ${position}</p>
                <p><strong>Time:</strong> ${spelling[0].context.time}</p>
                <p><strong>Geographical location:</strong> ${spelling[0].context.location}</p>
                <p>-----------------------</p>
                <p><i><strong>id:</strong> ${spelling[0].id}</i></p>
            `);

        },
        error: (error) => {
            $(".modal-body").html("");
            $(".modal-body").append(`<p> ERROR </p>`);
        }
    });

    $('#individualElement').modal('show');
}

