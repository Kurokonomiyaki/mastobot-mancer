### What is it?

A noticeably useless bot that casts things on demand.

### How to deploy on your server

0. Install node: https://nodejs.org/en/download/package-manager

1. Clone the repository and install production dependencies using npm

    ```bash
    git clone https://github.com/Kurokonomiyaki/mastobot-mancer.git
    cd mastobot-mancer
    npm install --production
    ```

2. Get a token for your bot

    Run the script and then follow the instructions:
    ```bash
    npm run token
    ```

3. Configure the bot

    Copy the `edit-these-settings.json` file into `settings.json`.

    ```bash
    cp edit-these-settings.json settings.json
    ```

    Edit `settings.json` and set the instance url and access token.

4. Run the bot

    You can run the bot directly using `node`.

    ```bash
    node compiled/index.js
    ```

    You should create a service for the bot. You can use `mastobot-mancer.service` as a template for a systemd service.
    Read [this documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/sect-managing_services_with_systemd-unit_files) about systemd service files.

### How to use the bot once deployed?

Send a direct message to the bot, following this pattern: `@<yourbotname> <thing> <recipient>`.

`<thing>` can be one of: coffee, tea, birthday, pizza, dango, icecream, love, breakfast, bunny, flower, congrats, chocolate, cocoa, patpat.

If you don't want the recipient to see your DM, don't write `@` before the recipient id. \
Example: `@mancerbot coffee kuro@social.mochi.academy`

If you and the recipient are on the same instance, you can omit the hostname part of the recipient. \
Example: `@mancerbot coffee kuro` => the bot will automatically resolve `kuro` into `kuro@instance-of-the-sender`.


**EDIT 19 oct. 2017**

You can use the bot to ask anonymous questions: `@<yourbotname> question <recipient> <your question>`. \
Example: `@mancerbot question kuro@social.mochi.academy What do you think of neo-postmodernism?`

/!\ The answer is not forwarded. Please note that this feature is experimental feature that could be removed at any time.
