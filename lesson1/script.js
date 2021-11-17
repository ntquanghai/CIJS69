fetch("https://60ae0d5e80a61f00173324bc.mockapi.io/products")
.then((response) => {
    return response.json();
})
.then((dataList) => {
    dataList.map((arrData) => {
        document.getElementById("container--product").innerHTML += `
        <div class = "product">
        <img src = "${arrData.image}"/>
        <div class = "product--info">
            <div class = "product--name"><b>Name: </b>${arrData.name}</div>
            <div class = "product--error"><b>Error: </b>${arrData.errorDescription}</div>
            <div class = "product--sku"><b>SKU: </b>${arrData.sku}</div>
            <div class = "product--id"><b>ID: </b>${arrData.id}</div>
            <div class = "product--color"><b>Color: </b>${arrData.color}</div>
        </div>
        </div>
        `
        return arrData;
    });
})