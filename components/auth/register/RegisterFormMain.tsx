import * as s from './Register.css'

import AuthInput from '@/components/auth/AuthInput'
import ValidationMessage from '@/components/auth/ValidationMessage'
import ValidationMessages from '@/components/auth/ValidationMessages'

const RegisterFormMain = () => {
  return (
    <>
      <>
        <h1 className={s.headerText}>회원가입</h1>
        <span className={s.labelText}>아이디</span>
        <AuthInput
          type="text"
          placeholder="아이디를 입력해주세요"
          name="email"
        />
        <ValidationMessages name="email">
          <ValidationMessage text="이메일을 형식에 맞게 입력해주세요." />
        </ValidationMessages>
        <span className={s.labelText}>비밀번호</span>
        <AuthInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <ValidationMessages name="password">
          <ValidationMessage text="영문/숫자/특수문자 2가지 이상 조합 (8~20자)" />
          <ValidationMessage text="3개 이상 연속되거나 동일한 문자/숫자 제외" />
        </ValidationMessages>
        <span className={s.labelText}>비밀번호 확인</span>
        <AuthInput
          type="password"
          name="rePassword"
          placeholder="비밀번호를 재입력해주세요"
        />
        <ValidationMessages name="rePassword">
          <ValidationMessage text="비밀번호가 일치하지 않습니다." />
        </ValidationMessages>
        <span className={s.labelText}>이름</span>
        <AuthInput type="text" name="name" placeholder="이름을 입력해주세요" />
        <ValidationMessages name="name">
          <ValidationMessage text="이름을 정확히 입력하세요. (2글자 이상, 숫자 제외)" />
        </ValidationMessages>
        <span className={s.labelText}>휴대폰</span>
        <AuthInput
          type="text"
          name="phoneNo"
          placeholder="휴대폰 번호를 입력해주세요"
        />
        <ValidationMessages name="phoneNo">
          <ValidationMessage text="휴대폰 번호를 정확하게 입력하세요. ( - 포함)" />
        </ValidationMessages>
      </>
    </>
  )
}

export default RegisterFormMain
