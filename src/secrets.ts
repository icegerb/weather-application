// import {
//   SecretsManagerClient,
//   GetSecretValueCommand,
// } from "@aws-sdk/client-secrets-manager";

// const secret_name = "weatherApiKey";

// const client = new SecretsManagerClient({
//   region: "us-east-1",
// });

// export const getWeatherApiKey = async () => {
//   try {
//     const command = new GetSecretValueCommand({
//       SecretId: secret_name,
//       VersionStage: "AWSCURRENT",
//     });

//     const response = await client.send(command);
//     const secret = response.SecretString;

//     return secret ? JSON.parse(secret).WEATHER_API_KEY : null;
//   } catch (error) {
//     console.error("Error retrieving weather API key:", error);
//     throw error;
//   }
// };

// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";

export const getWeatherApiKey = async (secretName = "weatherApiKey") => {
  const client = new SecretsManagerClient({
    region: "us-east-1",
  });

  console.log(client);

  const command = new GetSecretValueCommand({
    SecretId: secretName,
    VersionStage: "AWSCURRENT",
  });
  console.log(command);

  // const response = await client.send(command);
  // console.log("response:", response);

  try {
    const response = await client.send(command);
    console.log("response:", response);
  } catch (error) {
    console.error("Error sending command:", error);
    console.error("Error sending command:", JSON.stringify(error, null, 2));
  }

  // // {
  //   '$metadata': {
  //     httpStatusCode: 200,
  //     requestId: '584eb612-f8b0-48c9-855e-6d246461b604',
  //     extendedRequestId: undefined,
  //     cfId: undefined,
  //     attempts: 1,
  //     totalRetryDelay: 0
  //   },
  //   ARN: 'arn:aws:secretsmanager:us-east-1:xxxxxxxxxxxx:secret:binary-secret-3873048-xxxxxx',
  //   CreatedDate: 2023-08-08T19:29:51.294Z,
  //   Name: 'binary-secret-3873048',
  //   SecretBinary: Uint8Array(11) [
  //      98, 105, 110, 97, 114,
  //     121,  32, 100, 97, 116,
  //      97
  //   ],
  //   VersionId: '712083f4-0d26-415e-8044-16735142cd6a',
  //   VersionStages: [ 'AWSCURRENT' ]
  // }
};
