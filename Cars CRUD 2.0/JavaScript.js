var CarApp = {};
CarApp.cars = [];

CarApp.car = function (amodel, ayear) {
    this.model = amodel;
    this.year = ayear;
    
};

CarApp.drawTable = function () {
    document.getElementById("carTable").innerHTML = "";
    var holder = "<table class='table table-hover'>";
    for (var c in CarApp.cars) {
        holder += "<tr>";
        holder += "<td>" + CarApp.cars[c].model + "</td>";
        holder += "<td>" + CarApp.cars[c]["year"] + "</td>";
        holder += "<td>" + "<button onclick='CarApp.deleteCar(" + c + ");'>X</button><br/>" + "</td>";
        holder += "</tr>";

    }
    holder += "</table>";
    document.getElementById("carTable").innerHTML = holder;
        
   
};


CarApp.addCar = function () {
    var amodel = document.getElementById('carEntry').value;
    var ayear = document.getElementById('yearEntry').value;
    var car = {
        model: amodel,
        year: ayear
    };
    CarApp.cars.push(car);
    //CarApp.cars.push(new CarApp.car(model, year));
    document.getElementById('carEntry').value = "";
    document.getElementById('yearEntry').value = "";
    CarApp.drawTable();
};

CarApp.deleteCar = function (index) {
    
    CarApp.cars.splice(index, 1);
    CarApp.drawTable();
};

