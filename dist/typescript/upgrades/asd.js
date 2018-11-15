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
const displayUpdates_1 = require("./displayUpdates");
const Upgrade_1 = require("./Upgrade");
const Upgrades_1 = require("./Upgrades");
const upgradesCollection = new Upgrades_1.Upgrades();
upgradesCollection.addUpgrade(new Upgrade_1.Upgrade('Virus resistance', 'Makes your virus more resistent', 5, 0.5, '_spread'));
upgradesCollection.addUpgrade(new Upgrade_1.Upgrade('Virus Deadliness', 'Makes your virus deadlier', 300, 0.5, '_deadliness'));
upgradesCollection.addUpgrade(new Upgrade_1.Upgrade('Virus mutation', 'Bigger chance of mutation', 300, 0.5, '_spread'));
$('#showUpdatesMenu').on('click', () => displayUpdates_1.domManipulation.TOGGLEUPGRADES(upgradesCollection));
$('#closeButton').on('click', () => displayUpdates_1.domManipulation.TOGGLEUPGRADES(upgradesCollection));
