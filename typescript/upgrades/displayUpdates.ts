import { Upgrades } from './Upgrades';
import * as $ from 'jquery'

export abstract class domManipulation {
    public static hideUnhideUpgrades(upgrades: Upgrades): any{
            $('#gameWrapper').toggle(600);
            $('#updatesMenuContainer').toggle(600);
            if(!$('#itemsContainer').hasClass('.upgradeContainer')){
                upgrades.DisplayAllUpgrades();
                $('#itemsContainer').append(`<div id="closeButton"><strong>Back</strong></div>`);
        }
    }
}