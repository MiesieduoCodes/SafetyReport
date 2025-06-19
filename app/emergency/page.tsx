"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Phone, MapPin, Clock, AlertTriangle, Navigation } from "lucide-react";
import Link from "next/link";

export default function EmergencyPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Location access denied");
        }
      );
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleEmergencyCall = () => {
    window.location.href = "tel:911";
  };

  return (
    <div className="min-h-screen bg-red-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SafeReport</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/report">
                <Button variant="outline">Report Crime</Button>
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
          <Card className="mb-8 border-red-300 bg-red-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-red-700 mb-2">Emergency Services</h1>
                <p className="text-red-600 text-lg mb-6">
                  For immediate life-threatening emergencies requiring police, fire, or medical response.
                </p>
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-4 h-auto"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  CALL 911 NOW
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Current Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {currentTime.toLocaleTimeString()}
                </p>
                <p className="text-gray-600">
                  {currentTime.toLocaleDateString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Your Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                {location ? (
                  <div>
                    <p className="text-sm text-gray-600">Coordinates:</p>
                    <p className="font-mono text-sm">
                      {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Navigation className="mr-2 h-4 w-4" />
                      Share Location
                    </Button>
                  </div>
                ) : (
                  <p className="text-gray-500">Location not available</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contacts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Emergency Contact Numbers</CardTitle>
              <CardDescription>Important numbers for different types of emergencies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-red-50">
                    <div>
                      <h3 className="font-semibold text-red-700">Emergency Services</h3>
                      <p className="text-sm text-red-600">Police, Fire, Medical</p>
                    </div>
                    <Button 
                      onClick={() => window.location.href = "tel:911"}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      911
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Non-Emergency Police</h3>
                      <p className="text-sm text-gray-600">For non-urgent police matters</p>
                    </div>
                    <Button 
                      onClick={() => window.location.href = "tel:5551234567"}
                      variant="outline"
                    >
                      Call
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Poison Control</h3>
                      <p className="text-sm text-gray-600">24/7 poison emergency help</p>
                    </div>
                    <Button 
                      onClick={() => window.location.href = "tel:18002221222"}
                      variant="outline"
                    >
                      Call
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Crisis Hotline</h3>
                      <p className="text-sm text-gray-600">Mental health crisis support</p>
                    </div>
                    <Button 
                      onClick={() => window.location.href = "tel:9876543210"}
                      variant="outline"
                    >
                      Call
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Domestic Violence</h3>
                      <p className="text-sm text-gray-600">24/7 confidential support</p>
                    </div>
                    <Button 
                      onClick={() => window.location.href = "tel:18007997233"}
                      variant="outline"
                    >
                      Call
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Crime Stoppers</h3>
                      <p className="text-sm text-gray-600">Anonymous tip line</p>
                    </div>
                    <Button 
                      onClick={() => window.location.href = "tel:5675678901"}
                      variant="outline"
                    >
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Checklist */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Emergency Response Checklist</CardTitle>
              <CardDescription>Steps to take during an emergency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-red-700">If You're in Immediate Danger:</h3>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      Call 911 immediately
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      Stay on the line with the operator
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      Provide your exact location
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      Follow the operator's instructions
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                      Stay safe until help arrives
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-blue-700">If You Witness an Emergency:</h3>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      Ensure your own safety first
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      Call 911 and report what you see
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      Provide detailed location information
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      Stay available to provide more information
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                      Do not interfere with emergency responders
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Fast access to important features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/report">
                  <Button variant="outline" className="w-full h-20 flex flex-col">
                    <Shield className="h-6 w-6 mb-2" />
                    Report Non-Emergency Crime
                  </Button>
                </Link>
                {/* Add more quick action buttons as needed */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}