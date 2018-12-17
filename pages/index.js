import includes from 'awesome-includes'

export default () => (
  <div>
    {includes([41,42]) ? 'awesome!' : 'not awesome...'}
  </div>
)
