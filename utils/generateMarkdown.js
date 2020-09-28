// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  [Description](#description)
  [Installation Instructions](###installation-instructions)
  [Usage Information](###usage-information)
  [Contributors](#contributors)
  [Test Instructions](###test-instructions)
  [License](#license)
  [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution 
  ${data.contributors}

  ## Test Instructions
  ${data.tests}

  ## Licence
  ${data.license}
  
  ## Questions
  ### ${data.email}
  
  ## Author
  This application was authored by [${data.name}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
