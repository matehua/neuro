import React, { useEffect } from 'react';
import { LineChart, BarChart, Activity, Target, Calendar, ClipboardList, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';


const PatientDashboard: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.patientResources && safeT.patientResources.patientDashboard) ? safeT : {
    patientResources: {
      patientDashboard: {
        title: "Patient Dashboard",
        subtitle: "Track your progress, manage your care, and access personalized resources",
        login: "Login",
        register: "Register",
        features: {
          trackProgress: "Track Progress",
          manageExercises: "Manage Exercises",
          setGoals: "Set Goals",
          viewHistory: "View History",
          shareWithProvider: "Share with Provider"
        }
      }
    },
    nav: { home: "Home", expertise: "Expertise", appointments: "Appointments", contact: "Contact" },
    hero: { title: "Welcome", subtitle: "Professional Care", description: "Expert medical services" },
    footer: { description: "Professional medical practice", quickLinks: "Quick Links", contact: "Contact" }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {finalT.patientResources.patientDashboard.title}
              </h1>
              <p className="text-muted-foreground mb-8">
                {finalT.patientResources.patientDashboard.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="#login">{finalT.patientResources.patientDashboard.login}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#register">{finalT.patientResources.patientDashboard.register}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Dashboard Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.patientDashboard.features.trackProgress}</CardTitle>
                  <CardDescription>
                    Monitor your improvement over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track key metrics like pain levels, mobility improvements, and symptom changes. Visualize your progress with easy-to-understand charts and graphs.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#login">Access Dashboard</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.patientDashboard.features.manageExercises}</CardTitle>
                  <CardDescription>
                    Manage your personalized exercise program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access your customized exercise plan, track completion, and provide feedback on difficulty or pain. Receive adjustments based on your progress.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#login">View Exercise Plan</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.patientDashboard.features.setGoals}</CardTitle>
                  <CardDescription>
                    Set and track personalized health goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Define meaningful goals for pain reduction, increased mobility, or returning to specific activities. Track your progress and celebrate achievements.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#login">Set Goals</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ClipboardList className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.patientDashboard.features.viewHistory}</CardTitle>
                  <CardDescription>
                    Access your assessment history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Review past assessments, track changes in your condition over time, and see how your treatment plan has evolved based on your progress.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#login">View History</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{finalT.patientResources.patientDashboard.features.shareWithProvider}</CardTitle>
                  <CardDescription>
                    Share information with your healthcare team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Securely share your progress, exercise adherence, and symptom changes with Dr. Aliashkevich or other healthcare providers to enhance your care.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="#login">Share Information</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Dashboard Preview</h2>
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="progress" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
                  <TabsTrigger value="exercises">Exercise Management</TabsTrigger>
                  <TabsTrigger value="goals">Goal Setting</TabsTrigger>
                </TabsList>
                <TabsContent value="progress" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Progress Tracking</CardTitle>
                      <CardDescription>
                        Monitor your improvement over time
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Pain Level Tracking</h3>
                          <div className="bg-card border rounded-lg p-4 h-64 flex items-center justify-center">
                            <div className="text-center">
                              <LineChart className="h-16 w-16 text-primary mx-auto mb-4" />
                              <p className="text-muted-foreground">
                                Pain level visualization will appear here
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Mobility Improvement</h3>
                          <div className="bg-card border rounded-lg p-4 h-64 flex items-center justify-center">
                            <div className="text-center">
                              <BarChart className="h-16 w-16 text-primary mx-auto mb-4" />
                              <p className="text-muted-foreground">
                                Mobility improvement visualization will appear here
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Symptom Journal</h3>
                        <div className="bg-card border rounded-lg p-4">
                          <p className="text-muted-foreground mb-4">
                            Record changes in your symptoms and track patterns over time.
                          </p>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="symptom-date">Date</Label>
                              <Input id="symptom-date" type="date" disabled />
                            </div>
                            <div>
                              <Label htmlFor="symptom-notes">Notes</Label>
                              <textarea 
                                id="symptom-notes" 
                                className="w-full h-24 p-2 border rounded-md bg-background" 
                                placeholder="Enter your symptom notes here..." 
                                disabled
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">
                        This is a preview of the progress tracking features. Create an account to access the full dashboard.
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="exercises" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Exercise Management</CardTitle>
                      <CardDescription>
                        Track and manage your personalized exercise program
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-card border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Today's Exercises</h3>
                            <span className="text-sm text-muted-foreground">3 of 5 completed</span>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                              <div>
                                <p className="font-medium">Cervical Retraction</p>
                                <p className="text-sm text-muted-foreground">3 sets x 10 reps</p>
                              </div>
                              <Button variant="outline" size="sm" disabled>Mark Complete</Button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                              <div>
                                <p className="font-medium">Prone Cobra</p>
                                <p className="text-sm text-muted-foreground">3 sets x 8 reps</p>
                              </div>
                              <Button variant="outline" size="sm" disabled>Mark Complete</Button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                              <div>
                                <p className="font-medium">Bird Dog</p>
                                <p className="text-sm text-muted-foreground">3 sets x 10 reps each side</p>
                              </div>
                              <Button variant="outline" size="sm" disabled>Mark Complete</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-card border rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4">Exercise Feedback</h3>
                          <p className="text-muted-foreground mb-4">
                            Provide feedback on your exercises to help us adjust your program.
                          </p>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="exercise-difficulty">Difficulty Level</Label>
                              <select 
                                id="exercise-difficulty" 
                                className="w-full p-2 border rounded-md bg-background" 
                                disabled
                              >
                                <option>Select difficulty level</option>
                                <option>Too Easy</option>
                                <option>Just Right</option>
                                <option>Too Difficult</option>
                              </select>
                            </div>
                            <div>
                              <Label htmlFor="exercise-pain">Pain During Exercise</Label>
                              <select 
                                id="exercise-pain" 
                                className="w-full p-2 border rounded-md bg-background" 
                                disabled
                              >
                                <option>Select pain level</option>
                                <option>No Pain</option>
                                <option>Mild Pain</option>
                                <option>Moderate Pain</option>
                                <option>Severe Pain</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">
                        This is a preview of the exercise management features. Create an account to access the full dashboard.
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="goals" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Goal Setting</CardTitle>
                      <CardDescription>
                        Set and track personalized health goals
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-card border rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4">Current Goals</h3>
                          <div className="space-y-4">
                            <div className="p-3 bg-muted/50 rounded-md">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium">Reduce neck pain intensity</p>
                                <span className="text-sm text-muted-foreground">60% Complete</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">Target date: December 15, 2023</p>
                            </div>
                            <div className="p-3 bg-muted/50 rounded-md">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-medium">Return to tennis</p>
                                <span className="text-sm text-muted-foreground">30% Complete</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '30%' }}></div>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">Target date: January 30, 2024</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-card border rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-4">Set New Goal</h3>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="goal-description">Goal Description</Label>
                              <Input 
                                id="goal-description" 
                                placeholder="e.g., Reduce back pain, Improve mobility, Return to specific activity" 
                                disabled 
                              />
                            </div>
                            <div>
                              <Label htmlFor="goal-target-date">Target Date</Label>
                              <Input id="goal-target-date" type="date" disabled />
                            </div>
                            <div>
                              <Label htmlFor="goal-type">Goal Type</Label>
                              <select 
                                id="goal-type" 
                                className="w-full p-2 border rounded-md bg-background" 
                                disabled
                              >
                                <option>Select goal type</option>
                                <option>Pain Reduction</option>
                                <option>Mobility Improvement</option>
                                <option>Activity Return</option>
                                <option>Exercise Achievement</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">
                        This is a preview of the goal setting features. Create an account to access the full dashboard.
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Login/Register Section */}
        <section id="login" className="py-16">
          <div className="container">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Access Your Dashboard</CardTitle>
                  <CardDescription>
                    Login or create an account to access your personalized dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="register" id="register">Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="mt-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div>
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" placeholder="Enter your password" />
                        </div>
                        <Button className="w-full">Login</Button>
                        <p className="text-sm text-center text-muted-foreground">
                          <a href="#" className="text-primary hover:underline">Forgot password?</a>
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="register" className="mt-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="register-name">Full Name</Label>
                          <Input id="register-name" placeholder="Enter your full name" />
                        </div>
                        <div>
                          <Label htmlFor="register-email">Email</Label>
                          <Input id="register-email" type="email" placeholder="Enter your email" />
                        </div>
                        <div>
                          <Label htmlFor="register-password">Password</Label>
                          <Input id="register-password" type="password" placeholder="Create a password" />
                        </div>
                        <div>
                          <Label htmlFor="register-confirm-password">Confirm Password</Label>
                          <Input id="register-confirm-password" type="password" placeholder="Confirm your password" />
                        </div>
                        <Button className="w-full">Create Account</Button>
                        <p className="text-xs text-center text-muted-foreground">
                          By creating an account, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Take Control of Your Spine Health Journey</h2>
              <p className="text-muted-foreground mb-8">
                Create an account today to access your personalized dashboard, track your progress, and receive customized recommendations for your spine health.
              </p>
              <Button asChild size="lg">
                <a href="#register">Create Your Account</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

PatientDashboard.displayName = 'PatientDashboard';
export default PatientDashboard;
