const controller = require("../controllers/vehicule.controller");
var bodyParser = require('body-parser');
const multer = require("multer");
var upload = multer({ dest: 'images/' });
module.exports = function(app) {
    app.post("/api/vehicule/createVehicule", upload.single('image'), controller.createVehicule);
    app.get("/api/vehicule/findVoitureClient/:utilisateurId", controller.findVoitureClient);
    app.get("/api/vehicule/findVoitureValide/:utilisateurId", controller.findVoitureValide);
    app.get("/api/vehicule/findVehiculeReparationPayer", controller.findVehiculeReparationPayer);
    app.get("/api/vehicule/findVoitureTerminee", controller.findVoitureTerminee);
    app.post("/api/vehicule/updateStatusVehicule/:_id", controller.updateStatusVehicule);
    app.get("/api/vehicule/findVoitureBondeSortieValider",controller.findVoitureBondeSortieValider);
    app.get("/api/vehicule/findVehiculeRecuperer/:utilisateurId",controller.findVehiculeRecuperer);
    app.post("/api/vehicule/updateStatusVehiculeRecuperer/:_id",controller.updateStatusVehiculeRecuperer);
    app.get("/api/vehicule/findHistoriqueVehicule/:utilisateurId",controller.findHistoriqueVehicule);
}