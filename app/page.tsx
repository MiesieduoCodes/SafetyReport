import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Phone, FileText, Users, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SafeReport</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/report" className="text-gray-600 hover:text-blue-600 transition-colors">
                Report Crime
              </Link>
              <Link href="/incidents" className="text-gray-600 hover:text-blue-600 transition-colors">
                View Incidents
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
                Resources
              </Link>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Report Crime Safely & Anonymously</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Help make your community safer by reporting criminal activities. Our secure platform ensures your safety
            while connecting you with law enforcement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report">
              <Button size="lg" className="w-full sm:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Report an Incident
              </Button>
            </Link>
            <Link href="/emergency">
              <Button size="lg" variant="destructive" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: Call 911
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How SafeReport Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Submit Report</CardTitle>
                <CardDescription>
                  Fill out our comprehensive form with incident details, location, and evidence
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Secure Processing</CardTitle>
                <CardDescription>
                  Your report is securely transmitted to relevant law enforcement agencies
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Community Safety</CardTitle>
                <CardDescription>Help build a safer community through collaborative crime prevention</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
              <div className="text-gray-600">Reports Submitted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,923</div>
              <div className="text-gray-600">Cases Resolved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Community Activity</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Theft Report</CardTitle>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <CardDescription>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Downtown District
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Bicycle theft reported near Main Street. Investigation ongoing.</p>
                <div className="mt-2">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    Under Investigation
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Vandalism</CardTitle>
                  <span className="text-sm text-gray-500">5 hours ago</span>
                </div>
                <CardDescription>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Park Avenue
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Graffiti reported on public property. Cleanup scheduled.</p>
                <div className="mt-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Resolved</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Suspicious Activity</CardTitle>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <CardDescription>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    Residential Area
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Unusual activity reported. Patrol increased in area.</p>
                <div className="mt-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Monitoring</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-lg font-bold">SafeReport</span>
              </div>
              <p className="text-gray-400">Making communities safer through collaborative crime reporting.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/report" className="hover:text-white">
                    Report Crime
                  </Link>
                </li>
                <li>
                  <Link href="/incidents" className="hover:text-white">
                    View Incidents
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Emergency</h3>
              <p className="text-gray-400 mb-2">For immediate emergencies:</p>
              <p className="text-xl font-bold text-red-400">Call 911</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SafeReport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
