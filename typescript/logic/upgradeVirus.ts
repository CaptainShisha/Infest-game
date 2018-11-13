import { IUpgrade } from '../upgrades/IUpgrade';
import { Virus } from '../world/virus';
import { Player } from './../world/player';

export const upgradeVirus: Function = (virus: Virus, upgrade: IUpgrade, cost: number, player: Player): void => {
    player.points = -cost;
    virus[upgrade.propertyToUpgrade] += upgrade.upgradeEffect;
};
