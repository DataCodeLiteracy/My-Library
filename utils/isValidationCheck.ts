export const isPhoneCheck = (value: string) => {
  const regPhone = /^01([0 | 1 | 6 | 7 | 8 | 9])([0-9]{3,4})([0-9]{4})$/;
  if (regPhone.test(value)) {
    return true;
  }
  return false;
};

export const isEmailCheck = (value: string) => /^.+@.+\..+$/.test(value);

export const isNameCheck = (value: string) => {
  const regex = /^[가-힣a-zA-Z]+$/;
  if (value.length > 1 && regex.test(value)) {
    return true;
  }
  return false;
};

const isSequentialOrSame = (password: string) => {
  for (let i = 0; i < password.length - 2; i++) {
    let current = password.charCodeAt(i);
    let next = password.charCodeAt(i + 1);
    let next2 = password.charCodeAt(i + 2);

    // 동일한 문자/숫자가 3개 연속되는 경우
    if (current === next && next === next2) {
      return true;
    }

    // 연속되는 숫자/알파벳인 경우 (예: 123, 456, abc, def)
    if (current + 1 === next && next + 1 === next2) {
      return true;
    }
  }
  return false;
};

export const isPasswordCheck = (value: string) => {
  if (value.length < 8 || value.length > 20) {
    return false;
  }

  // 기본 조건 확인
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasDigit = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*()\-_=+[\]{};:'",<.>/?\\|]/.test(value);

  // 영문, 숫자, 특수문자 중 2가지 이상 조합 확인
  const conditionsMet =
    [hasUpperCase, hasLowerCase, hasDigit, hasSpecialChar].filter(Boolean)
      .length >= 2;

  // 연속되거나 동일한 문자/숫자 확인
  const sequentialOrSame = isSequentialOrSame(value);

  // 모든 조건을 만족하는지 확인
  return conditionsMet && !sequentialOrSame;
};

export interface ValidationFunctions {
  [key: string]: (val1: string) => boolean;
}

export const validationFunctions: ValidationFunctions = {
  email: isEmailCheck,
  password: isPasswordCheck,
  name: isNameCheck,
  phoneNo: isPhoneCheck,
};
