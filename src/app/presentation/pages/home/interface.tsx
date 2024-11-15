export interface DecodedToken {
    id?: string;
    id_account: string;
}

export interface PersonBalance {
    amount: number;
}

export interface People {
    first_name: string | null;
    person_balances: PersonBalance;
}

export interface SendOrReceived {
    first_name: string | null;
}

export interface Transfer {
    id: number;
    id_send: number;
    id_received: number;
    amount: number;
    date: string;
    createdAt: string;
    updatedAt: string;
    send: SendOrReceived;
    received: SendOrReceived;
}

export interface TransferResponseData {
    people: People;
    [key: string]: any | Transfer;
}
