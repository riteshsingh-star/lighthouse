const { execSync } = require('child_process');

const urls = [
  { name: 'google', url: 'https://www.google.com' },
  { name: 'orangehrm', url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' }
];

urls.forEach(site => {
  console.log(`\nRunning Lighthouse for ${site.name}`);
  execSync(
    `npx lhci autorun \
      --config=config.cjs \
      --collect.url=${site.url} \
      --upload.target=filesystem \
      --upload.outputDir=./lhci-reports/${site.name} \
      --chrome-flags= --disable-gpu --window-size=1920,1080`,
    { stdio: 'inherit' }
  );
});
