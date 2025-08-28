class PayController {
    processPayment(req, res) {
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