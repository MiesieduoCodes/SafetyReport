"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Users,
  FileText,
  AlertTriangle,
  TrendingUp,
  Search,
  Filter,
  Eye,
  Edit,
  MessageSquare,
} from "lucide-react"

const allReports = [
  {
    id: "CR-2024-001",
    type: "Theft",
    location: "123 Main Street",
    date: "2024-01-15",
    status: "Under Investigation",
    priority: "Medium",
    reporter: "John Doe",
    assignedOfficer: "Officer Smith",
    description: "Bicycle theft from apartment complex",
  },
  {
    id: "CR-2024-002",
    type: "Vandalism",
    location: "Park Avenue",
    date: "2024-01-14",
    status: "Resolved",
    priority: "Low",
    reporter: "Anonymous",
    assignedOfficer: "Officer Johnson",
    description: "Graffiti on public property",
  },
  {
    id: "CR-2024-003",
    type: "Assault",
    location: "Downtown District",
    date: "2024-01-13",
    status: "Active Investigation",
    priority: "High",
    reporter: "Jane Smith",
    assignedOfficer: "Detective Brown",
    description: "Physical altercation reported",
  },
  {
    id: "CR-2024-004",
    type: "Drug-related",
    location: "School Zone",
    date: "2024-01-12",
    status: "Under Investigation",
    priority: "High",
    reporter: "Mary Johnson",
    assignedOfficer: "Detective Wilson",
    description: "Suspected drug activity near school",
  },
]

const officers = [
  { id: 1, name: "Officer Smith", badge: "12345", department: "Patrol", activeCase: 3 },
  { id: 2, name: "Officer Johnson", badge: "12346", department: "Community", activeCase: 2 },
  { id: 3, name: "Detective Brown", badge: "12347", department: "Investigations", activeCase: 5 },
  { id: 4, name: "Detective Wilson", badge: "12348", department: "Narcotics", activeCase: 4 },
]

export default function AdminPage() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredReports = allReports.filter((report) => {
    const matchesSearch =
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || report.status.toLowerCase().includes(filterStatus.toLowerCase())
    const matchesPriority = filterPriority === "all" || report.priority.toLowerCase() === filterPriority.toLowerCase()

    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "bg-green-100 text-green-800"
      case "under investigation":
      case "active investigation":
        return "bg-yellow-100 text-yellow-800"
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
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SafeReport Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">Law Enforcement</Badge>
              <Button variant="outline">Settings</Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Reports</p>
                    <p className="text-2xl font-bold text-gray-900">247</p>
                    <p className="text-xs text-green-600">+12% from last month</p>
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
                    <p className="text-2xl font-bold text-gray-900">23</p>
                    <p className="text-xs text-orange-600">Requires attention</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Resolution Rate</p>
                    <p className="text-2xl font-bold text-gray-900">87%</p>
                    <p className="text-xs text-green-600">Above target</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Officers</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-xs text-blue-600">On duty</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="reports" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="reports">Reports Management</TabsTrigger>
              <TabsTrigger value="officers">Officer Assignment</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">System Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="reports" className="space-y-6">
              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="mr-2 h-5 w-5" />
                    Filter Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="search">Search</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="search"
                          placeholder="Search reports..."
                          className="pl-10"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger>
                          <SelectValue placeholder="All statuses" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="investigation">Under Investigation</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select value={filterPriority} onValueChange={setFilterPriority}>
                        <SelectTrigger>
                          <SelectValue placeholder="All priorities" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Priorities</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reports Table */}
              <Card>
                <CardHeader>
                  <CardTitle>All Reports</CardTitle>
                  <CardDescription>Manage and track all crime reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assigned Officer</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell className="font-medium">{report.id}</TableCell>
                          <TableCell>{report.type}</TableCell>
                          <TableCell>{report.location}</TableCell>
                          <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge className={getPriorityColor(report.priority)}>{report.priority}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                          </TableCell>
                          <TableCell>{report.assignedOfficer}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="officers" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Officer Directory</CardTitle>
                    <CardDescription>Manage officer assignments and workload</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {officers.map((officer) => (
                        <div key={officer.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{officer.name}</p>
                            <p className="text-sm text-gray-500">
                              Badge #{officer.badge} • {officer.department}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{officer.activeCase} active cases</p>
                            <Button variant="outline" size="sm" className="mt-1">
                              Assign Case
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Assignment</CardTitle>
                    <CardDescription>Assign reports to officers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="report-select">Select Report</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a report" />
                          </SelectTrigger>
                          <SelectContent>
                            {allReports.map((report) => (
                              <SelectItem key={report.id} value={report.id}>
                                {report.id} - {report.type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="officer-select">Assign to Officer</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an officer" />
                          </SelectTrigger>
                          <SelectContent>
                            {officers.map((officer) => (
                              <SelectItem key={officer.id} value={officer.name}>
                                {officer.name} ({officer.activeCase} active)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Assignment Notes</Label>
                        <Textarea id="notes" placeholder="Add any special instructions or notes..." />
                      </div>
                      <Button className="w-full">Assign Report</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Crime Statistics</CardTitle>
                    <CardDescription>Monthly crime report breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Theft</span>
                        <span className="font-semibold">45 reports</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Vandalism</span>
                        <span className="font-semibold">23 reports</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Assault</span>
                        <span className="font-semibold">12 reports</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Drug-related</span>
                        <span className="font-semibold">8 reports</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Other</span>
                        <span className="font-semibold">15 reports</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Response Performance</CardTitle>
                    <CardDescription>Average response times by priority</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>High Priority</span>
                        <span className="font-semibold text-green-600">1.2 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Medium Priority</span>
                        <span className="font-semibold text-yellow-600">18 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Low Priority</span>
                        <span className="font-semibold text-blue-600">2.5 days</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Overall Average</span>
                          <span className="font-semibold">24 hours</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Configuration</CardTitle>
                  <CardDescription>Manage system settings and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="auto-assign">Auto-Assignment Rules</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select assignment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="round-robin">Round Robin</SelectItem>
                          <SelectItem value="workload">Based on Workload</SelectItem>
                          <SelectItem value="specialty">Based on Specialty</SelectItem>
                          <SelectItem value="manual">Manual Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notification-settings">Notification Settings</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="email-notifications" defaultChecked />
                          <Label htmlFor="email-notifications">Email notifications for new reports</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="sms-notifications" />
                          <Label htmlFor="sms-notifications">SMS notifications for high priority</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="dashboard-alerts" defaultChecked />
                          <Label htmlFor="dashboard-alerts">Dashboard alerts</Label>
                        </div>
                      </div>
                    </div>
                    <Button>Save Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
