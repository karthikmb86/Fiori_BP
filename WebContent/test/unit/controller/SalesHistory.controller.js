/*global QUnit*/

sap.ui.define([
	"ns/HTML5Module/controller/SalesHistory.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SalesHistory Controller");

	QUnit.test("I should test the SalesHistory controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
