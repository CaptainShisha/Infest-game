// tslint:disable-next-line
import 'reflect-metadata';
import { Virus } from './../../world/virus';

describe('Virus', () => {
    describe('constructor method should', () => {
        it('not throw an error', () => {
        // Arrange & Act & Assert
        expect(() => (new Virus('name'))).not.toThrow();
        });

        it('throw an error when name is null', () => {
        // Arrange & Act & Assert
        expect(() => (new Virus(null)))
        .toThrow('Virus name must be inserted and more than 2 and less than 20 symbols!');
        });

        it('throw an error when name is undefind', () => {
        // Arrange & Act & Assert
        expect(() => (new Virus(undefined)))
        .toThrow('Virus name must be inserted and more than 2 and less than 20 symbols!');
        });

        it('throw an error when name is undefind', () => {
        // Arrange
        const name: string = 'Samo minyoro Ceca i samo tesni i lesni';
        // Act & Assert
        expect(() => (new Virus(name)))
        .toThrow('Virus name must be inserted and more than 2 and less than 20 symbols!');
        });
    });

    describe('getter methods should', () => {
        let test: Virus;
        beforeEach(() =>{
             test = new Virus('name');
        })
        it('give back the right name', () => {
        // Arrange & Act & Assert
            expect(test.virusName).toBe('name');
        });

        it('give back the right deadliness', () => {
            // Arrange & Act & Assert
                expect(test.deadliness).toBe(0);
        });

        it('give back the right spread', () => {
            // Arrange & Act & Assert
                expect(test.spread).toBe(0.3);
        });

        it('give back the right chanceOfMutation', () => {
            // Arrange & Act & Assert
                expect(test.chanceOfMutation).toBe(0);
        });

        it('give back the right chanceOfDiscovery', () => {
            // Arrange & Act & Assert
                expect(test.chanceOfDiscovery).toBe(0);
        });
    });
});
