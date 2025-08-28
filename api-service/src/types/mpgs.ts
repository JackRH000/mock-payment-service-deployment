export interface PaymentResponse {
    transactionId: string;
    status: string;
    amount: number;
    currency: string;
    timestamp: string;
}

export interface ErrorResponse {
    errorCode: string;
    errorMessage: string;
}