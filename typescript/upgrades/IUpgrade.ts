export interface IUpgrade {
    upgradeName: string;
    upgradePrice: number;
    upgradeEffect: number;
    description: string;
    propertyToUpgrade: string;
    createUpgradeTabInBrowser(): void;
}
