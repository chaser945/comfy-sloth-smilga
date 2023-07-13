import "dotenv/config"
// console.log(process.env.VITE_STRIPE_PUBLIC_KEY)
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY)

export const handler = async (event, context) => {
    console.log(event)
    const { cart, subTotal, shippingFee } = JSON.parse(event.body)

    const calcOrderTotal = () => {
        return shippingFee + subTotal
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calcOrderTotal(),
            currency: "inr",
            automatic_payment_methods: {
                enabled: true,
            },
        })

        return {
            statusCode: 200,
            body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        }
    }

}