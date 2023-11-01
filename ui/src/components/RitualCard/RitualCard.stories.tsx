/* eslint-disable */
import RitualCard from './RitualCard';

export default {
  title: "RitualCard",
};

export const Default = () => <RitualCard ritual={{description: "test header: test ritual description"}}/>;

Default.story = {
  name: 'default',
};
