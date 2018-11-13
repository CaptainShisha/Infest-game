import * as $ from 'jquery';
import { Upgrades } from './Upgrades';

export abstract class domManipulation {
    // tslint:disable-next-line:no-any JQUERY usage requires any...
    public static TOGGLEUPGRADES(upgrades: Upgrades): any {
            $('#gameWrapper').toggle(600);
            $('#updatesMenuContainer').toggle(600);
            if (!$('#itemsContainer').hasClass('.upgradeContainer')) {
                upgrades.displayAllUpgrades();
                $('#itemsContainer').append(`<div id="closeButton"><strong>Back</strong></div>`);
        }
    }
}
