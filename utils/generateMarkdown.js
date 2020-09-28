// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Contributors](#contributors)
  * [Test](#test)
  * [License](#license)
  * [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution 
  ${data.contributors}

  ## Test
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
