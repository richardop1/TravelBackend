export interface FriendModel {
    id: number;
    senderId: number;
    receptorId: number;
    is_acepted: boolean;
    is_readed: boolean;
    create_at: Date;
}
