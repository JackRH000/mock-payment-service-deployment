class PayController {
    processPayment(req: { body: { amount: any; currency: any; }; }, res: { json: (arg0: { status: string; transactionId: string; amount: any; currency: any; message: string; }) => void; }) {
        const mockResponse = {
            status: "success",
            transactionId: "123456789",
            amount: req.body.amount,
            currency: req.body.currency,
            message: "Payment processed successfully"
        };

        res.json(mockResponse);
    }
}

export default PayController;