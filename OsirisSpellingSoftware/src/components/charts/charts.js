'use strict';
import { colors, colorsBW } from "/src/components/charts/colors.js";
export {showCharts}



function showCharts(data){
   

    $(this).hide()
    $(".chart").hide();
    $("#locutionChart").show();

    // Obtener los elementos canvas y los contextos
    let ctxLocution = $("#locutionChart");
    let ctxSpellingGroups = $("#spellingGroupsChart");
    let ctxMdc = $("#mdcChart");
    let ctxSigns = $("#signsChart");
    let ctxDisposition = $("#dispositionChart");
    let ctxLength = $("#lengthChart");

    let ctxBooks = $("#booksChart");
    let ctxSpells = $("#spellsChart");

    let ctxDocuments = $("#documentsChart");
    let ctxTypes = $("#typesChart");
    let ctxPositions = $("#positionsChart");

    let ctxLocations = $("#locationsChart");
    let ctxTime = $("#timeChart");


    //SET VALUES
    // locution
    let locutionKeys = [];
    let locutionData = [];
    for (let property in data.spelling.is_locution) {
        locutionKeys.push(property+ `: ${data.spelling.is_locution[property]}`);
        locutionData.push(data.spelling.is_locution[property])
    }

    let locutionChartData = {

        labels: locutionKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: locutionData,
                borderWidth: 0,
            },
        ],
    };
     // spellingGroups
    let spellingGroupsKeys = [];
    let spellingGroupsData = [];
    for (let property in data.spelling.spelling_group) {
        spellingGroupsKeys.push(property+ `: ${data.spelling.spelling_group[property]}`);
        spellingGroupsData.push(data.spelling.spelling_group[property])
    }
    let spellingGroupsChartData = {
        labels: spellingGroupsKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: spellingGroupsData,
                borderWidth: 0,
            },
        ],
    };
    // mdcGroups
    let mdcKeys = [];
    let mdcData = [];
    for (let property in data.spelling.MdC) {
        mdcKeys.push(property+ `: ${data.spelling.MdC[property]}`);
        mdcData.push(data.spelling.MdC[property])
    }
    let mdcChartData = {
        labels: mdcKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: mdcData,
                borderWidth: 0,
            },
        ],
    };
    // signs
    let signsKeys = [];
    let signsData = [];
    for (let property in data.spelling.signs) {
        signsKeys.push(property+ `: ${data.spelling.signs[property]}`);
        signsData.push(data.spelling.signs[property])
    }
    let signsChartData = {
        labels: signsKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: signsData,
                borderWidth: 0,
            },
        ],
    };
    // disposition
    let dispositionKeys = [];
    let dispositionData = [];
    for (let property in data.spelling.disposition) {
        dispositionKeys.push(property+ `: ${data.spelling.disposition[property]}`);
        dispositionData.push(data.spelling.disposition[property])
    }
    let dispositionChartData = {
        labels: dispositionKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: dispositionData,
                borderWidth: 0,
            },
        ],
    };
    // length
    let lengthKeys = [];
    let lengthData = [];
    for (let property in data.spelling.length) {
        lengthKeys.push(property+ ` signs: ${data.spelling.length[property]}`);
        lengthData.push(data.spelling.length[property])
    }
    let lengthChartData = {
        labels: lengthKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: lengthData,
                borderWidth: 0,
            },
        ],
    };
    // books
    let booksKeys = [];
    let booksData = [];
    for (let property in data.spell.book) {
        booksKeys.push(property+ `: ${data.spell.book[property]}`);
        booksData.push(data.spell.book[property])
    }
    let booksChartData = {
        labels: booksKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: booksData,
                borderWidth: 0,
            },
        ],
    };

    // spells
    
    let spellsKeys = [];
    let spellsData = [];
    for (let property in data.spell.spell) {
        spellsKeys.push(property+ `: ${data.spell.spell[property]}`);
        spellsData.push(data.spell.spell[property])
    }
    let spellsChartData = {
        labels: spellsKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: spellsData,
                borderWidth: 0,
            },
        ],
    };
           
    // documents
    let documentsKeys = [];
    let documentsData = [];
    for (let property in data.document.document) {
        documentsKeys.push(property+ `: ${data.document.document[property]}`);
        documentsData.push(data.document.document[property])
    }
    let documentsChartData = {
        labels: documentsKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: documentsData,
                borderWidth: 0,
            },
        ],
    };
    // types
    let typesKeys = [];
    let typesData = [];
    for (let property in data.document.type) {
        typesKeys.push(property+ `: ${data.document.type[property]}`);
        typesData.push(data.document.type[property])
    }
    let typesChartData = {
        labels: typesKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: typesData,
                borderWidth: 0,
            },
        ],
    };

    // positions
    let positionsKeys = [];
    let positionsData = [];
    for (let property in data.document.position) {
        positionsKeys.push(property+ `: ${data.document.position[property]}`);
        positionsData.push(data.document.position[property])
    }
    let positionsChartData = {
        labels: positionsKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: positionsData,
                borderWidth: 0,
            },
        ],
    };
          
    // locations
    let locationsKeys = [];
    let locationsData = [];
    for (let property in data.context.location) {
        locationsKeys.push(property+ `: ${data.context.location[property]}`);
        locationsData.push(data.context.location[property])
    }
    let locationsChartData = {
        labels: locationsKeys,
        datasets: [
            {
                label: "Number of coincidences",
                backgroundColor: colors,
                data: locationsData,
                borderWidth: 0,
            },
        ],
    };

    // time
    let era = [data.context.time.I_IP.num, data.context.time.Middle_Kingdom.num, data.context.time.II_IP.num];
    let dynasty = [data.context.time.Middle_Kingdom.XI.num, data.context.time.Middle_Kingdom.XII.num, data.context.time.Middle_Kingdom.XII.num];
    let kingdom = [
        data.context.time.Middle_Kingdom.XI["Mentuhotep-II"],
        data.context.time.Middle_Kingdom.XI["Mentuhotep-III"],
        data.context.time.Middle_Kingdom.XII["Amenemhat-I"],
        data.context.time.Middle_Kingdom.XII["Senusret-I"],
        data.context.time.Middle_Kingdom.XII["Amenemhat-II"],
        data.context.time.Middle_Kingdom.XII["Senusret-II"],
        data.context.time.Middle_Kingdom.XII["Senusret-III"],
        data.context.time.Middle_Kingdom.XII["Amenemhat-III"],
        data.context.time.II_IP.XIII.Sewahenre
];

dynasty.unshift([0],[0],[0],[0],[0],[0],[0],[0],[0]);
era.unshift([0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]);

let kingdomKeys = [

    `Mentuhotep-II: ${kingdom[0]}`,
    `Mentuhotep-III: ${kingdom[1]}`,
    `Amenemhat-I: ${kingdom[2]}`,
    `Senusret-I: ${kingdom[3]}`,
    `Amenemhat-II: ${kingdom[4]}`,
    `Senusret-II: ${kingdom[5]}`,
    `Senusret-III: ${kingdom[6]}`,
    `Amenemhat-III: ${kingdom[7]}`,
    `Sewahenre: ${kingdom[8]}`,
    `XI: ${dynasty[9]}`,
    `XII: ${dynasty[10]}`,
    `XIII: ${dynasty[11]}`,
    `I I. P.: ${era[12]}`,
    `Middle Kingdom: ${era[13]}`,
    `II I. P.: ${era[14]}`,
];





    // OPTIONS
    let optionsBar = {
        indexAxis: 'x',
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
            title: {
                display: true,
                text: 'god - wsir NN pn/tn'
            },
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return null;
                    }
                }
            }
        }
    };
    let optionsHorizontalBar = {
        indexAxis: 'y',
        responsive: false,
        maintainAspectRatio:true,
        plugins: {
            title: {
                display: true,
                text: 'X'
            },
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return null;
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 5 // font size y
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 5 // font size x
                    }
                }
            }
        }
    };

    let optionsPie = {
        responsive: true,
        // maintainAspectRatio:false,
        plugins: {
            title: {
                display: true,
                text: ''
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return null;
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    drawTicks: false,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    drawTicks: false,
                    drawBorder: false
                }
            }
        }
    };





    //CREATE CHARTS
    // locution
    let locutionChart = new Chart(ctxLocution, {
        type: "bar",
        data: locutionChartData,
        options: optionsBar
    });
    locutionChart.config.options.plugins.title.text = "god - wsir NN pn/tn"
    
    // spellingGroups
    let spellingGroupsChart = new Chart(ctxSpellingGroups, {
        type: "bar",
        data: spellingGroupsChartData,
        options: optionsBar
    });
    
        
    // mdc
    let mdcChart = new Chart(ctxMdc, {
        type: "bar",
        data: mdcChartData,
        options: optionsBar
    });
    
    // signs
    let signsChart = new Chart(ctxSigns, {
        type: "bar",
        data: signsChartData,
        options: optionsBar
    });
    // disposition
    let dispositionChart = new Chart(ctxDisposition, {
        type: "bar",
        data: dispositionChartData,
        options: optionsBar
    });
    
    // length
    let lengthChart = new Chart(ctxLength, {
        type: "bar",
        data: lengthChartData,
        options: optionsBar
    });
    
    // books
    let booksChart = new Chart(ctxBooks, {
        type: "bar",
        data: booksChartData,
        options: optionsBar
    });
    
    // spells
    let spellsChart = new Chart(ctxSpells, {
        type: "bar",
        data: spellsChartData,
        options: optionsHorizontalBar
    });

    // documents
    let documentsChart = new Chart(ctxDocuments, {
        type: "bar",
        data: documentsChartData,
        options: optionsHorizontalBar
    });
    // types
    let typesChart = new Chart(ctxTypes, {
        type: "bar",
        data: typesChartData,
        options: optionsBar
    });
    // positions
    let positionsChart = new Chart(ctxPositions, {
        type: "bar",
        data: positionsChartData,
        options: optionsBar
    });    
    // locations
    let locationsChart = new Chart(ctxLocations, {
        type: "bar",
        data: locationsChartData,
        options: optionsBar
    });    
    // time

    
  

    let timeChartData = {
        labels: kingdomKeys,
        datasets: [
            {
                label: "Era",
                backgroundColor: colors,
                data: era
            },
            {
                label: "Dynasty",
                backgroundColor: colors,
                data: dynasty
            },
            {
                label: "Kingdom",
                backgroundColor: colors,
                data: kingdom
            }
        ],
        
    };
    
    let timeChart = new Chart(ctxTime, {
        type: "doughnut",
        data: timeChartData,
        options: {
            responsive: true,
            // maintainAspectRatio:false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return null;
                        }
                    }
                }
            }
        }
    });
    

    let selected = locutionChart
    let selectedTitle = "god - wsir NN pn/tn"

    //BUTTONS TOGGLE
    // Agregar evento al botón para cambiar los datos
    $("#locution-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#locutionChart").show();
        selected = locutionChart
        selectedTitle = "god - wsir NN pn/tn"
        locutionChart.config.options.plugins.title.text = selectedTitle
        locutionChart.update();
        changeChartType();
        changeChartType();

    });
    $("#spelling-groups-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#spellingGroupsChart").show();
        selected = spellingGroupsChart
        selectedTitle = "spelling groups"
        spellingGroupsChart.config.options.plugins.title.text = selectedTitle
        spellingGroupsChart.update();
        changeChartType();
        changeChartType();

    });
    $("#mdc-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#mdcChart").show();
        selected = mdcChart
        selectedTitle = "MdC"
        mdcChart.config.options.plugins.title.text = selectedTitle
        mdcChart.update();
        changeChartType();
        changeChartType();

    });
    $("#signs-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", true);
        $("#signsChart").show();
        selected = signsChart
        selectedTitle = "signs"
        signsChart.config.options.plugins.title.text = selectedTitle
        signsChart.update();
        changeChartType();
        changeChartType();

    });
    $("#disposition-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#dispositionChart").show();
        selected = dispositionChart
        selectedTitle = "disposition"
        dispositionChart.config.options.plugins.title.text = selectedTitle
        dispositionChart.update();
        changeChartType();
        changeChartType();

    });
    $("#length-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#lengthChart").show();
        selected = lengthChart
        selectedTitle = "number of signs"
        lengthChart.config.options.plugins.title.text = selectedTitle
        lengthChart.update();
        changeChartType();
        changeChartType();
    });
    $("#books-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#booksChart").show();
        selected = booksChart
        selectedTitle = "books"
        booksChart.config.options.plugins.title.text = selectedTitle
        booksChart.update();
        changeChartType();
        changeChartType();
    });
    
    $("#spells-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", true);
        $("#spellsChart").show();
        selected = spellsChart
        selectedTitle = "spells"
        spellsChart.config.options.plugins.title.text = selectedTitle
        spellsChart.update();
        changeChartType();
        changeChartType();

    });
    $("#documents-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#documentsChart").show();
        selected = documentsChart
        selectedTitle = "documents"
        documentsChart.config.options.plugins.title.text = selectedTitle
        documentsChart.update();
        changeChartType();
        changeChartType();

    });
    $("#types-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#typesChart").show();
        selected = typesChart
        selectedTitle = "types"
        typesChart.config.options.plugins.title.text = selectedTitle
        typesChart.update();
        changeChartType();
        changeChartType();

    });
    $("#positions-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#positionsChart").show();
        selected = positionsChart
        selectedTitle = "positions"
        positionsChart.config.options.plugins.title.text = selectedTitle
        positionsChart.update();
        changeChartType();
        changeChartType();

    });
    $("#locations-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", false);
        $("#locationsChart").show();
        selected = locationsChart
        selectedTitle = "locations"
        locationsChart.config.options.plugins.title.text = selectedTitle
        locationsChart.update();
        changeChartType();
        changeChartType();

    });
    $("#time-change").on("click", function () {
        $(".chart").hide();
        $("#changeChartType").prop("disabled", true);
        $("#timeChart").show();
        changeChartType();
        changeChartType();

    });
    
    // Agregar evento al botón para cambiar el tipo de gráfica
    $("#changeChartType").on("click", changeChartType);
    function changeChartType () {
        if (selected.config.type === "bar") {
            selected.config.type = "pie";
            if (selected !== spellsChart || selected !== documentsChart){
            selected.config.options = optionsPie;
            selected.config.options.plugins.title.text = selectedTitle
        }
        } else {
            selected.config.type = "bar";
            if (selected === spellsChart || selected === documentsChart) {
                selected.config.options = optionsHorizontalBar;
                $(".chart").removeClass("chart-limit");
            } else {
                selected.config.options = optionsBar;
                $(".chart").addClass("chart-limit");
            }
        }
        selected.canvas.parentNode.style.width = '100%';
        selected.canvas.parentNode.style.height = '100%';
        selected.canvas.width = selected.canvas.parentNode.offsetWidth;
        selected.canvas.height = selected.canvas.parentNode.offsetHeight;

        selected.update();
    }

    $("#changeColorType").on("click", function () {
        if (colors === selected.config.data.datasets[0].backgroundColor) {
          selected.config.data.datasets[0].backgroundColor = colorsBW;
          timeChart.data.datasets[0].backgroundColor=colorsBW;
          timeChart.data.datasets[1].backgroundColor=colorsBW;
          timeChart.data.datasets[2].backgroundColor=colorsBW;
        } else {
          selected.config.data.datasets[0].backgroundColor = colors;
          timeChart.data.datasets[0].backgroundColor=colors;
          timeChart.data.datasets[1].backgroundColor=colors;
          timeChart.data.datasets[2].backgroundColor=colors;
        }
        selected.update();
        timeChart.update();
      });

      
      $('#download').click(function() {
        $('canvas:visible').each(function(index) {
            var canvas = this;
            var url = canvas.toDataURL("image/png");
            var tempLink = $('<a>');
            tempLink.attr('href', url);
            tempLink.attr('download', 'canvas_' + (index + 1) + '.png');
            tempLink[0].click();
        });
    });

    $(window).on('resize', function() {
        changeChartType();
        changeChartType();
    });

};

