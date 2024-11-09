export interface DecodedToken {
    id?: string;
    id_account: string;
}

export interface Transfer {
    id: number;
    id_send: number;
    id_received: number;
    amount: number;
    date: string;
}