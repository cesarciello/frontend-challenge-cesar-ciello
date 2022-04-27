export interface StoreSelectedCountry {
    get(): SelectedCountry;
    save(selectedCountry: SelectedCountry): void;
}

export interface SelectedCountry {
    code: string;
    name: string;
}

export abstract class StoreSelectedCountryService implements StoreSelectedCountry {
    abstract get(): SelectedCountry;
    abstract save(selectedCountry: SelectedCountry): void;
}
