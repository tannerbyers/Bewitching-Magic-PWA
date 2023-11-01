/* eslint-disable */
import RitualCards from './RitualCards';

export default {
  title: "RitualCards",
};

export const Default = () => <RitualCards moonRituals={[{ description: "test ritual" }]} />;

Default.story = {
  name: 'default',
};
