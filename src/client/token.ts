let authToken;

export function setAuthToken(token) {
  authToken = token;
}

export function getAuthToken() {
  return authToken;
}

export function removeAuthToken() {
  authToken = undefined;
}
