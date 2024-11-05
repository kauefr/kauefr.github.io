const ghpages = require('gh-pages');
const { execSync } = require('child_process');

try {
    const commitHash = execSync('git rev-parse HEAD').toString().trim();
    ghpages.publish('build', {
        dotfiles: true,
        message: `Deploying commit ${commitHash}`
    }, (err) => {
        if (err) console.error('Deployment error:', err);
        else console.log('Deployed successfully');
    });
} catch (error) {
    console.error('Error fetching commit hash:', error);
}