const stripe = require("stripe")(process.env.PAYMENT_SECREAT);
const express = require('express');
const router = express.Router();

const createPayment = async (req, res) => {
    const { Price } = req.body;
    const amount = Price * 100;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).send({ error: "Error creating payment intent" });
    }
};

router.post("/", createPayment);

module.exports = router;
