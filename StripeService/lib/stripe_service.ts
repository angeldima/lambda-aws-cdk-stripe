import * as core from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';

export class StripeService extends core.Construct {
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    const handler = new lambda.Function(this, 'StripeHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.asset('resources'),
      handler: 'stripe_lambda.main'
    });

    const api = new apigateway.RestApi(this, 'stripe-api', {
      restApiName: 'Stripe Service',
      description: 'This service serves stripes function.'
    });

    const stripeAPI = api.root.addResource('checkout');
    const stripeCheckout = new apigateway.LambdaIntegration(handler);
    stripeAPI.addMethod('POST', stripeCheckout);
  }
}
