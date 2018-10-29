"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var domManipulation = /** @class */ (function () {
    function domManipulation() {
    }
    domManipulation.hideUnhideUpgrades = function (upgrades) {
        $('#gameWrapper').toggle(1000);
        $('#updatesMenuContainer').toggle(1000);
        if (!$('#itemsContainer').hasClass('.upgradeContainer')) {
            upgrades.DisplayAllUpgrades();
        }
    };
    return domManipulation;
}());
exports.domManipulation = domManipulation;
