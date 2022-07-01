var map = L.map('main_map').setView([4.411585, -75.265664], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//L.marker([4.411518653907084, -75.26588555333936]).addTo(map)
//L.marker([4.410415016063295, -75.26474887750399]).addTo(map)

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
})
