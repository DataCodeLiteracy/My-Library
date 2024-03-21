export const trimText = (text: string, maxLength = 100) => {
  if (text?.length <= maxLength) {
    return text
  } else {
    return text?.substring(0, maxLength).trim() + "..."
  }
}
