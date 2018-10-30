import * as $ from 'jquery';
import { Upgrades } from './Upgrades';
import { Upgrade } from './Upgrade';
import { domManipulation } from './displayUpdates';


const UpgradesCollection = new Upgrades();

UpgradesCollection.AddUpgrade(new Upgrade('Virus resistance', 'Makes your virus more resistent' , 300 ,['resistance', '50']));
UpgradesCollection.AddUpgrade(new Upgrade('Infection rate', 'This is the rate at which your virus infects people', 500, ['infectionRage','+10']));
UpgradesCollection.AddUpgrade(new Upgrade('Deadliness', 'This update makes your virus deadlier! Upgrade at your own risk :)', 200, ['deadliness', '+50']));

$('#showUpdatesMenu').on('click', () => domManipulation.hideUnhideUpgrades(UpgradesCollection));
$('#closeButton').on('click', () => domManipulation.hideUnhideUpgrades(UpgradesCollection));