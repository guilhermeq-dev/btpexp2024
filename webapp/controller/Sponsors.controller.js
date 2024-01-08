sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/lab2dev/productlist/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models) {
        "use strict";

        return Controller.extend("com.lab2dev.productlist.controller.Sponsors", {
            onInit: function () {

                const sponsors = models.sponsors();
                const highlights = sponsors.slice(0,10);
                
                const oModel = new JSONModel(highlights);
                this.getView().setModel(oModel, "aSponsors");

            },
    
        });
    });