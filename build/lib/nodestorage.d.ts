declare const storage: {
    save(key: any, value: any): void;
    fetch(key: any): any;
    remove(key: any): void;
    clear(): void;
};