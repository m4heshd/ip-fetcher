addEventListener('DOMContentLoaded', (event) => {
    let dataNode = document.querySelector('.data');

    fetch('https://freeipapi.com/api/json')
        .then((res) => {
            res
                .json()
                .then(data => {
                    [
                        data.ipAddress,
                        data.cityName,
                        data.countryName,
                    ]
                        .forEach((prop) => {
                            let propNode = document.createElement('span');
                            propNode.innerHTML = prop;
                            dataNode.appendChild(propNode);
                        });
                });
        })
        .catch((error) => {
            console.log(error);
        });
});
