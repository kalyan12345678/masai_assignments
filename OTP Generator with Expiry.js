function createOTPSystem() {
    let otp = null
    function generateOTP() {
      otp = Math.floor(100000 + Math.random() * 900000).toString()
      return `Your OTP is: ${otp}`
    }
    function getOTP() {
      if (otp === null) {
        return "OTP expired"
      }
  
      let currentOtp = otp
      otp = null
      return currentOtp
    }
  
    return { generateOTP, getOTP }
  }
  
  
  let otpSystem = createOTPSystem();
  console.log(otpSystem.generateOTP())
  console.log(otpSystem.getOTP())
  console.log(otpSystem.getOTP())
  console.log(otpSystem.generateOTP())
  console.log(otpSystem.getOTP())