export interface VerstradeModel {
    success: boolean;
    code:    number;
    data:    Data;
    message: null;
    version: string;
    env:     string;
}

export interface Data {
    timestamp: Date;
    ms:        number;
}
