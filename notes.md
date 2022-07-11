#### For testing purposes

sam local start-lambda -t ./cdk.out/Cdk2StarterAppStack.template.json
aws lambda invoke --function-name "MyFunction" --endpoint-url "http://127.0.0.1:3001" --no-verify-ssl out.txt --profile devKiquetal

