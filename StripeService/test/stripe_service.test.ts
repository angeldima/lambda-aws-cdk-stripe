import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import StripeService = require('../lib/stripe_service-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new StripeService.StripeServiceStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
