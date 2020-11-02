sap.ui.define([
    "ns/HTML5Module/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ns.HTMS5Module.controller.Home", {
        onDisplayNotFound: function (oEvent) {
            //display the "notFound" target without changing the hash
            this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
        },
		onNavToEmployees : function (oEvent){
			this.getRouter().navTo("employeeList");
		},
        
        onNavToStudents : function (oEvent){
			this.getRouter().navTo("student");
		},
		
		onNavToCPIDashboard: function(oEvent){
			this.getRouter().navTo("cpidashboard");
		}
    });

});