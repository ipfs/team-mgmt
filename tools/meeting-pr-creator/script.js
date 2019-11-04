// Return the placeholder if the input field doesn't have a value set
const valueOrPlaceholder = (inputId) => {
  const input = document.getElementById(inputId)
  return input.value ? input.value : input.placeholder
}

// Replace every occurence of `${date}` with the given date
const replaceDate = (input, date) => {
  const d = new Date(Date.parse(date))
  const year = d.getFullYear()
  const quarter = `Q${Math.floor((d.getMonth() + 3) / 3)}`
  return input.replace(/\$\{date\}/g, date)
    .replace(/\$\{year\}/g, year)
    .replace(/\$\{quarter\}/g, quarter)
}

const replaceName = (input, name) => input.replace(/\$\{name\}/g, name)

// Split the commit message into its subject and description
const splitCommitMessage = (message) => {
  let [subject, ...description] = message.split('\n\n')
  if (description === undefined) {
      description = ''
  } else {
      description = description.join('\n\n')
  }
  return [subject, description]
}

// Parse the location where the file should be stored
const parseDestination = (destination) => {
  const [_empty, org, repo, _blob, branch, ...filepath] = decodeURI(
    new URL(destination).pathname
  ).split('/')
  const filenameLiteral = filepath.pop()
  const directory = filepath.join('/')
  return { org, repo, branch, directory, filenameLiteral }
}

// Get all the values to construct the URL
const getValues = async () => {
  const notesUrl = document.getElementById('notes').value
  const notes = notesUrl ? await (await fetch(notesUrl, {cache: 'no-store'})).text() : 'PASTE NOTES HERE =^.^='
  const date = valueOrPlaceholder('date')
  const destination = valueOrPlaceholder('destination')
  let {
    org, repo, branch, directory, filenameLiteral
  } = parseDestination(destination)
  const name = valueOrPlaceholder('name').replace(/ /g, '-').toLowerCase()
  const filename = replaceName(replaceDate(filenameLiteral, date), name)
  directory = replaceDate(directory, date)
  const targetBranch = replaceName(replaceDate(valueOrPlaceholder('branch'), date), name)
  const commitMessage = replaceName(replaceDate(valueOrPlaceholder('commit-message'), date), name)
  const [commitSubject, commitDescription] = splitCommitMessage(commitMessage)
  return {
    org, repo, branch, directory, filename, targetBranch, commitSubject,
    commitDescription, notes
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Set to todays date by default
  document.getElementById('date').valueAsDate = new Date()

  // Create the actual PR
  document.getElementsByTagName('form')[0].addEventListener('submit', async (event) => {
    // Don't submit, we do everything through JS
    event.preventDefault()

    const {
      org, repo, branch, directory, filename, targetBranch, commitSubject,
      commitDescription, notes
    } = await getValues()

    // Encode everything correctly
    let url = encodeURI(`https://github.com/${org}/${repo}/new/${branch}?filename=${directory}/${filename}&quick_pull=master&target_branch=${targetBranch}&message=${commitSubject}&description=${commitDescription}&value=`)
    url += encodeURIComponent(notes)

    // Send the user to the new PR
    window.location.href = url
  })
})
