// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE)'
  } else if (license === 'MPL-2.0') {
    badge = '[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen)](./LICENSE)'
  } else if (license === 'Apache 2.0') {
    badge = '[![License](https://img.shields.io/badge/license-Apache%202.0-blue)](./LICENSE)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'MPL-2.0') {
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents: 
  ### * [License](#license)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installation:
  ### You must install the following for this app to function:
  ### ${data.installInstruct}

  ## Usage: 
  ### ${data.useProject}

  ## Contributors:
  ### ${data.contributors}

  ## Tests: 
  ### Run the following commands in your terminal to test this app:
  ### ${data.tests}

  ## Questions: 
  ### If you have any questions, contact me at:
  ### GitHub: https://github.com/${data.github}
  ### or
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
