import * as $ from 'jquery';
import { makeTurn } from './logic/makeTurn';
import { initialiseGame } from './logic/startgame';
import { Continent, Planet, Player, Virus } from './world/index';

const gameLoop: Function = (virus: Virus, planet: Planet, player: Player): void => {
    makeTurn(planet, virus);
    player.points = 2;
};

const listener: Function = (): void => {
    $('#virusNameInput').on('click', () => {
        $('#virusNameInput').val('');
    });

    $('.smallContinents').on('click', (sender: JQueryEventObject) => {
        if (sender.currentTarget.children[0].textContent === 'Enter virus name') {
            sender.currentTarget.children[0].textContent = '';
        } else if ($('#virusNameInput').val() !== ' ') {
            const planet: Planet = initialiseGame(sender.currentTarget.children[0].textContent);
            const virus: Virus = new Virus($('#virusNameInput').val().toString());
            const player: Player = new Player();
            gameLoop(virus, planet, player);
        }
    });

};

listener();
