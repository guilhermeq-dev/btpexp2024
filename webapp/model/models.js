sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
        sponsors: function () {
            return [
                {
                    "Empresa": "Lab2dev",
                    "Estado": "São Paulo",
                    "Logo": "../img/lab2dev.png"
                },
                {
                    "Empresa": "Empresa A",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa B",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa C",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Lab2dev",
                    "Estado": "São Paulo",
                    "Logo": "../img/lab2dev.png"
                },
                {
                    "Empresa": "Empresa E",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa F",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa G",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa H",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa I",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa J",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                },
                {
                    "Empresa": "Empresa K",
                    "Estado": "São Paulo",
                    "Logo": "../img/empresa.png"
                }
            ]
        }
        
    };
});