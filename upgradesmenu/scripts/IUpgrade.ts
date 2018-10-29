export interface IUpgrade{
    upgradeName: string;
    upgradePrice: number;
    upgradeEffect: string[];
    description: string;
    createUpgradeTabInBrowser(): void;
}