import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Phone, MapPin, Clock, AlertTriangle, Users, FileText, Heart } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Safety Resources</h1>
            <p className="text-gray-600">Essential information and contacts for community safety</p>
          </div>

          {/* Emergency Contacts */}
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <AlertTriangle className="mr-2 h-6 w-6" />
                Emergency Contacts
              </CardTitle>
              <CardDescription className="text-red-600">
                For immediate emergencies requiring police, fire, or medical response
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-red-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-red-700">Emergency Services</h3>
                  <p className="text-2xl font-bold text-red-600">911</p>
                  <p className="text-sm text-red-600">Police, Fire, Medical</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-700">Non-Emergency Police</h3>
                  <p className="text-xl font-bold text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-600">For non-urgent matters</p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-700">Crisis Hotline</h3>
                  <p className="text-xl font-bold text-gray-600">(555) 987-6543</p>
                  <p className="text-sm text-gray-600">24/7 Support</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Tips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Personal Safety Tips</CardTitle>
                <CardDescription>Stay safe in your daily activities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Stay aware of your surroundings at all times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Keep your phone charged and easily accessible</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Trust your instincts - if something feels wrong, leave</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Share your location with trusted friends or family</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Avoid displaying expensive items in public</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Home Security</CardTitle>
                <CardDescription>Protect your home and family</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Install quality locks on all doors and windows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Use timers on lights when away from home</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Keep bushes and trees trimmed around windows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Consider a security system or cameras</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Get to know your neighbors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Local Resources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Local Resources & Services</CardTitle>
              <CardDescription>Community organizations and support services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center">
                    <Users className="mr-2 h-5 w-5 text-blue-600" />
                    Victim Support Services
                  </h3>
                  <p className="text-sm text-gray-600">Counseling and support for crime victims</p>
                  <p className="text-sm font-medium">(555) 234-5678</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-green-600" />
                    Neighborhood Watch
                  </h3>
                  <p className="text-sm text-gray-600">Community crime prevention program</p>
                  <p className="text-sm font-medium">watch@community.org</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-purple-600" />
                    Legal Aid Society
                  </h3>
                  <p className="text-sm text-gray-600">Free legal assistance for victims</p>
                  <p className="text-sm font-medium">(555) 345-6789</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-red-600" />
                    Domestic Violence Hotline
                  </h3>
                  <p className="text-sm text-gray-600">24/7 confidential support</p>
                  <p className="text-sm font-medium">(555) 456-7890</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-orange-600" />
                    Community Center
                  </h3>
                  <p className="text-sm text-gray-600">Safety workshops and programs</p>
                  <p className="text-sm font-medium">123 Community Ave</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-indigo-600" />
                    Crime Stoppers
                  </h3>
                  <p className="text-sm text-gray-600">Anonymous tip reporting</p>
                  <p className="text-sm font-medium">(555) 567-8901</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Apps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recommended Safety Apps</CardTitle>
              <CardDescription>Mobile apps to enhance your personal safety</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Emergency SOS</h3>
                    <p className="text-sm text-gray-600 mb-2">Quickly contact emergency services and notify contacts</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        iOS
                      </Button>
                      <Button size="sm" variant="outline">
                        Android
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">SafeTrek</h3>
                    <p className="text-sm text-gray-600 mb-2">Hold button for safety, release to alert authorities</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        iOS
                      </Button>
                      <Button size="sm" variant="outline">
                        Android
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Citizen</h3>
                    <p className="text-sm text-gray-600 mb-2">Real-time safety alerts in your area</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        iOS
                      </Button>
                      <Button size="sm" variant="outline">
                        Android
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Find My Friends</h3>
                    <p className="text-sm text-gray-600 mb-2">Share location with trusted contacts</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        iOS
                      </Button>
                      <Button size="sm" variant="outline">
                        Android
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about crime reporting and safety</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Can I report a crime anonymously?</h3>
                  <p className="text-sm text-gray-600">
                    Yes, you can choose to submit reports anonymously. However, providing contact information helps law
                    enforcement follow up if needed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How quickly will my report be reviewed?</h3>
                  <p className="text-sm text-gray-600">
                    High priority reports are typically reviewed within 2 hours. Medium priority within 24 hours, and
                    low priority within 3 days.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What should I do if I witness a crime in progress?</h3>
                  <p className="text-sm text-gray-600">
                    Call 911 immediately for crimes in progress. Do not attempt to intervene directly. Your safety is
                    the top priority.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Will I be notified about the status of my report?</h3>
                  <p className="text-sm text-gray-600">
                    If you provide contact information, you'll receive updates on your report's status through your
                    preferred communication method.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
