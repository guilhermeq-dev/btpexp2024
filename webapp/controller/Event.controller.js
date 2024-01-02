sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/lab2dev/productlist/model/models",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models, MessageToast) {
        "use strict";

        return Controller.extend("com.lab2dev.productlist.controller.Event", {
            onInit: function () {
            
            const sponsors = models.sponsors();
            const highlights = sponsors.slice(0,4);
            
            const oModel = new JSONModel(highlights);
            this.getView().setModel(oModel, "aSponsors");

            const oDataModel = new JSONModel("/model/infos.json");
            this.getView().setModel(oDataModel, "panelInfos");

          },
            openEditModal: function () {
                if (!this.dialog) {
                  this.dialog = sap.ui.xmlfragment(
                    "com.lab2dev.productlist.view.fragments.Dialog",
                    this
                  );
                  this.getView().addDependent(this.dialog);
                }

                const currentData = this.getView().getModel("panelInfos").getData();

                const oEditModel = new JSONModel(currentData);
                
                this.getView().setModel(oEditModel, "editData");

                this.dialog.open();
          },
            onEditData: function () {
                const editData = this.getView().getModel("editData").getData();
                const { title, subtitle, objective, date, time, location } = editData;

                if (!title || !subtitle || !objective || !date || !time || !location) {

                  return MessageToast.show("Preencha todos os campos obrigatórios!")

              } else {

                const aInfos = 
                  {
                    ...editData
                  }
                ;
                debugger
                this.getView().getModel("panelInfos").setData(aInfos);
                
                this.dialog.close();

              }
          },
            onCloseEdit: function () {

              this.dialog.close();

          },
            onPressShowAll: function () {

              const sponsors = models.sponsors();
              this.getView().getModel("aSponsors").setData(sponsors);
            
          },
            onNavTo: function () {
                //Acesso ao Component
                const oComponent = this.getOwnerComponent()

                //Acesso ao Router
                const oRouter = oComponent.getRouter();

                //Navegação para a rota RouteDetail
                oRouter.navTo("VisitorGuide");
          },
        });
    });