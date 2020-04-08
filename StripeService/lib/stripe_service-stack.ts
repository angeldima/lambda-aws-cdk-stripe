import * as cdk from '@aws-cdk/core';
import * as stripe_service from '../lib/stripe_service';

export class StripeServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new stripe_service.StripeService(this, 'Stripe');
  }
}
