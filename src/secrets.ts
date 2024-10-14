import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export const getWeatherApiKey = async () => {
  const secret_name = "weatherApiKey";

  const client = new SecretsManagerClient({
    region: "ap-southeast-2",
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });

  let response;

  const command = new GetSecretValueCommand({
    SecretId: secret_name,
    VersionStage: "AWSCURRENT",
  });

  try {
    response = await client.send(command);
    if (response.SecretString) {
      const secret = JSON.parse(response.SecretString);
      const API_KEY = secret.weatherApiKey;
      return API_KEY;
    } else {
      throw new Error("SecretString is undefined.");
    }
  } catch (error) {
    console.error("Error sending command:", error);
  }
};
