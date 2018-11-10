import * as $ from 'jquery';
import { Upgrades } from './Upgrades';
import { Upgrade } from './Upgrade';
import { domManipulation } from './displayUpdates';


const UpgradesCollection = new Upgrades();

UpgradesCollection.AddUpgrade(new Upgrade('Virus resistance', 'Makes your virus more resistent' , 5 , 0.50, '_spread'));
UpgradesCollection.AddUpgrade(new Upgrade('Virus Deadliness', 'Makes your virus deadlier' , 300 , 0.50, '_deadliness'));
UpgradesCollection.AddUpgrade(new Upgrade('Virus mutation', 'Bigger chance of mutation' , 300 , 0.50, '_spread'));

$('#showUpdatesMenu').on('click', () => domManipulation.hideUnhideUpgrades(UpgradesCollection));
$('#closeButton').on('click', () => domManipulation.hideUnhideUpgrades(UpgradesCollection));