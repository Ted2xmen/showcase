import { Link } from 'react-router-dom'

import { useTranslation, withTranslation, Trans } from 'react-i18next'

const Nav = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className="container-md flex flex-row items-center justify-between px-10 pt-12">
      <div className="space-x-6">
        <Link to="/">
          <Trans i18nKey="site.home">Home</Trans>
        </Link>

        <Link to="/about">
          <Trans i18nKey="site.about">About</Trans>
        </Link>

        <Link to="/contact">
          <Trans i18nKey="site.contact">Contact</Trans>
        </Link>
      </div>
      <div className="space-x-6">
        <button
          className="badge"
          type="button"
          onClick={() => changeLanguage('tr')}>
          TR
        </button>
        <button
          className="badge"
          type="button"
          onClick={() => changeLanguage('en')}>
          EN
        </button>
      </div>
    </div>
  )
}

export default Nav
