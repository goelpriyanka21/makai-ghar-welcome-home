import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Leaf, 
  Users, 
  ChefHat,
  Calendar,
  Instagram,
  Facebook,
  Download
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-corn-dishes.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";
import traditionalKitchen from "@/assets/traditional-kitchen.jpg";

const Index = () => {
  const { toast } = useToast();
  const [reservationForm, setReservationForm] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    message: ''
  });

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Received!",
      description: "We'll contact you within 2 hours to confirm your booking.",
    });
    setReservationForm({ name: '', phone: '', guests: '', date: '', time: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-earth-brown">
              Makai Ghar
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('vision')} className="text-foreground hover:text-primary transition-colors">Vision</button>
              <button onClick={() => scrollToSection('menu')} className="text-foreground hover:text-primary transition-colors">Menu</button>
              <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
            <Button 
              variant="hero" 
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex"
            >
              Book Table
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Makai Ghar
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in [animation-delay:0.2s]">
            Come as a guest, leave as family
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s]">
            Experience the warmth of traditional Indian corn cuisine in a homestyle atmosphere where every meal is prepared with love and served with care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s]">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('menu')}
              className="text-lg px-8 py-3"
            >
              View Menu
            </Button>
            <Button 
              variant="warm" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-3"
            >
              Make Reservation
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-earth-brown mb-6">About Makai Ghar</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-earth-brown mb-6">
                  Rooted in Tradition, Served with Love
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Makai Ghar was born from a deep appreciation for the simple yet profound flavors of traditional Indian village cooking. Our story begins in the heart of rural India, where corn has been a staple food for generations, transformed into countless delicious preparations by loving hands.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We believe that food is more than sustenance—it's a bridge that connects hearts, cultures, and memories. Every dish we serve carries the essence of age-old recipes passed down through generations, prepared with the same care and attention that our grandmothers once lavished upon their families.
                </p>
                <div className="flex items-center gap-4">
                  <Heart className="text-primary w-6 h-6" />
                  <span className="text-earth-brown font-medium">Cooking with passion since day one</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={traditionalKitchen} 
                  alt="Traditional kitchen" 
                  className="rounded-lg shadow-warm w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Traditional Recipes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-earth-brown mb-6">Our Vision</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              To create a sanctuary where wholesome, home-style food meets modern dining, 
              while staying true to our roots and supporting our local community.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Leaf className="w-12 h-12 text-warm-green mx-auto mb-4" />
                  <CardTitle className="text-earth-brown">Local Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We source fresh corn and ingredients directly from local farmers, 
                    ensuring quality while supporting our agricultural community.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-earth-brown">Clean Cooking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our kitchen follows traditional methods combined with modern hygiene standards, 
                    ensuring every dish is both authentic and safe.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-spice-orange mx-auto mb-4" />
                  <CardTitle className="text-earth-brown">Warm Hospitality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every guest is treated like family, with personalized service and 
                    an atmosphere that makes you feel at home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-6">Our Signature Menu</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted corn-based dishes that celebrate the essence of traditional Indian cuisine
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Signature Dishes */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-earth-brown mb-8 text-center">Signature Corn Dishes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Roasted Makai", price: "₹120", desc: "Fresh corn roasted with traditional spices and herbs", badge: "Bestseller" },
                  { name: "Corn Curry (Makai Sabzi)", price: "₹180", desc: "Rich, creamy corn curry with aromatic spices", badge: "Chef's Special" },
                  { name: "Makai Pakoda", price: "₹140", desc: "Crispy corn fritters served with mint chutney", badge: "Popular" },
                  { name: "Corn Kheer", price: "₹90", desc: "Sweet corn pudding with cardamom and nuts", badge: "Traditional" },
                  { name: "Makai Ka Paratha", price: "₹80", desc: "Stuffed flatbread with spiced corn filling", badge: "" },
                  { name: "Corn Tikki", price: "₹160", desc: "Pan-fried corn patties with tangy sauces", badge: "New" }
                ].map((dish, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-earth-brown">{dish.name}</CardTitle>
                        {dish.badge && (
                          <Badge variant={dish.badge === "Bestseller" ? "default" : "secondary"} className="text-xs">
                            {dish.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-primary font-semibold">{dish.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{dish.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Combos & Beverages */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-earth-brown mb-6">Meal Combos</h3>
                <div className="space-y-4">
                  {[
                    { name: "Makai Thali", price: "₹250", desc: "Complete meal with 3 corn dishes, rice, and dessert" },
                    { name: "Family Feast", price: "₹800", desc: "Sharing platter for 4 people with assorted corn specialties" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start border-b border-border pb-4">
                      <div>
                        <h4 className="font-medium text-earth-brown">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-earth-brown mb-6">Beverages</h3>
                <div className="space-y-4">
                  {[
                    { name: "Fresh Corn Juice", price: "₹60", desc: "Refreshing sweet corn juice with ginger" },
                    { name: "Traditional Lassi", price: "₹50", desc: "Creamy yogurt drink with rose or mango" },
                    { name: "Masala Chai", price: "₹30", desc: "Aromatic spiced tea blend" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start border-b border-border pb-4">
                      <div>
                        <h4 className="font-medium text-earth-brown">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Full Menu PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-6">Meet Our Family</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Makai Ghar who bring tradition and innovation to your table
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img 
                      src={chefPortrait} 
                      alt="Chef Rajesh Kumar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-earth-brown">Chef Rajesh Kumar</CardTitle>
                  <CardDescription>Head Chef & Co-Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    With 15 years of experience in traditional Indian cuisine, Chef Rajesh brings authentic village flavors to urban dining. His passion for corn-based dishes stems from his childhood in rural Punjab.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                    <Users className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-earth-brown">Priya Sharma</CardTitle>
                  <CardDescription>Restaurant Manager & Co-Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Priya ensures every guest feels like family. Her background in hospitality management and deep understanding of Indian culture creates the warm, welcoming atmosphere Makai Ghar is known for.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-6">What Our Family Says</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The corn curry here reminds me of my grandmother's cooking. It's like being transported back to my childhood village. Truly authentic!",
                author: "Amit Patel",
                rating: 5
              },
              {
                text: "I came here as a stranger and left feeling like part of the family. The food is incredible and the service is beyond wonderful.",
                author: "Sarah Johnson",
                rating: 5
              },
              {
                text: "Best makai pakoda in the city! The atmosphere is so warm and welcoming. This place has become our family's regular spot.",
                author: "Raj & Meera Singh",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-earth-brown">
                    — {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Reservation Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-6">Visit Us & Book Your Table</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to become part of our family? Reserve your table or get in touch with us
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-earth-brown flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Make a Reservation
                </CardTitle>
                <CardDescription>
                  Book your table and we'll prepare a special welcome for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReservation} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={reservationForm.name}
                        onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={reservationForm.phone}
                        onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="guests">Guests *</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="12"
                        value={reservationForm.guests}
                        onChange={(e) => setReservationForm({...reservationForm, guests: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={reservationForm.date}
                        onChange={(e) => setReservationForm({...reservationForm, date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Time *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={reservationForm.time}
                        onChange={(e) => setReservationForm({...reservationForm, time: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Special Requests</Label>
                    <Textarea
                      id="message"
                      placeholder="Any dietary restrictions or special occasions we should know about?"
                      value={reservationForm.message}
                      onChange={(e) => setReservationForm({...reservationForm, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Book Table
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-earth-brown">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@makaighar.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Heritage Street, Cultural District<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <div className="text-muted-foreground">
                        <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                        <p>Fri - Sun: 11:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Google Maps Integration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-brown text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Makai Ghar</h3>
                <p className="text-cream/80 mb-4">
                  Come as a guest, leave as family. Experience authentic Indian corn cuisine in a warm, welcoming atmosphere.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-cream hover:text-primary hover:bg-cream/10">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-cream hover:text-primary hover:bg-cream/10">
                    <Facebook className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('menu')} className="block text-cream/80 hover:text-cream transition-colors">Menu</button>
                  <button onClick={() => scrollToSection('about')} className="block text-cream/80 hover:text-cream transition-colors">About Us</button>
                  <button onClick={() => scrollToSection('contact')} className="block text-cream/80 hover:text-cream transition-colors">Contact</button>
                  <button onClick={() => scrollToSection('team')} className="block text-cream/80 hover:text-cream transition-colors">Our Team</button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Opening Hours</h4>
                <div className="space-y-2 text-cream/80">
                  <p>Monday - Thursday</p>
                  <p className="text-sm">11:00 AM - 10:00 PM</p>
                  <p>Friday - Sunday</p>
                  <p className="text-sm">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-cream/80 mb-4 text-sm">
                  Stay updated with our latest dishes and special offers.
                </p>
                <div className="flex">
                  <Input 
                    placeholder="Your email" 
                    className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/60"
                  />
                  <Button variant="hero" className="ml-2">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
              <p>&copy; 2024 Makai Ghar. All rights reserved. Made with ❤️ for our family.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
