export default function removeAuthCookies() {
  localStorage.removeItem('access-token');
  localStorage.removeItem('uid');
  localStorage.removeItem('client');
}
