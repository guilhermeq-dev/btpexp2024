sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"
    ],
    function(BaseController, UIComponent) {
      "use strict";
  
      return BaseController.extend("com.lab2dev.productlist.controller.App", {
        onInit: function() {
        },
        onTabSelect: function(oEvent) {
          const sKey = oEvent.getParameter("item").getKey()

          const oRouter = UIComponent.getRouterFor(this)

          oRouter.navTo(sKey)
        }
      });
    }
  );
  