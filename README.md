# DiscordBot

## SETUP
### Run locally
To run locally ensure you have created the `config.json` file with the following info:
```json
{
    "token": "<YOUR_TOKEN"
}
```
Once your token is in the `config.json` file you can run the bot by running:
```sh
    node index.js
```
### Minishift

Run the following terminal commands to setup your terminal env:
```sh
  # starts the cloud platform minishift
  minishift Start
  eval $(minishift oc-env)
```

To build and deploy locally run:
```sh
    oc new-app https://github.com/sclorg/nodejs-ex -l name=myapp
```
To check whether the bot was built and deployed run:
```sh
    oc logs -f bc/nodejs-ex
```