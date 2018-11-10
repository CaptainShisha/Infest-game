import { Upgrade } from './Upgrade';
import { Upgrades } from './Upgrades';

const UpgradesCollection = new Upgrades();

(()=>{
    UpgradesCollection.AddUpgrade(new Upgrade('Virus resistance', 'Makes your virus more resistent' , 5 , 0.50, '_spread'));
    UpgradesCollection.AddUpgrade(new Upgrade('Virus Deadliness', 'Makes your virus deadlier' , 300 , 0.50, '_deadliness'));
    UpgradesCollection.AddUpgrade(new Upgrade('Virus mutation', 'Bigger chance of mutation' , 300 , 0.50, '_spread'));    
})()

export { UpgradesCollection };