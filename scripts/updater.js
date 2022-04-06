const { dirname } = require('path');
const RootFolder = dirname(require.main.filename);
var shell = require('shelljs');
const fs = require('fs');
const fse = require('fs-extra');
const gitPullOrClone = require('git-pull-or-clone');

function install() {
    if (fs.existsSync(RootFolder + '/.git/')) {
        console.log('Auto updater disabled.');
    } else {
        gitPullOrClone('git@github.com:JAAKKQ/CryptoDiscordBot.git', '.', (err) => {
            if (err) throw err
            console.log('SUCCESS!')
          })
    }
}

module.exports = function (dir) {
    return {
        dir: dir,

        auto: function (cb) {
            if (!fs.existsSync(RootFolder + '.git')) {
                if (fs.existsSync(RootFolder + '/update-cache/')) {
                    fs.rmSync(RootFolder + '/update-cache/', { recursive: true, force: true });
                    install();
                } else {
                    install();
                }
            }
        }
    }
};
//I never realized the lengths I'd have to go
//All the darkest corners of a sense
//I didn't know
//Just for one moment
//hearing someone call
//Looked beyond the day in hand
//There's nothing there at all