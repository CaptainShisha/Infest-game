"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const $ = __importStar(require("jquery"));
class ManipulateDOM {
    static TOGGLEUPGRADES(upgrades) {
        $('#gameWrapper').toggle(600);
        $('#updatesMenuContainer').toggle(600);
        if (!$('#itemsContainer').hasClass('.upgradeContainer')) {
            upgrades.displayAllUpgrades();
            $('#itemsContainer').append(`<div id="closeButton"><strong>Back</strong></div>`);
        }
    }
}
exports.ManipulateDOM = ManipulateDOM;
