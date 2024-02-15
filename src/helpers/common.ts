export function isValidEmailAddress(email:string):boolean
{
    var emailAddressPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailAddressPattern.test(email);
}