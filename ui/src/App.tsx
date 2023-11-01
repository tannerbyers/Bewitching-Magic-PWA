import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import RitualSection from "./components/RitualSection/RitualSection";
import ItemSection from "./components/ItemSection/ItemSection";
import TwinklingStars from "./components/TwinklingStars/TwinklingStars";
import moonPhase from "./static-data/moonPhase.json"

const getMoonPhaseName = (async () => {
  const res = await fetch('/getMoonPhase')
  if (res.status == 200) {
    return res.json()
  } else {
    return {}
  }
})

const getMoonPhaseData = (async (currentMoonPhase: string) => {
  // Get the path of the json file
  const jsonData = moonPhase

  // todo
  // we'll filter it here but it really I should just get it by the object key and not store as array. 
  const filteredMoonPhase = jsonData.moonPhases.filter((moonPhase: { name: string }) => moonPhase.name == currentMoonPhase)
  return filteredMoonPhase[0]
})

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [moonPhaseData, setMoonPhaseData] = useState<any>(null);
  const [moonRituals, setMoonRituals] = useState<any>(null);
  const [moonRitualItems, setMoonRitualItems] = useState<any>(null);

  useEffect(() => {

    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const moonPhaseNameResult = await getMoonPhaseName()
        const moonPhaseDataResult = await getMoonPhaseData(moonPhaseNameResult.moonPhase)
        // Update state only if the component is still mounted

        console.log(moonPhaseNameResult, moonPhaseDataResult)
        setMoonPhaseData(moonPhaseDataResult)
        setMoonRituals(moonPhaseDataResult.rituals.tasks)
        setMoonRitualItems(moonPhaseDataResult.items.products)

        setIsLoading(false);

      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel any ongoing requests when the component unmounts
    return () => {
    };
  }, []);

  return (
    isLoading ? (
      <p>Loading...</p>
    ) : (<div className="App">
      <Header></Header>
      <HeroSection moonPhase={moonPhaseData}></HeroSection>
      <TwinklingStars/>
      <RitualSection moonRituals={moonRituals}></RitualSection>
      <ItemSection moonRitualItems={moonRitualItems} ></ItemSection>
      <p className="pr-4 mt-8 text-right text-white">Created by Tanner Byers</p>
    </div>
    )
  )
}

export default App;
