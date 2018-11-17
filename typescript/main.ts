import * as $ from 'jquery';
import { initialiseGame } from './logic/startgame';
import { Continent, Planet, Player, Virus } from './world/index';

const gameLoop: Function = (gameComponents: []<Planet|Virus>): void => {

}

const listener: Function = (): void => {
    $('#virusNameInput').on('click', () => {
        $('#virusNameInput').val('');
    });

    $('.smallContinents').on('click', (sender: JQueryEventObject) => {
        if (sender.currentTarget.children[0].textContent === 'Enter virus name') {
            sender.currentTarget.children[0].textContent = '';
        } else if ($('#virusNameInput').val() !== ' ') {
            gameLoop(initialiseGame());
        }
    });

};

listener();

