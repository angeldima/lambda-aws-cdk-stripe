#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StripeServiceStack } from '../lib/stripe_service-stack';

const app = new cdk.App();
new StripeServiceStack(app, 'StripeServiceStack');
