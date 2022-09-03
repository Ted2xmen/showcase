import { Link } from 'react-router-dom'

import { useTranslation, withTranslation, Trans } from 'react-i18next'
import { useState } from 'react'

const Nav = () => {
  const [font, setFont] = useState('default')
  const fontList = ['Anton', 'Lobster', 'Oswald', 'Merryweather']

  const changeFont = (e) => {
    setFont(e.target.value)
  }

  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="mb-5 flex flex-row items-center justify-between bg-slate-800 px-10 py-6">
      <style>
        {`
        h1 {
          font-family: ${font};
          moz-osx-font-smoothing: grayscale;
          webkit-font-smoothing: antialiased;
        }
        `}
      </style>
      <div className="space-x-6 text-lg">
        <h1 className="inline-block text-4xl italic">ShowCase</h1>
        <Link to="/">
          <Trans i18nKey="site.home">Home</Trans>
        </Link>
      </div>
      <div className="hidden space-x-6 sm:block md:block lg:block xl:block 2xl:block">
        <label className="text-xs" htmlFor="font">
          <Trans i18nKey="site.font">Change Fonts</Trans>
        </label>
        <select
          onChange={changeFont}
          className="bg-slate-700 p-1"
          name="font"
          id="font">
          <option>Default</option>
          {fontList.map((f, i) => {
            return (
              <option key={i} value={f}>
                {f}
              </option>
            )
          })}
        </select>

        <button type="button" onClick={() => changeLanguage('tr')}>
          🇹🇷
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          🇺🇸
        </button>
      </div>
    </div>
  )
}

export default Nav
