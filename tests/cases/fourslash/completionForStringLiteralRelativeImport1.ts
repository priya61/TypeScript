/// <reference path='fourslash.ts' />

// @Filename: test0.ts
//// import * as foo1 from "./*import_as0*/
//// import * as foo2 from ".//*import_as1*/
//// import * as foo3 from "./f/*import_as2*/
//// import * as foo4 from "./folder//*import_as3*/
//// import * as foo5 from "./folder/h/*import_as4*/

//// import foo6 = require("./*import_equals0*/
//// import foo7 = require(".//*import_equals1*/
//// import foo8 = require("./f/*import_equals2*/
//// import foo9 = require("./folder//*import_equals3*/
//// import foo10 = require("./folder/h/*import_equals4*/

//// var foo11 = require("./*require0*/
//// var foo12 = require(".//*require1*/
//// var foo13 = require("./f/*require2*/
//// var foo14 = require("./folder//*require3*/
//// var foo15 = require("./folder/h/*require4*/

// @Filename: parentTest/sub/test5.ts
//// import * as foo16 from "../g/*import_as5*/

//// import foo17 = require("../g/*import_equals5*/

//// var foo18 = require("../g/*require5*/

// @Filename: f1.ts
//// /*f1*/
// @Filename: f1.js
//// /*f1j*/
// @Filename: f1.d.ts
//// /*f1d*/
// @Filename: f2.tsx
//// /f2*/
// @Filename: f3.js
//// /*f3*/
// @Filename: f4.jsx
//// /*f4*/
// @Filename: e1.ts
//// /*e1*/
// @Filename: folder/f1.ts
//// /*subf1*/
// @Filename: folder/h1.ts
//// /*subh1*/
// @Filename: parentTest/f1.ts
//// /*parentf1*/
// @Filename: parentTest/g1.ts
//// /*parentg1*/
const kinds = ["import_as", "import_equals", "require"];

for (const kind of kinds) {
    goTo.marker(kind + "0");
    verify.importModuleCompletionListIsEmpty();

    goTo.marker(kind + "1");
    verify.importModuleCompletionListContains("f1");
    verify.importModuleCompletionListContains("f2");
    verify.importModuleCompletionListContains("e1");
    verify.importModuleCompletionListContains("test0");
    verify.importModuleCompletionListContains("folder/");
    verify.importModuleCompletionListContains("parentTest/");
    verify.not.importModuleCompletionListItemsCountIsGreaterThan(6);

    goTo.marker(kind + "2");
    verify.importModuleCompletionListContains("f1");
    verify.importModuleCompletionListContains("f2");
    verify.importModuleCompletionListContains("folder/");
    verify.not.importModuleCompletionListItemsCountIsGreaterThan(3);

    goTo.marker(kind + "3");
    verify.importModuleCompletionListContains("f1");
    verify.importModuleCompletionListContains("h1");
    verify.not.importModuleCompletionListItemsCountIsGreaterThan(2);

    goTo.marker(kind + "4");
    verify.importModuleCompletionListContains("h1");
    verify.not.importModuleCompletionListItemsCountIsGreaterThan(1);

    goTo.marker(kind + "5");
    verify.importModuleCompletionListContains("g1");
    verify.not.importModuleCompletionListItemsCountIsGreaterThan(1);
}