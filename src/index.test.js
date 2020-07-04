import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("Our first test", () => {
	it("should pass", () => {
		expect(true).to.equal(true);
	});
});

// describe("index.html", () => {
// 	it("should have H1 that says users ", () => {
// 		const index = fs.readFileSync("./src/index.html", "utf-8");
// 		const { JSDOM } = jsdom;
// 		const dom = new JSDOM(index);
// 		const h1 = dom.window.document.getElementsByTagName("h1")[0];
// 		expect(h1.innerHTML).to.equal("Users");
// 		dom.window.close();
// 	});
// });

describe("the html h1", () => {
	it("should return Users", () => {
		const getIndex = fs.readFileSync("./src/index.html", "utf-8");
		const { JSDOM } = jsdom;
		const dom = new JSDOM(getIndex);
		const {window} = dom;
		const h1 = window.document.getElementsByTagName("h1")[0];
		expect(h1.innerHTML).to.equal("Users");
		window.close();
	});
});
