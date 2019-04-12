# WAV to MP3 encoder with Node.js locally

The programme is based on  *[The LAME project](http://lame.sourceforge.net/)* and it read WAV-format files and encodes them into MP3 files.

## Requirements

-   Lame Installed (View instructions below)
-   Node 10.13.\* or newer

## Installation

You can install it with `npm`:

```bash
$ npm install
```
This command will install the `node-lame` npm package dependency and create the local application folder structure ready to go.

__!Important__ : If you have not installed LAME yet, please use the following instruction.

__Install on Windows__

1. Go to the the [Lame Download Page](https://lame.buanzo.org/#lamewindl) and download the EXE or ZIP file.
2. Navigate to the directory where Lame was installed in (most commonly `C:\Program Files (x86)\Lame For Audacity`).
3. Add the directory to your [Environment Variables](https://www.java.com/en/download/help/path.xml).

### Usage

Store your `.wav` files into the `./wav` subdirectory then run the following command line in your terminal :

```bash
$ npm run start
```

This command will encode your `.wav` files into the MP3-format and store them in the `./mp3` subdiretory.

Once you are done or if needed you can clean the `./wav` or  `./mp3`  subdirectories by running the following command lines in your terminal :

```bash
$ npm run cleanMp3
```

or

```bash
$ npm run cleanWav
```

Enjoy !

###### Coded by Drozerah







