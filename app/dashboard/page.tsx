"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Shield, FileText, Eye, Clock, CheckCircle, MapPin, Calendar, Plus, Settings, Bell } from "lucide-react"
import Link from "next/link"

const userReports = [
  {
    id: "CR-2024-001",
    type: "Theft",
    status: "Under Investigation",
    date: "2024-01-15",
    location: "123 Main Street",
    priority: "Medium",
  },
  {
    id: "CR-2024-005",
    type: "Vandalism",
    status: "Resolved",
    date: "2024-01-10",
    location: "Park Avenue",
    priority: "Low",
  },
  {
    id: "CR-2024-008",
    type: "Suspicious Activity",
    status: "Monitoring",
    date: "2024-01-08",
    location: "Residential Area",
    priority: "Medium",
  },
]

const notifications = [
  {
    id: 1,
    type: "status_update",
    message: "Your report CR-2024-001 status has been updated to 'Under Investigation'",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "community_alert",
    message: "New incident reported in your area - Downtown District",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "resolution",
    message: "Your report CR-2024-005 has been resolved",
    time: "1 day ago",
    read: true,
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "bg-green-100 text-green-800"
      case "under investigation":
        return "bg-yellow-100 text-yellow-800"
      case "monitoring":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-orange-100 text-orange-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SafeReport</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge className="ml-2 bg-red-500">3</Badge>
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link href="/report">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Report
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John</h1>
            <p className="text-gray-600">Here's an overview of your reports and community activity</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Reports</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Cases</p>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                  </div>
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Resolved</p>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Community Score</p>
                    <p className="text-2xl font-bold text-gray-900">85%</p>
                  </div>
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reports">My Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Reports */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                    <CardDescription>Your latest submitted reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userReports.slice(0, 3).map((report) => (
                        <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{report.id}</span>
                              <Badge variant="outline">{report.type}</Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 gap-4">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {report.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(report.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link href="/dashboard?tab=reports">
                        <Button variant="outline" className="w-full">
                          View All Reports
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Community Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Community Activity</CardTitle>
                    <CardDescription>Recent incidents in your area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Theft Report</p>
                          <p className="text-sm text-gray-500">Downtown District • 2 hours ago</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Vandalism</p>
                          <p className="text-sm text-gray-500">Park Avenue • 5 hours ago</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Suspicious Activity</p>
                          <p className="text-sm text-gray-500">Residential Area • 1 day ago</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">Monitoring</Badge>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/incidents">
                        <Button variant="outline" className="w-full">
                          View All Incidents
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Safety Score */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Safety Score</CardTitle>
                  <CardDescription>Based on recent activity and resolution rates in your area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Safety</span>
                      <span className="text-sm text-gray-500">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-600">12</p>
                        <p className="text-sm text-gray-500">Resolved This Month</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-orange-600">3</p>
                        <p className="text-sm text-gray-500">Active Cases</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-blue-600">24h</p>
                        <p className="text-sm text-gray-500">Avg Response Time</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Reports</CardTitle>
                  <CardDescription>All reports you have submitted</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userReports.map((report) => (
                      <div
                        key={report.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{report.id}</h3>
                            <Badge variant="outline">{report.type}</Badge>
                            <Badge className={getPriorityColor(report.priority)}>{report.priority}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 gap-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {report.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(report.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Stay updated on your reports and community activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border rounded-lg ${!notification.read ? "bg-blue-50 border-blue-200" : ""}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className={`${!notification.read ? "font-medium" : ""}`}>{notification.message}</p>
                            <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                          </div>
                          {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      Mark All as Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Report Statistics</CardTitle>
                    <CardDescription>Your reporting activity over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">This Month</span>
                        <span className="font-semibold">4 reports</span>
                      </div>
                      <Progress value={40} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Last Month</span>
                        <span className="font-semibold">6 reports</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">3 Months Ago</span>
                        <span className="font-semibold">2 reports</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Response Times</CardTitle>
                    <CardDescription>Average response times for your reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">High Priority</span>
                        <span className="font-semibold">2 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Medium Priority</span>
                        <span className="font-semibold">24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Low Priority</span>
                        <span className="font-semibold">3 days</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Your Average</span>
                          <span className="font-semibold text-green-600">18 hours</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
