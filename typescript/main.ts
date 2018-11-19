import * as $ from 'jquery';
import { createUpgrades } from './logic/createUpgrades';
import { makeTurn } from './logic/makeTurn';
import { initialiseGame } from './logic/startgame';
import { upgradeVirus } from './logic/upgradeVirus';
import { isGameWon } from './logic/winGame';
import { IUpgrade } from './upgrades/contracts/IUpgrade';
import { Upgrades } from './upgrades/Upgrades';
import { Continent, Planet, Player, Virus } from './world/index';

const gameUpgrades: Upgrades = createUpgrades();

const gameLoop: Function =  (virus: Virus, planet: Planet, player: Player): void => {
    if (isGameWon(planet)) {
        return;
    }
    makeTurn(planet, virus);
    player.pointsIncrement();
    player.roundsIncrement();
    $('#roundsPlayed').text(`Rounds played: ${player.rounds}`);
    $('#Points').text(`Points: ${player.points}`);
    $('#infestefPeople').text(`Infested people: ${planet.infectedPeople}`);
    setTimeout(() => gameLoop(virus, planet, player), 2000);

};

const listener: Function = (): void => {
    $('#virusNameInput').on('click', () => {
        if ($('#virusNameInput').val() === 'Enter virus name') {
            $('#virusNameInput').val('');
        }
    });

    $('.smallContinents').on('click', (sender: JQueryEventObject) => {
        const text: string = $('#virusNameInput').val().toString();

        if (text === 'Enter virus name') {
            $('#virusNameInput').val('');
        } else if (text.replace(/\s/g, '') !== '') {
            const planet: Planet = initialiseGame(sender.currentTarget.children[0].textContent);
            const virus: Virus = new Virus($('#virusNameInput').val().toString());
            const player: Player = new Player();
            $('#startingBlock').remove();
            $('#gameContainer').css('display', 'grid');
            $('#virusName').text(`Virus name: ${virus.virusName}`);
            $('#roundsPlayed').text(`Rounds played: ${player.rounds}`);
            $('#Points').text(`Points: ${player.points}`);
            gameLoop(virus, planet, player);
            $('.upgradeButton').on('click', (buttonSender: JQueryEventObject) => {
                const currentUpgrade: IUpgrade = gameUpgrades.Upgrades
.filter((upgrade: IUpgrade) => upgrade.upgradeName === buttonSender.currentTarget.parentElement.parentElement.children[0].textContent)[0];
                if (upgradeVirus(virus, currentUpgrade, player)) {
                    gameUpgrades.removeUpgrade(currentUpgrade);
                    buttonSender.currentTarget.parentElement.parentElement.parentElement.remove();
                    alert('Successfully bought upgrade!')
                }
            });
        } else {
            alert('Input a name!');
        }
    });

};

listener();
