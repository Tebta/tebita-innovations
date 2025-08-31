"use client"

import { useState, useEffect } from "react"
import { AdminGuard } from "@/components/admin-guard"
import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getContactSubmissions, type ContactSubmission } from "@/lib/auth"
import { Counter } from "@/components/counter"
import { ProgressBar } from "@/components/progress-bar"
import {
  Mail,
  Phone,
  Building,
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
  TrendingUp,
  Users,
  MessageSquare,
} from "lucide-react"

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [serviceFilter, setServiceFilter] = useState("all")
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)

  useEffect(() => {
    const loadSubmissions = () => {
      const data = getContactSubmissions()
      setSubmissions(data)
      setFilteredSubmissions(data)
    }

    loadSubmissions()
    // Refresh data every 30 seconds
    const interval = setInterval(loadSubmissions, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let filtered = submissions

    if (searchTerm) {
      filtered = filtered.filter(
        (submission) =>
          submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submission.company.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (serviceFilter !== "all") {
      filtered = filtered.filter((submission) => submission.service === serviceFilter)
    }

    setFilteredSubmissions(filtered)
  }, [submissions, searchTerm, serviceFilter])

  const getServiceStats = () => {
    const stats = submissions.reduce(
      (acc, submission) => {
        acc[submission.service] = (acc[submission.service] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(stats).map(([service, count]) => ({
      service,
      count,
      percentage: (count / submissions.length) * 100,
    }))
  }

  const getBudgetStats = () => {
    const budgetRanges = submissions.reduce(
      (acc, submission) => {
        acc[submission.budget] = (acc[submission.budget] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(budgetRanges).map(([budget, count]) => ({
      budget,
      count,
      percentage: (count / submissions.length) * 100,
    }))
  }

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Service", "Budget", "Message", "Submitted At"]
    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((submission) =>
        [
          submission.name,
          submission.email,
          submission.phone,
          submission.company,
          submission.service,
          submission.budget,
          `"${submission.message.replace(/"/g, '""')}"`,
          new Date(submission.submittedAt).toLocaleString(),
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `contact-submissions-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-teal-600">Total Submissions</p>
                    <Counter end={submissions.length} className="text-3xl font-bold text-teal-900" />
                  </div>
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-25 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">This Month</p>
                    <Counter
                      end={
                        submissions.filter((s) => new Date(s.submittedAt).getMonth() === new Date().getMonth()).length
                      }
                      className="text-3xl font-bold text-blue-900"
                    />
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-25 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Unique Companies</p>
                    <Counter
                      end={new Set(submissions.map((s) => s.company)).size}
                      className="text-3xl font-bold text-green-900"
                    />
                  </div>
                  <Building className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-25 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Avg. Response Time</p>
                    <div className="text-3xl font-bold text-purple-900">2.4h</div>
                  </div>
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-900">Service Distribution</CardTitle>
                <CardDescription>Breakdown of requested services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getServiceStats().map(({ service, count, percentage }) => (
                  <div key={service} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-teal-800">{service}</span>
                      <span className="text-teal-600">
                        {count} ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <ProgressBar progress={percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-teal-900">Budget Distribution</CardTitle>
                <CardDescription>Client budget preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getBudgetStats().map(({ budget, count, percentage }) => (
                  <div key={budget} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-teal-800">{budget}</span>
                      <span className="text-teal-600">
                        {count} ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <ProgressBar progress={percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Submissions */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-teal-900">Contact Submissions</CardTitle>
                  <CardDescription>Manage and review client inquiries</CardDescription>
                </div>
                <Button onClick={exportToCSV} variant="outline" className="w-fit bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="E-commerce Website">E-commerce Website</SelectItem>
                    <SelectItem value="Project Showcase">Project Showcase</SelectItem>
                    <SelectItem value="Appointment System">Appointment System</SelectItem>
                    <SelectItem value="Online Ordering">Online Ordering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submissions List */}
              <div className="space-y-4">
                {filteredSubmissions.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
                    <p className="text-gray-500">
                      {submissions.length === 0
                        ? "No contact submissions yet. Check back later!"
                        : "Try adjusting your search or filter criteria."}
                    </p>
                  </div>
                ) : (
                  filteredSubmissions.map((submission) => (
                    <Card key={submission.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="font-semibold text-teal-900">{submission.name}</h3>
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {submission.service}
                              </Badge>
                              <Badge variant="outline" className="text-teal-600">
                                {submission.budget}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>{submission.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>{submission.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4" />
                                <span>{submission.company}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(submission.submittedAt).toLocaleString()}</span>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button onClick={() => setSelectedSubmission(submission)} variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Submission Detail Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-teal-900">Submission Details</CardTitle>
                  <Button onClick={() => setSelectedSubmission(null)} variant="ghost" size="sm">
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-teal-800">Name</label>
                    <p className="text-gray-900">{selectedSubmission.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-teal-800">Email</label>
                    <p className="text-gray-900">{selectedSubmission.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-teal-800">Phone</label>
                    <p className="text-gray-900">{selectedSubmission.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-teal-800">Company</label>
                    <p className="text-gray-900">{selectedSubmission.company}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-teal-800">Service</label>
                    <p className="text-gray-900">{selectedSubmission.service}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-teal-800">Budget</label>
                    <p className="text-gray-900">{selectedSubmission.budget}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-teal-800">Message</label>
                  <p className="text-gray-900 mt-1 p-3 bg-gray-50 rounded-lg">{selectedSubmission.message}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-teal-800">Submitted At</label>
                  <p className="text-gray-900">{new Date(selectedSubmission.submittedAt).toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AdminGuard>
  )
}
