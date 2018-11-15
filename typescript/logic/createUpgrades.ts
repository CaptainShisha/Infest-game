import { Upgrade } from './../upgrades/Upgrade';
import { Upgrades } from './../upgrades/Upgrades';

const upgrades: Upgrades = new Upgrades();

upgrades.addUpgrade(new Upgrade('Virus resistance', 'Makes your virus more resistent' , 5 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Virus Deadliness', 'Makes your virus deadlier' , 300 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Virus mutation', 'Bigger chance of mutation' , 300 , 0.5, '_spread'));

export {upgrades};
