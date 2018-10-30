"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var domManipulation = /** @class */ (function () {
    function domManipulation() {
    }
    domManipulation.hideUnhideUpgrades = function (upgrades) {
        $('#gameWrapper').toggle(600);
        $('#updatesMenuContainer').toggle(600);
        if (!$('#itemsContainer').hasClass('.upgradeContainer')) {
            upgrades.DisplayAllUpgrades();
            $('#itemsContainer').append("<div id=\"closeButton\"><strong>Back</strong></div>");
        }
    };
    return domManipulation;
}());
exports.domManipulation = domManipulation;
