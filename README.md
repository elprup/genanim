# genanim = gen + anim

Export AE json file to custom animation films.

# Dev install
TIPS: ONLY linux os is supported by now

reference: https://dev.to/chis0m/installing-puppeteer-on-an-ubuntu-aws-ec2-instance-5o7

```shell
# follow script is tested in ubuntu 18.04'

# install chrome
$ sudo apt install chromium-browser -y

# install chrome dependencies
$ sudo apt update && sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget -y

# install ffmpeg
$ sudo apt install ffmpeg -y

$ npm install
```

## Usage

```shell
$ genanim data.json output.mp4
generate video using data.json...
RENDERING: 13/134 frames...
write to output.mp4 123kb
done!

$ genanim data.json --name=alice output.mp4
generate video using data.json... (name=alice)
RENDERING: 13/134 frames...
write to output.mp4 124kb
done!
```
