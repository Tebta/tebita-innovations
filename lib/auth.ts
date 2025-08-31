// Simple authentication utilities for admin system
export interface User {
  id: string
  username: string
  role: "admin"
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
  submittedAt: string
}

// Mock admin credentials (in production, this would be in a secure database)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "tebita2024", // In production, this would be hashed
}

export const authenticateUser = (username: string, password: string): User | null => {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    return {
      id: "1",
      username: "admin",
      role: "admin",
    }
  }
  return null
}

export const generateToken = (user: User): string => {
  // Simple token generation (in production, use JWT or similar)
  return btoa(JSON.stringify({ ...user, timestamp: Date.now() }))
}

export const validateToken = (token: string): User | null => {
  try {
    const decoded = JSON.parse(atob(token))
    // Check if token is less than 24 hours old
    if (Date.now() - decoded.timestamp < 24 * 60 * 60 * 1000) {
      return { id: decoded.id, username: decoded.username, role: decoded.role }
    }
  } catch (error) {
    console.error("Invalid token:", error)
  }
  return null
}

export const getStoredToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_token")
  }
  return null
}

export const setStoredToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_token", token)
  }
}

export const removeStoredToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token")
  }
}

export const getCurrentUser = (): User | null => {
  const token = getStoredToken()
  if (token) {
    return validateToken(token)
  }
  return null
}

// Contact form storage utilities
export const saveContactSubmission = (submission: Omit<ContactSubmission, "id" | "submittedAt">): void => {
  if (typeof window !== "undefined") {
    const submissions = getContactSubmissions()
    const newSubmission: ContactSubmission = {
      ...submission,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
    }
    submissions.unshift(newSubmission)
    localStorage.setItem("contact_submissions", JSON.stringify(submissions))
  }
}

export const getContactSubmissions = (): ContactSubmission[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("contact_submissions")
    return stored ? JSON.parse(stored) : []
  }
  return []
}
