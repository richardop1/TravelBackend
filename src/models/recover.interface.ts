export interface RecoverModel {
    id:number;
    userId: number;
    code: string;
    isUsed: boolean;
    createAt: Date;
}
