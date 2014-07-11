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
        holder += "<td>" + "<button onclick='CarApp.deleteCar(" + c + ");'class='btn btn-danger fa fa-trash-o'></button><br/>" + "</td>";
        holder += "<td>"+"<div class='btn btn-warning' onclick='CarApp.Update.show("+c+")'>Edit</div>"
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
//Update functionality
CarApp.Update = {
    //Calls modal to show user the info
    show: function (
        /*the index of the car you're about to edit*/
        index) {
        //Bring up Modal
        var carEntry = CarApp.cars[index].model;
        var carYear = CarApp.cars[index].year;
        document.getElementById("editCarEntry").value = carEntry;
        document.getElementById("editCarYear").value = carYear;
        document.getElementById("editCarId").value = index;
        $("#updateModal").modal();
    },
    save: function () {
        $("#updateModal").modal("hide");
        var carEntry = document.getElementById("editCarEntry").value;
        var carYear = document.getElementById("editCarYear").value;
        var carIndex = document.getElementById("editCarId").value;
        CarApp.cars[carIndex].year = carYear;
        CarApp.cars[carIndex].model = carEntry;
        CarApp.drawTable();
    }
};


    

