/*global describe,it,element,by,takeScreenshot,expect,browser*/

describe("sap.m.Popover", function () {
	"use strict";

	var bPhone = null;
	var _resolvePopover = function () {
		return bPhone ? "__dialog1" : "__popover1";
	};

	it("Should load test page", function () {
		browser.executeScript(function () {
			return sap.ui.Device.system.phone;
		}).then(function (response) {
			bPhone = response;
		});

		expect(takeScreenshot()).toLookAs("initial");
	});

	it("Should open Popover Right", function () {
		element(by.id("btn1")).click();
		element(by.id("pop1-title-inner")).click(); // Remove the focus from input

		expect(takeScreenshot()).toLookAs("popover-right");
	});

	it("Should open Popover Bottom", function () {
		element(by.id("btn0")).click();
		element(by.id("pop1-title-inner")).click(); // Remove the focus from input

		expect(takeScreenshot()).toLookAs("popover-bottom");
	});

	it("Should open Popover Top", function () {
		element(by.id("btn3")).click();
		element(by.id("pop1-title-inner")).click(); // Remove the focus from input

		expect(takeScreenshot()).toLookAs("popover-top");
	});

	it("Should open Popover Horizontal", function () {
		element(by.id("btn6")).click();
		expect(takeScreenshot()).toLookAs("popover-horizontal");
	});

	it("Should open Popover Left", function () {
		element(by.id("btn2")).click();
		element(by.id("pop1-title-inner")).click(); // Remove the focus from input

		expect(takeScreenshot()).toLookAs("popover-left");
	});

	it("Should open Popover Vertical", function () {
		element(by.id("btn4")).click();
		element(by.id("pop1-title-inner")).click(); // Remove the focus from input

		expect(takeScreenshot()).toLookAs("popover-vertical");
	});

	it("Should open Popover with header and footer", function () {
		element(by.id("with-h-with-f")).click();
		element(by.id("pop1-title-inner")).click(); // Remove the focus from input

		expect(takeScreenshot(element(by.id("pop1")))).toLookAs("popover-header-footer");
	});

	it("Should open Popover without header and with footer", function () {
		element(by.id("no-h-with-f")).click();
		element(by.id("__item0-__list0-0")).click(); // Remove the focus from input

		expect(takeScreenshot(element(by.id("pop1")))).toLookAs("popover-footer");
	});

	it("Should open Popover without header and footer", function () {
		element(by.id("no-h-no-f")).click();
		element(by.id("__item0-__list0-0")).click(); // Remove the focus from input

		expect(takeScreenshot(element(by.id("pop1")))).toLookAs("popover-no-header-footer");
	});

	it("Should open Popover with header and no footer", function () {
		element(by.id("with-h-no-f")).click();
		element(by.id("pop1-title-inner")).click(); // Remove the focus from input
		expect(takeScreenshot(element(by.id("pop1")))).toLookAs("popover-header");
	});

	it("Should open Popover with responsive paddings", function () {
		element(by.id("change-fiori-theme")).click();
		element(by.id("btn11")).click();
		expect(takeScreenshot()).toLookAs("popover-with-responsive-paddings");
		//cleanup
		element(by.id("change-belize-theme")).click();
	});

	it("Should resize Popover to 700px with responsive paddings", function () {
		element(by.id("btn11")).click();
		element(by.id("btn-set-width-700")).click();
		expect(takeScreenshot()).toLookAs("popover-700-responsive-paddings");
		//cleanup
		element(by.id("change-belize-theme")).click();
	});

	it("Should resize Popover to 1024px with responsive paddings", function () {
		element(by.id("change-fiori-theme")).click();
		element(by.id("btn11")).click();
		element(by.id("btn-set-width-1024")).click();
		expect(takeScreenshot()).toLookAs("popover-1024-responsive-paddings");
		//cleanup
		element(by.id("change-belize-theme")).click();
	});

	it("Should open Popover with checkboxes and check one of them", function () {
		element(by.id("btn15")).click();
		element(by.id("popover12CheckBox1")).click();
		expect(takeScreenshot()).toLookAs("popover-with-checkboxes");
	});

	// This test will open Dialog on mobile devices and Popover on desktops.
	// This will make it harder to determine how to close it so it can be left last
	it("Should open an overflowing popover which should be displayed with a visible scrollbar", function () {
		element(by.id("overflowing-popover-arrow")).click();
		expect(takeScreenshot(element(by.id(_resolvePopover())))).toLookAs("overflowing-popover");
	});
});