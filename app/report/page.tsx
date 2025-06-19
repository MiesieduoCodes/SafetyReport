"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ReportPage() {
  const [date, setDate] = useState<Date>()
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [formData, setFormData] = useState({
    crimeType: "",
    location: "",
    description: "",
    witnessCount: "",
    suspectDescription: "",
    vehicleInfo: "",
    evidence: "",
    reporterName: "",
    reporterPhone: "",
    reporterEmail: "",
    emergencyContacted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    alert(
      "Report submitted successfully! Reference ID: CR-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    )
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
              <Link href="/incidents">
                <Button variant="outline">View Incidents</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Emergency Alert */}
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-semibold">Emergency Situations</span>
              </div>
              <p className="text-red-600 mt-2">
                If this is an emergency requiring immediate police, fire, or medical response, please call 911
                immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Crime Report Form</CardTitle>
              <CardDescription>
                Please provide as much detail as possible. All information is confidential and will be shared only with
                relevant law enforcement agencies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Anonymous Reporting Option */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                  <Label htmlFor="anonymous" className="text-sm font-medium">
                    Submit this report anonymously
                  </Label>
                </div>

                {/* Crime Type */}
                <div className="space-y-2">
                  <Label htmlFor="crimeType">Type of Crime *</Label>
                  <Select onValueChange={(value) => handleInputChange("crimeType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crime type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theft">Theft/Burglary</SelectItem>
                      <SelectItem value="assault">Assault</SelectItem>
                      <SelectItem value="vandalism">Vandalism</SelectItem>
                      <SelectItem value="drug">Drug-related</SelectItem>
                      <SelectItem value="fraud">Fraud/Scam</SelectItem>
                      <SelectItem value="domestic">Domestic Violence</SelectItem>
                      <SelectItem value="cyber">Cybercrime</SelectItem>
                      <SelectItem value="traffic">Traffic Violation</SelectItem>
                      <SelectItem value="suspicious">Suspicious Activity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date of Incident *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? date.toLocaleDateString() : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Approximate Time</Label>
                    <Input id="time" type="time" placeholder="HH:MM" />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Location of Incident *</Label>
                  <Input
                    id="location"
                    placeholder="Street address, intersection, or general area"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what happened in detail. Include sequence of events, what you saw, heard, etc."
                    className="min-h-32"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    required
                  />
                </div>

                {/* Suspect Information */}
                <div className="space-y-2">
                  <Label htmlFor="suspectDescription">Suspect Description</Label>
                  <Textarea
                    id="suspectDescription"
                    placeholder="Physical description, clothing, distinguishing features, etc."
                    value={formData.suspectDescription}
                    onChange={(e) => handleInputChange("suspectDescription", e.target.value)}
                  />
                </div>

                {/* Vehicle Information */}
                <div className="space-y-2">
                  <Label htmlFor="vehicleInfo">Vehicle Information</Label>
                  <Textarea
                    id="vehicleInfo"
                    placeholder="Make, model, color, license plate, distinguishing features"
                    value={formData.vehicleInfo}
                    onChange={(e) => handleInputChange("vehicleInfo", e.target.value)}
                  />
                </div>

                {/* Witnesses */}
                <div className="space-y-2">
                  <Label htmlFor="witnessCount">Number of Witnesses</Label>
                  <Select onValueChange={(value) => handleInputChange("witnessCount", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of witnesses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">None</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4+">4 or more</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Evidence */}
                <div className="space-y-2">
                  <Label htmlFor="evidence">Evidence Available</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="photos" />
                      <Label htmlFor="photos">Photos</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="video" />
                      <Label htmlFor="video">Video</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="audio" />
                      <Label htmlFor="audio">Audio Recording</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="documents" />
                      <Label htmlFor="documents">Documents</Label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button type="button" variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Evidence Files
                    </Button>
                  </div>
                </div>

                {/* Reporter Information (if not anonymous) */}
                {!isAnonymous && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="text-lg font-semibold">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="reporterName">Full Name *</Label>
                        <Input
                          id="reporterName"
                          placeholder="Your full name"
                          value={formData.reporterName}
                          onChange={(e) => handleInputChange("reporterName", e.target.value)}
                          required={!isAnonymous}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reporterPhone">Phone Number</Label>
                        <Input
                          id="reporterPhone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.reporterPhone}
                          onChange={(e) => handleInputChange("reporterPhone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reporterEmail">Email Address</Label>
                      <Input
                        id="reporterEmail"
                        type="email"
                        placeholder="Your email address"
                        value={formData.reporterEmail}
                        onChange={(e) => handleInputChange("reporterEmail", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Emergency Services */}
                <div className="space-y-2">
                  <Label>Have you already contacted emergency services?</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="emergency-yes" />
                      <Label htmlFor="emergency-yes">Yes, I have called 911</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="emergency-no" />
                      <Label htmlFor="emergency-no">No, this is not an emergency</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button type="submit" className="flex-1">
                    Submit Report
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
