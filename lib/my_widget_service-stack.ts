import * as cdk from '@aws-cdk/core';
import * as widget_service from './widget_service';

export class MyWidgetServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Code that defines the stack
    new widget_service.WidgetService(this, 'Widgets');
  }
}
