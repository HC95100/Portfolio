"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const WhatCanIdoToday = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [eventType, setEventType] = useState("");
  const [cost, setCost] = useState("");
  const [otherFilters, setOtherFilters] = useState("");

  const handleSearch = () => {
    console.log({
      location,
      date: date ? format(date, "PPP") : "Any Date",
      eventType,
      cost,
      otherFilters,
    });
    // Ici, vous intégreriez la logique de recherche réelle
    alert("Recherche lancée ! (Voir la console pour les filtres)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">WhatCanIdoToday.com</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Découvrez quoi faire aujourd'hui, selon vos envies !
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="location">📍 Lieu</Label>
            <Input
              id="location"
              placeholder="Ville, région, pays..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">📆 Date de l'événement</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Choisissez une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType">🧭 Type d'événement</Label>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger id="eventType">
                <SelectValue placeholder="Sélectionnez un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emploi">Emploi</SelectItem>
                <SelectItem value="expo">Exposition</SelectItem>
                <SelectItem value="sport">Sport</SelectItem>
                <SelectItem value="culture">Culture</SelectItem>
                <SelectItem value="concert">Concert</SelectItem>
                <SelectItem value="atelier">Atelier</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cost">💰 Coût</Label>
            <Select value={cost} onValueChange={setCost}>
              <SelectTrigger id="cost">
                <SelectValue placeholder="Gratuit ou payant ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gratuit">Gratuit</SelectItem>
                <SelectItem value="payant">Payant</SelectItem>
                <SelectItem value="indifferent">Indifférent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="otherFilters">📝 Autres filtres</Label>
            <Input
              id="otherFilters"
              placeholder="Mots-clés, thèmes spécifiques..."
              value={otherFilters}
              onChange={(e) => setOtherFilters(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSearch} className="w-full md:w-auto px-8 py-3 text-lg">
            Découvrir !
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WhatCanIdoToday;