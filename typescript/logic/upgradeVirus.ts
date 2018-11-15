import { Virus } from '../world/virus';
import { IUpgrade } from './../upgrades/contracts/IUpgrade';
import { Player } from './../world/player';

export const upgradeVirus: Function = (virus: Virus, upgrade: IUpgrade, cost: number, player: Player): void => {
    if (player.points - cost < 0) {
        alert(`You don't have enough points to buy the upgrade!`);
    }
    player.points = -cost;
    virus[upgrade.propertyToUpgrade] += upgrade.upgradeEffect;
};
