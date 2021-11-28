function updatemap() {
    fetch("data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                lat = element.latitude;
                lon = element.longitude;
                cases=element.infected;
                if(cases>255)
                    {
                        color="rgb(255,0,0)";
                    }
                    else
                    {
                        color=`rgb(${cases},0,0)`;
                    }
                marker = new mapboxgl.Marker({
                    draggable: false,
                    color:color
                })
                    .setLngLat([lon, lat])
                    .addTo(map);

            });
        })
}
setInterval(updatemap,20000);