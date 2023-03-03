const interval = 24 * 60 * 60 * 1000

const checktime = () => {
  const startTime = localStorage.getItem('token-start-time')

  return Date.now() - startTime >= interval
}

export default checktime
