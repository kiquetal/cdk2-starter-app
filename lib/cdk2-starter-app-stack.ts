import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
export class Cdk2StarterAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Cdk2StarterAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

  const mylambda = new lambda.Function(this,'MyFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    code: lambda.Code.fromAsset('lambdas'),
    handler: 'app.handler'
  });
  }
}
