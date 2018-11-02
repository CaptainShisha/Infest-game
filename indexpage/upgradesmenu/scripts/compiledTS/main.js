"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Upgrades_1 = require("./Upgrades");
var Upgrade_1 = require("./Upgrade");
var displayUpdates_1 = require("./displayUpdates");
var UpgradesCollection = new Upgrades_1.Upgrades();
UpgradesCollection.AddUpgrade(new Upgrade_1.Upgrade('Virus resistance', 'Makes your virus more resistent', 300, ['resistance', '50']));
UpgradesCollection.AddUpgrade(new Upgrade_1.Upgrade('Infection rate', 'This is the rate at which your virus infects people', 500, ['infectionRage', '+10']));
UpgradesCollection.AddUpgrade(new Upgrade_1.Upgrade('Deadliness', 'This update makes your virus deadlier! Upgrade at your own risk :)', 200, ['deadliness', '+50']));
$('#showUpdatesMenu').on('click', function () { return displayUpdates_1.domManipulation.hideUnhideUpgrades(UpgradesCollection); });
$('#closeButton').on('click', function () { return displayUpdates_1.domManipulation.hideUnhideUpgrades(UpgradesCollection); });