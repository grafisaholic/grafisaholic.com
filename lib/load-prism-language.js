/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import prism from 'prismjs'
import prismComponents from 'prismjs/components'

function getBaseLanguageName(nameOrAlias, prismComponents) {
    if (prismComponents.languages[nameOrAlias]) {
      return nameOrAlias
    }
    return Object.keys(prismComponents.languages).find((language) => {
      const { alias } = prismComponents.languages[language]
      if (!alias) return false
      if (Array.isArray(alias)) {
        return alias.includes(nameOrAlias)
      }
  
      return alias === nameOrAlias
    })
  }

export default function loadPrismLanguage(language) {
  const baseLanguage = getBaseLanguageName(language)

  if (!baseLanguage) {
    throw new Error(`Prism does not support ${baseLanguage}`)
  }

  if (prism.languages[baseLanguage]) {
    return
  }

  const languageData = prismComponents.languages[baseLanguage]

  if (languageData.option === 'default') {
    return
  }

  if (languageData.require) {
    // Load the required language first
    if (Array.isArray(languageData.require)) {
      languageData.require.forEach(loadPrismLanguage)
    } else {
      loadPrismLanguage(languageData.require)
    }
  }

  require(`prismjs/components/prism-${baseLanguage}.js`)
}