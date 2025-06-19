"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, MapPin, Calendar, Filter, Eye } from "lucide-react"
import Link from "next/link"

const incidents = [
  {
    id: "CR-2024-001",
    type: "Theft",
    location: "123 Main Street",
    date: "2024-01-15",
    status: "Under Investigation",
    priority: "Medium",
    description: "Bicycle theft from apartment complex",
  },
  {
    id: "CR-2024-002",
    type: "Vandalism",
    location: "Park Avenue",
    date: "2024-01-14",
    status: "Resolved",
    priority: "Low",
    description: "Graffiti on public property",
  },
  {
    id: "CR-2024-003",
    type: "Assault",
    location: "Downtown District",
    date: "2024-01-13",
    status: "Active Investigation",
    priority: "High",
    description: "Physical altercation reported",
  },
  {
    id: "CR-2024-004",
    type: "Suspicious Activity",
    location: "Residential Area",
    date: "2024-01-12",
    status: "Monitoring",
    priority: "Medium",
    description: "Unusual activity reported by residents",
  },
  {
    id: "CR-2024-005",
    type: "Drug-related",
    location: "School Zone",
    date: "2024-01-11",
    status: "Under Investigation",
    priority: "High",
    description: "Suspected drug activity near school",
  },
  {
    id: "CR-2024-006",
    type: "Fraud",
    location: "Online",
    date: "2024-01-10",
    status: "Closed",
    priority: "Medium",
    description: "Online scam reported",
  },
]

export default function IncidentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      incident.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || incident.type.toLowerCase() === filterType.toLowerCase()
    const matchesStatus = filterStatus === "all" || incident.status.toLowerCase().includes(filterStatus.toLowerCase())
    const matchesPriority = filterPriority === "all" || incident.priority.toLowerCase() === filterPriority.toLowerCase()

    return matchesSearch && matchesType && matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
      case "closed":
        return "bg-green-100 text-green-800"
      case "under investigation":
      case "active investigation":
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
              <Link href="/report">
                <Button>Report Crime</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Incidents</h1>
            <p className="text-gray-600">View and search reported incidents in your area</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Search & Filter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search incidents..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Crime Type</Label>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="theft">Theft</SelectItem>
                      <SelectItem value="vandalism">Vandalism</SelectItem>
                      <SelectItem value="assault">Assault</SelectItem>
                      <SelectItem value="suspicious activity">Suspicious Activity</SelectItem>
                      <SelectItem value="drug-related">Drug-related</SelectItem>
                      <SelectItem value="fraud">Fraud</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <SelectItem value="monitoring">Monitoring</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
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

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredIncidents.length} of {incidents.length} incidents
            </p>
          </div>

          {/* Incidents List */}
          <div className="space-y-4">
            {filteredIncidents.map((incident) => (
              <Card key={incident.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{incident.id}</h3>
                        <Badge variant="outline">{incident.type}</Badge>
                        <Badge className={getPriorityColor(incident.priority)}>{incident.priority} Priority</Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{incident.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {incident.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(incident.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <Badge className={getStatusColor(incident.status)}>{incident.status}</Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredIncidents.length === 0 && (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-gray-500">No incidents found matching your search criteria.</p>
              </CardContent>
            </Card>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-blue-600 text-white">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
