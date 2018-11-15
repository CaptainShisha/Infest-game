"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Upgrade_1 = require("./Upgrade");
const Upgrades_1 = require("./Upgrades");
const upgradesCollection = new Upgrades_1.Upgrades();
exports.upgradesCollection = upgradesCollection;
upgradesCollection.addUpgrade(new Upgrade_1.Upgrade('Virus resistance', 'Makes your virus more resistent', 5, 0.5, '_spread'));
upgradesCollection.addUpgrade(new Upgrade_1.Upgrade('Virus Deadliness', 'Makes your virus deadlier', 300, 0.5, '_deadliness'));
upgradesCollection.addUpgrade(new Upgrade_1.Upgrade('Virus mutation', 'Bigger chance of mutation', 300, 0.5, '_spread'));
