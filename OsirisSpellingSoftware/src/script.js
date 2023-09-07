'use strict'

export const url = window.location.origin;
export const apiUrl = url+'/api/Controller/spellingController.php';

$(()=> {
    //NAVBAR
    $('#layout').load('layout/layout.html');
    $('#modalData').load('/src/components/showIndividuals/showIndividuals.html');

      
});
