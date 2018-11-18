import * as $ from 'jquery';
import { makeTurn } from './logic/makeTurn';
import { initialiseGame } from './logic/startgame';
import { isGameWon } from './logic/winGame';
import { Continent, Planet, Player, Virus } from './world/index';

const  gameLoop: Function =  (virus: Virus, planet: Planet, player: Player): void => {
    if (isGameWon(planet)) {
        return;
    }
    makeTurn(planet, virus);
    player.pointsIncrement();
    console.log('delay');
    setTimeout(() => gameLoop(virus, planet, player), 2000);
};

const listener: Function = (): void => {
    $('#virusNameInput').on('click', () => {
        if ($('#virusNameInput').val() === 'Enter virus name'){
            $('#virusNameInput').val('');
        }
    });

    $('.smallContinents').on('click', (sender: JQueryEventObject) => {
        const text: string = $('#virusNameInput').val().toString();
        console.log(text);

        if (text === 'Enter virus name') {
            $('#virusNameInput').val('');
        } else if (!text && text.replace(/\s/g, '') !== '') {
            const planet: Planet = initialiseGame(sender.currentTarget.children[0].textContent);
            const virus: Virus = new Virus($('#virusNameInput').val().toString());
            const player: Player = new Player();
            gameLoop(virus, planet, player);
        } else {
            alert('Input a name!');
        }
    });

};

listener();
