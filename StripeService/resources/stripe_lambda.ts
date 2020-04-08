import Stripe from 'stripe';

const stripe = new Stripe('sk_test_...', {
  apiVersion: '2020-03-02'
});

exports.main = async function(event: any, context: any) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          name: 'T-shirt',
          description: 'Comfortable cotton t-shirt',
          images: ['https://example.com/t-shirt.png'],
          amount: 500,
          currency: 'eur',
          quantity: 1
        }
      ],
      success_url:
        'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://example.com/cancel'
    });

    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify(session)
    };
  } catch (error) {
    var body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: body
    };
  }
};
