import * as s from './Auth.css'

const ValidationMessage = ({ text }: { text: string }) => {
  return <div className={s.validationText}>{text}</div>
}

export default ValidationMessage
