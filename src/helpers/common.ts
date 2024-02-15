export function isValidEmailAddress(email:string):boolean
{
    // Regular expression pattern for email validation
    var emailAddressPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email matches the pattern
    return emailAddressPattern.test(email);
}