const { exec } = require("child_process");

const repositoryUrl = "https://github.com/zeon-studio/hugoplate";
const localDirectory = "./themes/hugoplate";
const foldersToFetch = ["assets", "layouts"];
const foldersToSkip = ["exampleSite"];

const fetchFolder = (folder) => {
  exec(
    `curl -L ${repositoryUrl}/tarball/main | tar -xz --strip-components=1 --directory=${localDirectory} --exclude=$(curl -sL ${repositoryUrl}/tarball/main | tar -tz | grep -E "/(${foldersToSkip.join(
      "|",
    )})/") */${folder}`,
  );
};

// Fetch each specified folder
foldersToFetch.forEach((folder) => {
  fetchFolder(folder);
});

/*
  Optional Improvement:
  If you are customizing this theme as your own template, consider forking the original repository
  (https://github.com/zeon-studio/hugoplate) and updating the `repositoryUrl` variable to point to your new fork.
  This way, when you run the script in the future, it will pull updates from your personalized version of the theme,
  ensuring you remain in control of changes while still benefiting from structured updates.
*/
