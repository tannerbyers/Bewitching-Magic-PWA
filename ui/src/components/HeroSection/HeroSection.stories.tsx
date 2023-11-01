/* eslint-disable */
import HeroSection from './HeroSection';

export default {
  title: "HeroSection",
};

export const Default = () => <HeroSection moonPhase={{ name: "waning crescent", rituals: [] }} />;

Default.story = {
  name: 'default',
};
