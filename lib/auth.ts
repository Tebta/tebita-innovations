// Authentication utilities for admin system
export interface AdminUser {
  id: number
  email: string
  name: string
  role: "admin"
}

export interface AuthResponse {
  token: string
  admin: AdminUser
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

// Token validation and storage utilities
export const validateToken = (token: string): AdminUser | null => {
  try {
    // In a real implementation, you would verify the JWT token signature
    // For now, we'll just check if it exists and is valid JSON
    if (!token) return null
    
    // Simple check for JWT structure (3 parts separated by dots)
    const parts = token.split('.')
    if (parts.length !== 3) return null
    
    // Try to decode the payload (second part)
    const payload = JSON.parse(atob(parts[1]))
    
    // Check if token has expired
    const currentTime = Date.now() / 1000
    if (payload.exp && payload.exp < currentTime) {
      removeStoredToken()
      return null
    }
    
    return {
      id: payload.id,
      email: payload.email,
      name: payload.name || "Admin User",
      role: payload.role || "admin"
    }
  } catch (error) {
    console.error("Invalid token:", error)
    return null
  }
}

export const getStoredToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken")
  }
  return null
}

export const setStoredToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token)
  }
}

export const removeStoredToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken")
    localStorage.removeItem("adminData")
  }
}

export const getCurrentUser = (): AdminUser | null => {
  if (typeof window !== "undefined") {
    const token = getStoredToken()
    if (token) {
      return validateToken(token)
    }
    
    // Fallback: check if we have admin data in localStorage
    const adminData = localStorage.getItem("adminData")
    if (adminData) {
      try {
        return JSON.parse(adminData)
      } catch (error) {
        console.error("Error parsing admin data:", error)
        return null
      }
    }
  }
  return null
}

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null
}

export const logout = (): void => {
  removeStoredToken()
  // Redirect to login page if we're in a browser environment
  if (typeof window !== "undefined") {
    window.location.href = "/admin/login"
  }
}

// API authentication function
export const authenticateWithAPI = async (email: string, password: string): Promise<AuthResponse | null> => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      return await response.json()
    }
    
    const errorData = await response.json()
    throw new Error(errorData.message || "Authentication failed")
  } catch (error) {
    console.error("Authentication error:", error)
    throw error
  }
}

// Contact form storage utilities (for demo purposes - in production, these would come from API)
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

// API request utility with authentication
export const authenticatedFetch = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const token = getStoredToken()
  
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
  
  const response = await fetch(url, {
    ...options,
    headers,
  })
  
  if (response.status === 401) {
    // Token is invalid or expired
    removeStoredToken()
    if (typeof window !== "undefined") {
      window.location.href = "/admin/login"
    }
    throw new Error("Authentication required")
  }
  
  return response
}