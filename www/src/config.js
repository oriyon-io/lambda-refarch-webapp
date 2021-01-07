// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "28rr80614vki4c9j2s7lt6boma",     // CognitoClientID
  "api_base_url": "https://wtoca1i715.execute-api.eu-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-tutorial-todoapp.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1d01j0y2ol5ev.amplifyapp.com"                                      // AmplifyURL
};

export default config;
