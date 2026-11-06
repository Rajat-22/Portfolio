export function isValidEmail(email) {
  // Reasonable client-side shape check; the server/browser does the real work.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
