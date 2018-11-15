"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line
require("reflect-metadata");
const Upgrade_1 = require("./../../typescript/upgrades/Upgrade");
describe('Upgrade', () => {
    describe('constructor should', () => {
        it('not throw error ', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', 'upgradeDescription', 5, 5, '_property'))).not.toThrow();
        });
        it('throw error when no name is inserted', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade(null, 'upgradeDescription', 5, 5, '_property')))
                .toThrow('Must insert name or names is more than 50 symbols!');
        });
        it('throw error when no name is too long', () => {
            // Arrange
            const name = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
            // Act & Assert
            expect(() => (new Upgrade_1.Upgrade(name, 'upgradeDescription', 5, 5, '_property')))
                .toThrow('Must insert name or names is more than 50 symbols!');
        });
        it('throw error when no description is inserted', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', null, 5, 5, '_property')))
                .toThrow('Must insert description or descriptions is more than 50 symbols!');
        });
        it('throw error when no description is too long', () => {
            // Arrange
            const name = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
            // Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', name, 5, 5, '_property')))
                .toThrow('Must insert description or descriptions is more than 50 symbols!');
        });
        it('throw error when price is less than 0 ', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', 'upgradeDescription', -1, 5, '_property')))
                .toThrow('Must insert price or your price is less than 0!');
        });
        it('throw error when no price is inserted', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', 'upgradeDescription', null, 5, '_property')))
                .toThrow('Must insert price or your price is less than 0!');
        });
        it('throw error when no effect is inserted', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', 'upgradeDescription', 5, null, '_property')))
                .toThrow('Must insert effect!');
        });
        it('throw error when no propertyToUpgrade is inserted', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', 'upgradeDescription', 5, 5, null)))
                .toThrow('Must insert correct propertyToUpgrade!');
        });
        it('throw error when propertyToUpgrade is to long', () => {
            // Arrange
            const name = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
            // Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', 'upgradeDescription', 5, 5, name)))
                .toThrow('Must insert correct propertyToUpgrade!');
        });
        it('throw error when no propertyToUpgrade is not correct', () => {
            // Arrange & Act & Assert
            expect(() => (new Upgrade_1.Upgrade('name', 'upgradeDescription', 5, 5, 'name')))
                .toThrow('Must insert correct propertyToUpgrade!');
        });
    });
});
