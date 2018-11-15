"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeVirus = (virus, upgrade, cost, player) => {
    if (player.points - cost < 0) {
        alert(`You don't have enough points to buy the upgrade!`);
    }
    player.points = -cost;
    virus[upgrade.propertyToUpgrade] += upgrade.upgradeEffect;
};
