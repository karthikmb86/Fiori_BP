sap.ui.define([
	"ns/HTML5Module/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("ns.HTML5Module.controller.employees.EmployeeList", {
        onListItemPressed : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("employee",{
				employeeId : oCtx.getProperty("BusinessPartner")
			});
		}
	});
});