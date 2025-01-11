import ScrollArea from '@/global/components/ScrollArea';
import { MEET_LIST_MOCKUP } from '../constants';
import MeetingListItem from './MeetingListItem';

const MeetingList = () => {
  return (
    <ScrollArea maxHeight={240}>
      {MEET_LIST_MOCKUP.map((data) => (
        <MeetingListItem key={data.id} data={data} />
      ))}
    </ScrollArea>
  );
};

export default MeetingList;
