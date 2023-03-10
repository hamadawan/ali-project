export default function setAuthCookies({ accessToken, uid, client}) {
  localStorage.setItem('access-token', accessToken);
  localStorage.setItem('uid', uid);
  localStorage.setItem('client', client);
}
