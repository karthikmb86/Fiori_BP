sap.ui.define([
	"ns/HTML5Module/controller/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("ns.HTML5Module.controller.Student", {

		onInit: function() {

			//data = {
			//		students: [],
			//	student: this.student
			//};


		},
		onAfterRendering: function() {
			//var oModel = new sap.ui.model.json.JSONModel(student);
			//this.getView().setModel(oModel);
			//var oModel = new sap.ui.model.json.JSONModel(this.studentVal);
			//this.getView().setModel(oModel);
			/*var studentVal = {
				student: {
					id: "1",
					firstName: "Karthik",
					middleName: "M",
					lastName: "Bangera",
					gender: "Female",
					genderText: "Female",
					dateOfBirth: "1986-03-26",
					fatherName: "Mohan",
					contactNumber: "039489390",
					alternativeNumber: 323232323
				}
			};*/

			var studentVal = [{
				id: "1",
				firstName: "Karthik",
				middleName: "M",
				lastName: "Bangera",
				gender: "Female",
				genderText: "Female",
				dateOfBirth: "1986-03-26",
				fatherName: "Mohan",
				contactNumber: "039489390",
				alternativeNumber: 323232323
			}];

			var studentValNew = {

				student: [/*{
					id: "1",
					firstName: "Karthik",
					middleName: "M",
					lastName: "Bangera",
					gender: "Female",
					genderText: "Female",
					dateOfBirth: "1986-03-26",
					fatherName: "Mohan",
					contactNumber: "039489390",
					alternativeNumber: 323232323
				}*/],
				student2: {
					id: "1",
					firstName: "Karthik", 
					middleName: "M",
					lastName: "Bangera",
					gender: "Female",
					genderText: "Female",
					dateOfBirth: "1986-03-26",
					fatherName: "Mohan",
					contactNumber: "039489390",
					alternativeNumber: 323232323
				}
			};

			var oModelStd = new sap.ui.model.json.JSONModel(studentValNew);
			this.getView().setModel(oModelStd);

			// create some local data
			var aData = [
				{ lastName: "Dente", firstName: "Al", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", rating: 4 },
				{ lastName: "Friese", firstName: "Andy", checked: true, linkText: "https://experience.sap.com/fiori", href: "https://experience.sap.com/fiori", rating: 2 },
				{ lastName: "Mann", firstName: "Anita", checked: false, linkText: "http://www.saphana.com/", href: "http://www.saphana.com/", rating: 3 }
			];

			// create a JSONModel, fill in the data and bind the Table to this model
			//Working
			/*
			var oModelStd = new sap.ui.model.json.JSONModel();
			oModelStd.setData({student: aData});
			this.getView().setModel(oModelStd);
			*/

		},
		handleAddStudent: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment(this.getView().getId(), "ns.HTML5Module.view.Register", this);
				this.getView().addDependent(this._oDialog);
				//var oModel = new sap.ui.model.json.JSONModel();
				//this._oDialog.setModel(oModel);
			}


            var studentValNew = {

				student: [/*{
					id: "1",
					firstName: "Karthik",
					middleName: "M",
					lastName: "Bangera",
					gender: "Female",
					genderText: "Female",
					dateOfBirth: "1986-03-26",
					fatherName: "Mohan",
					contactNumber: "039489390",
					alternativeNumber: 323232323
				}*/],
				student2: {/*
					id: "1",
					firstName: "Ajay",   //For manual loading of values
					middleName: "K",
					lastName: "Frank",
					gender: "Male",
					genderText: "Male",
					dateOfBirth: "1986-03-10",
					fatherName: "Hiren",
					contactNumber: "313123123",
					alternativeNumber: "3534535345"
				*/}
			};
			var oModel2 = new sap.ui.model.json.JSONModel(studentValNew);
			this._oDialog.setModel(oModel2);
			//this._oDialog.getModel().setData(this.studentVal2);
			//this._oDialog.getModel().refresh();
			this._oDialog.open();
		},

		handleCancelBtnPress: function() {
			this._oDialog.close();
		},

		handleSaveBtnPress: function(oEvent) {

			var user = this.getView().byId("firstName");

			var studentVal2 = {
				id: "1",
				firstName: user._lastValue,
				middleName: "M",
				lastName: "Bangera",
				gender: "Female",
				genderText: "Female",
				dateOfBirth: "1986-03-26",
				fatherName: "Mohan",
				contactNumber: "039489390",
				alternativeNumber: 323232323
			};

			var studentVal3 = {

				id: "1",
				firstName: user._lastValue,
				lastName: this.getView().byId("lastName")._lastValue,
				gender: "MaleCONST",
				dateOfBirth: this.getView().byId("DP1")._lastValue,
				fatherName: this.getView().byId("fatherName")._lastValue,
				contactNumber: this.getView().byId("contactNumber")._lastValue,
				alternativeNumber: this.getView().byId("alternativeNumber")._lastValue

			};


			//var oModelFrg = new sap.ui.model.json.JSONModel(studentVal3);  //For manual reading of values
			var oModelFrg = oEvent.getSource().getModel();  //For Auto loading of Models
			var stdData = this.getView().getModel().getData();
			var frgData = oModelFrg.getData();
			//stdData.student.push(frgData);  ////For manual reading of values
			stdData.student.push(frgData.student2);  //For Auto loading of Models



			this.getView().getModel().setData(stdData);
			this._oDialog.close();
		}
	});
});