import { Upgrade } from './../upgrades/Upgrade';
import { Upgrades } from './../upgrades/Upgrades';

const createUpgrades: Function = (): Upgrades => {
const upgrades: Upgrades = new Upgrades();

upgrades.addUpgrade(new Upgrade('Spread by spores', 'Makes your virus more resistent' , 5 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Alpha radiation upgrade', 'Makes your virus deadlier' , 5 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spred by bugs', 'Bigger chance of mutation' , 5 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Prime upgrade', 'Makes your virus deadlier' , 15 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spred in the cold', 'Makes your virus more resistent' , 15 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Nuclear upgrade', 'Makes your virus deadlier' , 15 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spred by meat', 'Bigger chance of mutation' , 30 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Fatal mutation upgrade', 'Makes your virus deadlier' , 30 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spread by water', 'Makes your virus more resistent' , 30 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Beta radiation upgrade', 'Makes your virus deadlier' , 60 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spread by fruits and vegetables', 'Bigger chance of mutation' , 60 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Spread by the air in the city', 'Makes your virus more resistent' , 60 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Gamma radiation', 'Makes your virus deadlier' , 100 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spread by pets', 'Bigger chance of mutation' , 100 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Spread by bottled water', 'Makes your virus more resistent' , 100 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Omega radiation upgrade', 'Makes your virus deadlier' , 140 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spread by GMO foods', 'Bigger chance of mutation' , 140 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Spread by the air', 'Makes your virus more resistent' , 140 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Dark matter upgrade', 'Makes your virus deadlier' , 180 , 0.5, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spread by farm animals', 'Bigger chance of mutation' , 180 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Spread by rats', 'Makes your virus more resistent' , 180 , 0.5, '_spread'));
upgrades.addUpgrade(new Upgrade('Alien blood upgrade', 'Makes your virus deadlier' , 200 , 0.8, '_deadliness'));
upgrades.addUpgrade(new Upgrade('Spread by sex', 'Bigger chance of mutation' , 200 , 0.8, '_spread'));
upgrades.addUpgrade(new Upgrade('New alien form', 'Makes your virus deadlier' , 300 , 0.9, '_deadliness'));

upgrades.displayAllUpgrades();

return upgrades;
};

export {createUpgrades};
