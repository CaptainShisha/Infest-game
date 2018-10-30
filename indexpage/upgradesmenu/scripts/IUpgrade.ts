export interface IUpgrade{
    upgradeName: string;
    upgradePrice: number;
    upgradeEffect: string;
    description: string;
    propertyToUpgrade: string;
    createUpgradeTabInBrowser(): void;
}