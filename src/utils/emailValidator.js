// Simple but strong email format check
export const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
  };

// Block temporary / disposable emails
const blockedDomains = [
    "tempmail.com",
    "10minutemail.com",
    "mailinator.com",
    "guerrillamail.com",
    "fakeinbox.com"
  ];

export const isDisposableEmail = (email) =>{
    const domain = email.split("@")[1]?.toLowerCase();
    return blockedDomains.includes(domain);
};
// fix common typos automatically
export const fixCommonTypos = (email) => {
    return email 
        .replace("gmial.com", "gmail.com")
        .replace("gmai.com", "gmail.com")
        .replace("hotmial.com", "hotmail.com")
        .replace("yaho.com", "yahoo.com");
};