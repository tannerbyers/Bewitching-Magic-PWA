/* eslint-disable */
import RitualSection from './RitualSection';

export default {
  title: "RitualSection",
};

export const Default = () => <RitualSection moonRituals={[{ description: "test ritual" }]} />;

Default.story = {
  name: 'default',
};
