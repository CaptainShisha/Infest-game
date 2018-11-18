import { Virus } from '../world/virus';
import { IUpgrade } from './../upgrades/contracts/IUpgrade';
import { Player } from './../world/player';

export const upgradeVirus: Function = (virus: Virus, upgrade: IUpgrade, player: Player): boolean => {
    const cost: number = upgrade.upgradePrice;
    if (player.points - cost < 0) {
        alert(`You don't have enough points to buy the upgrade!`);

        return false;
    } else {
    player.points = cost;
    virus[upgrade.propertyToUpgrade] += upgrade.upgradeEffect;

    return true;
    }
};
