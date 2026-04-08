import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

export function authHeader(token?: string) {
  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}