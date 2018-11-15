import * as $ from 'jquery';
import { Continent, Planet, Player, Virus } from './world/index';

(() => {
    $('#virusNameInput').on('click', () => {
        $("#virusNameInput").text = '';
    } )
});
