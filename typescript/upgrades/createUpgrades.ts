import { Upgrade } from './Upgrade';
import { Upgrades } from './Upgrades';

const upgradesCollection: Upgrades = new Upgrades();

upgradesCollection.addUpgrade(new Upgrade('Virus resistance', 'Makes your virus more resistent' , 5 , 0.5, '_spread'));
upgradesCollection.addUpgrade(new Upgrade('Virus Deadliness', 'Makes your virus deadlier' , 300 , 0.5, '_deadliness'));
upgradesCollection.addUpgrade(new Upgrade('Virus mutation', 'Bigger chance of mutation' , 300 , 0.5, '_spread'));

export { upgradesCollection };
