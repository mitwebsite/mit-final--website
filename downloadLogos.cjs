const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
    { name: 'rgpv.jpg', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_logo.png/220px-Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_logo.png' },
    { name: 'mp-govt.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Emblem_of_Madhya_Pradesh.svg/200px-Emblem_of_Madhya_Pradesh.svg.png' },
    { name: 'davv.jpg', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Devi_Ahilya_Vishwavidyalaya_Logo.png/220px-Devi_Ahilya_Vishwavidyalaya_Logo.png' },
    { name: 'aicte.jpg', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png' }
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function run() {
    for (const logo of logos) {
        try {
            await download(logo.url, path.join(__dirname, 'src/assets', logo.name));
            console.log(`Downloaded ${logo.name}`);
        } catch (err) {
            console.error(`Error downloading ${logo.name}:`, err.message);
        }
    }
}

run();
