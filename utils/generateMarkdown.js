// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  [Description](#description)
  [Installation](###installation%20instructions)
  [Usage](###usage%20information)
  [Contributors](#contributors)
  [Test](###test%20instructions)
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
